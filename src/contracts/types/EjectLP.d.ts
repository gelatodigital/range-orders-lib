/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface EjectLPInterface extends ethers.utils.Interface {
  functions: {
    "owner()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
    "canEject(uint256,(int24,bool,bool,uint256,uint256,address,address,uint256,uint256),address)": FunctionFragment;
    "cancel(uint256,(int24,bool,bool,uint256,uint256,address,address,uint256,uint256))": FunctionFragment;
    "duration()": FunctionFragment;
    "eject(uint256,(int24,bool,bool,uint256,uint256,address,address,uint256,uint256))": FunctionFragment;
    "hashById(uint256)": FunctionFragment;
    "initialize()": FunctionFragment;
    "minimumFee()": FunctionFragment;
    "mulipleRetrieveDust(address[],address)": FunctionFragment;
    "nftPositions()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "pokeMe()": FunctionFragment;
    "retrieveDust(address,address)": FunctionFragment;
    "schedule((uint256,int24,bool,bool,uint256,uint256,address,address,address,uint256))": FunctionFragment;
    "setDuration(uint256)": FunctionFragment;
    "setMinimumFee(uint256)": FunctionFragment;
    "taskById(uint256)": FunctionFragment;
    "unpause()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "canEject",
    values: [
      BigNumberish,
      {
        tickThreshold: BigNumberish;
        ejectAbove: boolean;
        ejectDust: boolean;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        receiver: string;
        owner: string;
        maxFeeAmount: BigNumberish;
        startTime: BigNumberish;
      },
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "cancel",
    values: [
      BigNumberish,
      {
        tickThreshold: BigNumberish;
        ejectAbove: boolean;
        ejectDust: boolean;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        receiver: string;
        owner: string;
        maxFeeAmount: BigNumberish;
        startTime: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(functionFragment: "duration", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "eject",
    values: [
      BigNumberish,
      {
        tickThreshold: BigNumberish;
        ejectAbove: boolean;
        ejectDust: boolean;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        receiver: string;
        owner: string;
        maxFeeAmount: BigNumberish;
        startTime: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "hashById",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minimumFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mulipleRetrieveDust",
    values: [string[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "nftPositions",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(functionFragment: "pokeMe", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "retrieveDust",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "schedule",
    values: [
      {
        tokenId: BigNumberish;
        tickThreshold: BigNumberish;
        ejectAbove: boolean;
        ejectDust: boolean;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        receiver: string;
        feeToken: string;
        resolver: string;
        maxFeeAmount: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setDuration",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinimumFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "taskById",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;

  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "canEject", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "duration", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "eject", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hashById", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "minimumFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mulipleRetrieveDust",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nftPositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pokeMe", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "retrieveDust",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "schedule", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinimumFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "taskById", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "ProxyImplementationUpdated(address,address)": EventFragment;
    "LogCancelEject(uint256)": EventFragment;
    "LogEject(uint256,uint256,uint256,uint256)": EventFragment;
    "LogSetEject(uint256,tuple,uint256,address)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProxyImplementationUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogCancelEject"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogEject"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogSetEject"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type ProxyImplementationUpdatedEvent = TypedEvent<
  [string, string] & {
    previousImplementation: string;
    newImplementation: string;
  }
>;

export type LogCancelEjectEvent = TypedEvent<
  [BigNumber] & { tokenId: BigNumber }
>;

export type LogEjectEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber] & {
    tokenId: BigNumber;
    amount0Out: BigNumber;
    amount1Out: BigNumber;
    feeAmount: BigNumber;
  }
>;

export type LogSetEjectEvent = TypedEvent<
  [
    BigNumber,
    [
      BigNumber,
      number,
      boolean,
      boolean,
      BigNumber,
      BigNumber,
      string,
      string,
      string,
      BigNumber
    ] & {
      tokenId: BigNumber;
      tickThreshold: number;
      ejectAbove: boolean;
      ejectDust: boolean;
      amount0Min: BigNumber;
      amount1Min: BigNumber;
      receiver: string;
      feeToken: string;
      resolver: string;
      maxFeeAmount: BigNumber;
    },
    BigNumber,
    string
  ] & {
    tokenId: BigNumber;
    orderParams: [
      BigNumber,
      number,
      boolean,
      boolean,
      BigNumber,
      BigNumber,
      string,
      string,
      string,
      BigNumber
    ] & {
      tokenId: BigNumber;
      tickThreshold: number;
      ejectAbove: boolean;
      ejectDust: boolean;
      amount0Min: BigNumber;
      amount1Min: BigNumber;
      receiver: string;
      feeToken: string;
      resolver: string;
      maxFeeAmount: BigNumber;
    };
    startTime: BigNumber;
    sender: string;
  }
>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export class EjectLP extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: EjectLPInterface;

  functions: {
    owner(overrides?: CallOverrides): Promise<[string]>;

    supportsInterface(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    canEject(
      tokenId_: BigNumberish,
      order_: {
        tickThreshold: BigNumberish;
        ejectAbove: boolean;
        ejectDust: boolean;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        receiver: string;
        owner: string;
        maxFeeAmount: BigNumberish;
        startTime: BigNumberish;
      },
      feeToken_: string,
      overrides?: CallOverrides
    ): Promise<[string, string, BigNumber]>;

    cancel(
      tokenId_: BigNumberish,
      order_: {
        tickThreshold: BigNumberish;
        ejectAbove: boolean;
        ejectDust: boolean;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        receiver: string;
        owner: string;
        maxFeeAmount: BigNumberish;
        startTime: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    duration(overrides?: CallOverrides): Promise<[BigNumber]>;

    eject(
      tokenId_: BigNumberish,
      order_: {
        tickThreshold: BigNumberish;
        ejectAbove: boolean;
        ejectDust: boolean;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        receiver: string;
        owner: string;
        maxFeeAmount: BigNumberish;
        startTime: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hashById(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    minimumFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    mulipleRetrieveDust(
      tokens_: string[],
      recipient_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    nftPositions(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    pokeMe(overrides?: CallOverrides): Promise<[string]>;

    retrieveDust(
      token_: string,
      recipient_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    schedule(
      orderParams_: {
        tokenId: BigNumberish;
        tickThreshold: BigNumberish;
        ejectAbove: boolean;
        ejectDust: boolean;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        receiver: string;
        feeToken: string;
        resolver: string;
        maxFeeAmount: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDuration(
      duration_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMinimumFee(
      minimumFee_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    taskById(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  owner(overrides?: CallOverrides): Promise<string>;

  supportsInterface(id: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgradeTo(
    newImplementation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImplementation: string,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  canEject(
    tokenId_: BigNumberish,
    order_: {
      tickThreshold: BigNumberish;
      ejectAbove: boolean;
      ejectDust: boolean;
      amount0Min: BigNumberish;
      amount1Min: BigNumberish;
      receiver: string;
      owner: string;
      maxFeeAmount: BigNumberish;
      startTime: BigNumberish;
    },
    feeToken_: string,
    overrides?: CallOverrides
  ): Promise<[string, string, BigNumber]>;

  cancel(
    tokenId_: BigNumberish,
    order_: {
      tickThreshold: BigNumberish;
      ejectAbove: boolean;
      ejectDust: boolean;
      amount0Min: BigNumberish;
      amount1Min: BigNumberish;
      receiver: string;
      owner: string;
      maxFeeAmount: BigNumberish;
      startTime: BigNumberish;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  duration(overrides?: CallOverrides): Promise<BigNumber>;

  eject(
    tokenId_: BigNumberish,
    order_: {
      tickThreshold: BigNumberish;
      ejectAbove: boolean;
      ejectDust: boolean;
      amount0Min: BigNumberish;
      amount1Min: BigNumberish;
      receiver: string;
      owner: string;
      maxFeeAmount: BigNumberish;
      startTime: BigNumberish;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hashById(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  initialize(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  minimumFee(overrides?: CallOverrides): Promise<BigNumber>;

  mulipleRetrieveDust(
    tokens_: string[],
    recipient_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  nftPositions(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  pokeMe(overrides?: CallOverrides): Promise<string>;

  retrieveDust(
    token_: string,
    recipient_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  schedule(
    orderParams_: {
      tokenId: BigNumberish;
      tickThreshold: BigNumberish;
      ejectAbove: boolean;
      ejectDust: boolean;
      amount0Min: BigNumberish;
      amount1Min: BigNumberish;
      receiver: string;
      feeToken: string;
      resolver: string;
      maxFeeAmount: BigNumberish;
    },
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDuration(
    duration_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMinimumFee(
    minimumFee_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  taskById(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    owner(overrides?: CallOverrides): Promise<string>;

    supportsInterface(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeTo(
      newImplementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    canEject(
      tokenId_: BigNumberish,
      order_: {
        tickThreshold: BigNumberish;
        ejectAbove: boolean;
        ejectDust: boolean;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        receiver: string;
        owner: string;
        maxFeeAmount: BigNumberish;
        startTime: BigNumberish;
      },
      feeToken_: string,
      overrides?: CallOverrides
    ): Promise<[string, string, BigNumber]>;

    cancel(
      tokenId_: BigNumberish,
      order_: {
        tickThreshold: BigNumberish;
        ejectAbove: boolean;
        ejectDust: boolean;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        receiver: string;
        owner: string;
        maxFeeAmount: BigNumberish;
        startTime: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    duration(overrides?: CallOverrides): Promise<BigNumber>;

    eject(
      tokenId_: BigNumberish,
      order_: {
        tickThreshold: BigNumberish;
        ejectAbove: boolean;
        ejectDust: boolean;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        receiver: string;
        owner: string;
        maxFeeAmount: BigNumberish;
        startTime: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    hashById(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    initialize(overrides?: CallOverrides): Promise<void>;

    minimumFee(overrides?: CallOverrides): Promise<BigNumber>;

    mulipleRetrieveDust(
      tokens_: string[],
      recipient_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    nftPositions(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    pokeMe(overrides?: CallOverrides): Promise<string>;

    retrieveDust(
      token_: string,
      recipient_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    schedule(
      orderParams_: {
        tokenId: BigNumberish;
        tickThreshold: BigNumberish;
        ejectAbove: boolean;
        ejectDust: boolean;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        receiver: string;
        feeToken: string;
        resolver: string;
        maxFeeAmount: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    setDuration(
      duration_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinimumFee(
      minimumFee_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    taskById(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    unpause(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "ProxyImplementationUpdated(address,address)"(
      previousImplementation?: string | null,
      newImplementation?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousImplementation: string; newImplementation: string }
    >;

    ProxyImplementationUpdated(
      previousImplementation?: string | null,
      newImplementation?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousImplementation: string; newImplementation: string }
    >;

    "LogCancelEject(uint256)"(
      tokenId?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { tokenId: BigNumber }>;

    LogCancelEject(
      tokenId?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { tokenId: BigNumber }>;

    "LogEject(uint256,uint256,uint256,uint256)"(
      tokenId?: BigNumberish | null,
      amount0Out?: null,
      amount1Out?: null,
      feeAmount?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber, BigNumber],
      {
        tokenId: BigNumber;
        amount0Out: BigNumber;
        amount1Out: BigNumber;
        feeAmount: BigNumber;
      }
    >;

    LogEject(
      tokenId?: BigNumberish | null,
      amount0Out?: null,
      amount1Out?: null,
      feeAmount?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber, BigNumber],
      {
        tokenId: BigNumber;
        amount0Out: BigNumber;
        amount1Out: BigNumber;
        feeAmount: BigNumber;
      }
    >;

    "LogSetEject(uint256,tuple,uint256,address)"(
      tokenId?: BigNumberish | null,
      orderParams?: null,
      startTime?: null,
      sender?: null
    ): TypedEventFilter<
      [
        BigNumber,
        [
          BigNumber,
          number,
          boolean,
          boolean,
          BigNumber,
          BigNumber,
          string,
          string,
          string,
          BigNumber
        ] & {
          tokenId: BigNumber;
          tickThreshold: number;
          ejectAbove: boolean;
          ejectDust: boolean;
          amount0Min: BigNumber;
          amount1Min: BigNumber;
          receiver: string;
          feeToken: string;
          resolver: string;
          maxFeeAmount: BigNumber;
        },
        BigNumber,
        string
      ],
      {
        tokenId: BigNumber;
        orderParams: [
          BigNumber,
          number,
          boolean,
          boolean,
          BigNumber,
          BigNumber,
          string,
          string,
          string,
          BigNumber
        ] & {
          tokenId: BigNumber;
          tickThreshold: number;
          ejectAbove: boolean;
          ejectDust: boolean;
          amount0Min: BigNumber;
          amount1Min: BigNumber;
          receiver: string;
          feeToken: string;
          resolver: string;
          maxFeeAmount: BigNumber;
        };
        startTime: BigNumber;
        sender: string;
      }
    >;

    LogSetEject(
      tokenId?: BigNumberish | null,
      orderParams?: null,
      startTime?: null,
      sender?: null
    ): TypedEventFilter<
      [
        BigNumber,
        [
          BigNumber,
          number,
          boolean,
          boolean,
          BigNumber,
          BigNumber,
          string,
          string,
          string,
          BigNumber
        ] & {
          tokenId: BigNumber;
          tickThreshold: number;
          ejectAbove: boolean;
          ejectDust: boolean;
          amount0Min: BigNumber;
          amount1Min: BigNumber;
          receiver: string;
          feeToken: string;
          resolver: string;
          maxFeeAmount: BigNumber;
        },
        BigNumber,
        string
      ],
      {
        tokenId: BigNumber;
        orderParams: [
          BigNumber,
          number,
          boolean,
          boolean,
          BigNumber,
          BigNumber,
          string,
          string,
          string,
          BigNumber
        ] & {
          tokenId: BigNumber;
          tickThreshold: number;
          ejectAbove: boolean;
          ejectDust: boolean;
          amount0Min: BigNumber;
          amount1Min: BigNumber;
          receiver: string;
          feeToken: string;
          resolver: string;
          maxFeeAmount: BigNumber;
        };
        startTime: BigNumber;
        sender: string;
      }
    >;

    "Paused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Paused(account?: null): TypedEventFilter<[string], { account: string }>;

    "Unpaused(address)"(
      account?: null
    ): TypedEventFilter<[string], { account: string }>;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;
  };

  estimateGas: {
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    canEject(
      tokenId_: BigNumberish,
      order_: {
        tickThreshold: BigNumberish;
        ejectAbove: boolean;
        ejectDust: boolean;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        receiver: string;
        owner: string;
        maxFeeAmount: BigNumberish;
        startTime: BigNumberish;
      },
      feeToken_: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cancel(
      tokenId_: BigNumberish,
      order_: {
        tickThreshold: BigNumberish;
        ejectAbove: boolean;
        ejectDust: boolean;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        receiver: string;
        owner: string;
        maxFeeAmount: BigNumberish;
        startTime: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    duration(overrides?: CallOverrides): Promise<BigNumber>;

    eject(
      tokenId_: BigNumberish,
      order_: {
        tickThreshold: BigNumberish;
        ejectAbove: boolean;
        ejectDust: boolean;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        receiver: string;
        owner: string;
        maxFeeAmount: BigNumberish;
        startTime: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hashById(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    minimumFee(overrides?: CallOverrides): Promise<BigNumber>;

    mulipleRetrieveDust(
      tokens_: string[],
      recipient_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    nftPositions(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    pokeMe(overrides?: CallOverrides): Promise<BigNumber>;

    retrieveDust(
      token_: string,
      recipient_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    schedule(
      orderParams_: {
        tokenId: BigNumberish;
        tickThreshold: BigNumberish;
        ejectAbove: boolean;
        ejectDust: boolean;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        receiver: string;
        feeToken: string;
        resolver: string;
        maxFeeAmount: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDuration(
      duration_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMinimumFee(
      minimumFee_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    taskById(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsInterface(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    canEject(
      tokenId_: BigNumberish,
      order_: {
        tickThreshold: BigNumberish;
        ejectAbove: boolean;
        ejectDust: boolean;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        receiver: string;
        owner: string;
        maxFeeAmount: BigNumberish;
        startTime: BigNumberish;
      },
      feeToken_: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cancel(
      tokenId_: BigNumberish,
      order_: {
        tickThreshold: BigNumberish;
        ejectAbove: boolean;
        ejectDust: boolean;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        receiver: string;
        owner: string;
        maxFeeAmount: BigNumberish;
        startTime: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    duration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    eject(
      tokenId_: BigNumberish,
      order_: {
        tickThreshold: BigNumberish;
        ejectAbove: boolean;
        ejectDust: boolean;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        receiver: string;
        owner: string;
        maxFeeAmount: BigNumberish;
        startTime: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hashById(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    minimumFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mulipleRetrieveDust(
      tokens_: string[],
      recipient_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    nftPositions(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pokeMe(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    retrieveDust(
      token_: string,
      recipient_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    schedule(
      orderParams_: {
        tokenId: BigNumberish;
        tickThreshold: BigNumberish;
        ejectAbove: boolean;
        ejectDust: boolean;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        receiver: string;
        feeToken: string;
        resolver: string;
        maxFeeAmount: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDuration(
      duration_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMinimumFee(
      minimumFee_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    taskById(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
