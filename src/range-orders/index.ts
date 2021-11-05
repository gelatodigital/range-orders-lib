import {
  ChainId,
  RangeOrderData,
  RangeOrderPayload,
  RangeOrderStatus,
} from "../types";
import { Provider } from "@ethersproject/abstract-provider";
import { Signer } from "@ethersproject/abstract-signer";
import { RangeOrder } from "../contracts/types";
import {
  getRangeOrder,
  getUniswapV3Pool,
  //  getECR20
} from "../contracts";
import { SUBGRAPH_URL } from "../constants";
import {
  queryRangeOrder,
  queryOpenRangeOrderByUser,
  queryExecutedRangeOrderByUser,
  queryCancelledRangeOrderByUser,
} from "../utils/queries";
import { BigNumber, ContractTransaction, ethers } from "ethers";
// import { Price, Token } from "@uniswap/sdk-core";
import JSBI from "jsbi";
// import { tickToPrice } from "@uniswap/v3-sdk";

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
    return undefined;
  }

  public async cancelRangeOrder(
    tokenId: BigNumber,
    rangeOrderPayload: RangeOrderPayload
  ): Promise<ContractTransaction | undefined> {
    if (this._signer)
      return this._gelatoRangeOrders
        .connect(this._signer as Signer)
        .cancelRangeOrder(tokenId, rangeOrderPayload);
    return undefined;
  }

  public async getExchangeRate(pool: string): Promise<BigNumber> {
    const sqrtPriceX96: JSBI = JSBI.BigInt(
      (await getUniswapV3Pool(pool, this.provider).slot0()).sqrtPriceX96
    );

    return BigNumber.from(
      JSBI.bitwiseAnd(
        JSBI.multiply(sqrtPriceX96, sqrtPriceX96),
        JSBI.BigInt(ethers.constants.MaxUint256)
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

  //   public async getFeeAdjustedMinReturn(
  //     rangeOrderPayload: RangeOrderPayload
  //   ): Promise<BigNumber> {
  //     const pool = getUniswapV3Pool(rangeOrderPayload.pool, this.provider);
  //     const tickSpacing: number = await pool.tickSpacing();
  //     const token0 = getECR20(
  //       await pool.token0(),
  //       this._signer ? this._signer : this.provider
  //     );
  //     const token1 = getECR20(
  //       await pool.token1(),
  //       this._signer ? this._signer : this.provider
  //     );
  //     const erc20Token0: Token = new Token(
  //       this._chainId,
  //       token0.address,
  //       await token0.decimals()
  //     );
  //     const erc20Token1: Token = new Token(
  //       this._chainId,
  //       token1.address,
  //       await token1.decimals()
  //     );

  //     const lowerTickPrice: Price = tickToPrice(
  //       erc20Token0,
  //       erc20Token1,
  //       rangeOrderPayload.zeroForOne
  //         ? rangeOrderPayload.tickThreshold
  //         : rangeOrderPayload.tickThreshold - tickSpacing
  //     );
  //     const upperTickPrice = tickToPrice(
  //       erc20Token0,
  //       erc20Token1,
  //       rangeOrderPayload.zeroForOne
  //         ? rangeOrderPayload.tickThreshold + tickSpacing
  //         : rangeOrderPayload.tickThreshold
  //     );

  //     const meanPrice = BigNumber.from(
  //         JSBI.bitwiseAnd(
  //           JSBI.multiply(upperTickPrice., sqrtPriceX96),
  //           JSBI.BigInt(ethers.constants.MaxUint256)
  //         ).toString()
  //       );
  //   }
}
