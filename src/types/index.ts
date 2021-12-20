import { BigNumber } from "@ethersproject/bignumber";
import { BytesLike } from "@ethersproject/bytes";

// mainnet | goerli | optimism | matic | arbitrum
export type ChainId = 1 | 5 | 10 | 137 | 42161;

export type RangeOrderPayload = {
  pool: string;
  zeroForOne: boolean;
  tickThreshold: number;
  amountIn: BigNumber;
  receiver: string;
  maxFeeAmount: BigNumber;
};

export enum RangeOrderStatus {
  Submitted = "submitted",
  Executed = "executed",
  Cancelled = "cancelled",
}

export type RangeOrderData = {
  id: BigNumber;
  status: RangeOrderStatus;
  creator: string;
  tickThreshold: BigNumber;
  zeroForOne: boolean;
  startTime: BigNumber;
  expiryTime: BigNumber;
  amountIn: BigNumber;
  receiver: string;
  feeToken: string;
  resolver: string;
  maxFeeAmount: BigNumber;
  feeAmount: BigNumber | undefined;
  amount0: BigNumber | undefined;
  amount1: BigNumber | undefined;
  pool: string | undefined;
  submittedTxHash: BytesLike;
  executedTxHash: BytesLike | undefined;
  cancelledTxHash: BytesLike | undefined;
  createdAt: BigNumber;
  updatedAt: BigNumber;
  createdAtBlock: BigNumber;
  updatedAtBlock: BigNumber;
  updatedAtBlockHash: BytesLike | undefined;
};
