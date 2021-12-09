import {
  ChainId,
  RangeOrderData,
  RangeOrderPayload,
  RangeOrderStatus,
} from "../types";
import { Provider } from "@ethersproject/abstract-provider";
import { Signer } from "@ethersproject/abstract-signer";
import { RangeOrder } from "../contracts/types";
import { getRangeOrder, getUniswapV3Pool, getECR20 } from "../contracts";
import { SUBGRAPH_URL } from "../constants";
import {
  queryRangeOrder,
  queryOpenRangeOrderByUser,
  queryExecutedRangeOrderByUser,
  queryCancelledRangeOrderByUser,
} from "../utils/queries";
import { BigNumber, ContractTransaction, ethers } from "ethers";
import { sqrt } from "@uniswap/sdk-core";
import JSBI from "jsbi";
import { TickMath } from "@uniswap/v3-sdk";

export class GelatoRangeOrder {
  private _chainId: ChainId;
  private _provider: Provider | undefined;
  private _signer: Signer | undefined;
  private _gelatoRangeOrders: RangeOrder;
  private _subgraphUrl: string;

  get chainId(): ChainId {
    return this._chainId;
  }

  get provider(): Provider | undefined {
    return this._provider;
  }

  get signer(): Signer | undefined {
    return this._signer;
  }

  get gelatoRangeOrder(): RangeOrder {
    return this._gelatoRangeOrders;
  }

  get subgraphUrl(): string {
    return this._subgraphUrl;
  }

  constructor(chainId: ChainId, signerOrProvider?: Signer | Provider) {
    this._chainId = chainId;
    this._provider = Provider.isProvider(signerOrProvider)
      ? signerOrProvider
      : undefined;
    this._signer = Signer.isSigner(signerOrProvider)
      ? signerOrProvider
      : undefined;

    this._gelatoRangeOrders = getRangeOrder(chainId, signerOrProvider);
    this._subgraphUrl = SUBGRAPH_URL[chainId];
  }

  public async setRangeOrder(
    rangeOrderPayload: RangeOrderPayload
  ): Promise<ContractTransaction | undefined> {
    if (this._signer)
      return this._gelatoRangeOrders
        .connect(this._signer as Signer)
        .setRangeOrder(rangeOrderPayload);
    throw new Error("No Signer");
  }

  public async cancelRangeOrder(
    tokenId: BigNumber,
    rangeOrderPayload: RangeOrderPayload,
    startTime: number
  ): Promise<ContractTransaction | undefined> {
    if (this._signer)
      return this._gelatoRangeOrders
        .connect(this._signer as Signer)
        .cancelRangeOrder(tokenId, rangeOrderPayload, startTime);
    throw new Error("No Signer");
  }

  // Formula : https://ethereum.stackexchange.com/a/112587 and https://github.com/Uniswap/v3-sdk/issues/40#issuecomment-852351109
  public async getExchangeRate(
    pool: string,
    invert: boolean
  ): Promise<BigNumber> {
    // 18 decimals precision price
    const poolC = getUniswapV3Pool(pool, this.provider);
    const token0 = getECR20(
      await poolC.token0(),
      this._signer ? this._signer : this.provider
    );
    const token1 = getECR20(
      await poolC.token1(),
      this._signer ? this._signer : this.provider
    );
    const sqrtPriceX96: JSBI = JSBI.BigInt((await poolC.slot0()).sqrtPriceX96);

    return invert
      ? BigNumber.from(
          JSBI.multiply(
            JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(18)),
            JSBI.divide(
              JSBI.exponentiate(JSBI.BigInt(2), JSBI.BigInt(192)),
              JSBI.multiply(
                JSBI.multiply(sqrtPriceX96, sqrtPriceX96),
                JSBI.divide(
                  JSBI.exponentiate(
                    JSBI.BigInt(10),
                    JSBI.BigInt(await token0.decimals())
                  ),
                  JSBI.exponentiate(
                    JSBI.BigInt(10),
                    JSBI.BigInt(await token1.decimals())
                  )
                )
              )
            )
          ).toString()
        )
      : BigNumber.from(
          JSBI.divide(
            JSBI.multiply(
              JSBI.multiply(sqrtPriceX96, sqrtPriceX96),
              JSBI.divide(
                JSBI.multiply(
                  JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(18)),
                  JSBI.exponentiate(
                    JSBI.BigInt(10),
                    JSBI.BigInt(await token0.decimals())
                  )
                ),
                JSBI.exponentiate(
                  JSBI.BigInt(10),
                  JSBI.BigInt(await token1.decimals())
                )
              )
            ),
            JSBI.exponentiate(JSBI.BigInt(2), JSBI.BigInt(192))
          ).toString()
        );
  }

  public async isActiveRangeOrder(tokenId: BigNumber): Promise<boolean> {
    return (
      (await queryRangeOrder(this._chainId, tokenId)).status ==
      RangeOrderStatus.Submitted
    );
  }

  public async getOpenRangeOrders(user: string): Promise<RangeOrderData[]> {
    return await queryOpenRangeOrderByUser(this._chainId, user);
  }

  public async getExecutedRangeOrders(user: string): Promise<RangeOrderData[]> {
    return await queryExecutedRangeOrderByUser(this._chainId, user);
  }

  public async getCancelledRangeOrders(
    user: string
  ): Promise<RangeOrderData[]> {
    return await queryCancelledRangeOrderByUser(this._chainId, user);
  }

  // 18 decimals precision.
  public async getMinReturn(
    rangeOrderPayload: RangeOrderPayload
  ): Promise<BigNumber> {
    const pool = getUniswapV3Pool(rangeOrderPayload.pool, this.provider);
    const tickSpacing: number = await pool.tickSpacing();
    const token0 = getECR20(
      await pool.token0(),
      this._signer ? this._signer : this.provider
    );
    const token1 = getECR20(
      await pool.token1(),
      this._signer ? this._signer : this.provider
    );

    const lowerTick = rangeOrderPayload.zeroForOne
      ? rangeOrderPayload.tickThreshold
      : rangeOrderPayload.tickThreshold - tickSpacing;
    const upperTick = rangeOrderPayload.zeroForOne
      ? rangeOrderPayload.tickThreshold + tickSpacing
      : rangeOrderPayload.tickThreshold;

    const lowerPrice = TickMath.getSqrtRatioAtTick(
      parseInt(lowerTick.toString())
    );
    const upperPrice = TickMath.getSqrtRatioAtTick(
      parseInt(upperTick.toString())
    );

    const meanPrice = BigNumber.from(
      JSBI.divide(
        JSBI.multiply(
          JSBI.multiply(lowerPrice, upperPrice),
          JSBI.divide(
            JSBI.multiply(
              JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(18)),
              JSBI.exponentiate(
                JSBI.BigInt(10),
                JSBI.BigInt(await token0.decimals())
              )
            ),
            JSBI.exponentiate(
              JSBI.BigInt(10),
              JSBI.BigInt(await token1.decimals())
            )
          )
        ),
        JSBI.exponentiate(JSBI.BigInt(2), JSBI.BigInt(192))
      ).toString()
    );

    const decimals = rangeOrderPayload.zeroForOne
      ? [await token1.decimals(), await token0.decimals()]
      : [await token0.decimals(), await token1.decimals()];

    let amountIn18: BigNumber;
    if (decimals[1] > 18)
      amountIn18 = BigNumber.from(rangeOrderPayload.amountIn).div(
        ethers.utils.parseUnits("1", decimals[1] - 18)
      );
    else
      amountIn18 = BigNumber.from(rangeOrderPayload.amountIn).div(
        ethers.utils.parseUnits("1", 18 - decimals[1])
      );

    return rangeOrderPayload.zeroForOne
      ? meanPrice.mul(amountIn18).div(ethers.utils.parseUnits("1", 18))
      : amountIn18.mul(ethers.utils.parseUnits("1", 18)).div(meanPrice);
  }

  public async getNearTicks(
    poolAddr: string,
    price: BigNumber, // 18 decimal precision
    invert: boolean
  ): Promise<{ lower: number; upper: number }> {
    const pool = getUniswapV3Pool(poolAddr, this.provider);
    const token0 = getECR20(
      await pool.token0(),
      this._signer ? this._signer : this.provider
    );
    const token1 = getECR20(
      await pool.token1(),
      this._signer ? this._signer : this.provider
    );

    // sqrtPriceX96 = sqrt(price) * 2 ** 96
    const sqrtPriceX96 = JSBI.divide(
      JSBI.multiply(
        sqrt(
          JSBI.BigInt(
            invert
              ? ethers.utils.parseUnits("1", 18).pow(2).div(price).toString()
              : price.toString()
          )
        ),
        JSBI.exponentiate(JSBI.BigInt(2), JSBI.BigInt(96))
      ),
      sqrt(
        JSBI.divide(
          JSBI.multiply(
            JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(18)),
            JSBI.exponentiate(
              JSBI.BigInt(10),
              JSBI.BigInt(await token0.decimals())
            )
          ),
          JSBI.exponentiate(
            JSBI.BigInt(10),
            JSBI.BigInt(await token1.decimals())
          )
        )
      )
    );

    const tick = TickMath.getTickAtSqrtRatio(sqrtPriceX96);

    const tickSpacing: number = await pool.tickSpacing();

    const lower = tick - (tick % tickSpacing);
    const upper = lower + tickSpacing;

    return { lower, upper };
  }

  public async getPriceFromTick(
    poolAddr: string,
    tick: number
  ): Promise<{ lowerPrice: BigNumber; upperPrice: BigNumber }> {
    const pool = getUniswapV3Pool(poolAddr, this.provider);
    const token0 = getECR20(
      await pool.token0(),
      this._signer ? this._signer : this.provider
    );
    const token1 = getECR20(
      await pool.token1(),
      this._signer ? this._signer : this.provider
    );

    const tickSpacing: number = await pool.tickSpacing();

    const lower = tick - (tick % tickSpacing);
    const upper = lower + tickSpacing;

    const lowerPriceX96 = TickMath.getSqrtRatioAtTick(
      parseInt(lower.toString())
    );
    const upperPriceX96 = TickMath.getSqrtRatioAtTick(
      parseInt(upper.toString())
    );

    const lowerPrice = BigNumber.from(
      JSBI.divide(
        JSBI.multiply(
          JSBI.multiply(lowerPriceX96, lowerPriceX96),
          JSBI.divide(
            JSBI.multiply(
              JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(18)),
              JSBI.exponentiate(
                JSBI.BigInt(10),
                JSBI.BigInt(await token0.decimals())
              )
            ),
            JSBI.exponentiate(
              JSBI.BigInt(10),
              JSBI.BigInt(await token1.decimals())
            )
          )
        ),
        JSBI.exponentiate(JSBI.BigInt(2), JSBI.BigInt(192))
      ).toString()
    );

    const upperPrice = BigNumber.from(
      JSBI.divide(
        JSBI.multiply(
          JSBI.multiply(upperPriceX96, upperPriceX96),
          JSBI.divide(
            JSBI.multiply(
              JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(18)),
              JSBI.exponentiate(
                JSBI.BigInt(10),
                JSBI.BigInt(await token0.decimals())
              )
            ),
            JSBI.exponentiate(
              JSBI.BigInt(10),
              JSBI.BigInt(await token1.decimals())
            )
          )
        ),
        JSBI.exponentiate(JSBI.BigInt(2), JSBI.BigInt(192))
      ).toString()
    );

    return { lowerPrice, upperPrice };
  }
}
