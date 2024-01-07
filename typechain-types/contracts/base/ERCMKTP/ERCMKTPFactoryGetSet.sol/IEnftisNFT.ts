/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../../common";

export declare namespace Structs {
  export type NFTMarketItemStruct = {
    tokenId: BigNumberish;
    tokenIndexedID: BigNumberish;
    tokenContractAddress: AddressLike;
    creator: AddressLike;
    seller: AddressLike;
    owner: AddressLike;
    supportsRoyalties: boolean;
    royaltyAmount: BigNumberish;
    price: BigNumberish;
    sold: boolean;
    isListed: boolean;
    isAuction: boolean;
    createdAt: BigNumberish;
    updatedAt: BigNumberish;
  };

  export type NFTMarketItemStructOutput = [
    tokenId: bigint,
    tokenIndexedID: bigint,
    tokenContractAddress: string,
    creator: string,
    seller: string,
    owner: string,
    supportsRoyalties: boolean,
    royaltyAmount: bigint,
    price: bigint,
    sold: boolean,
    isListed: boolean,
    isAuction: boolean,
    createdAt: bigint,
    updatedAt: bigint
  ] & {
    tokenId: bigint;
    tokenIndexedID: bigint;
    tokenContractAddress: string;
    creator: string;
    seller: string;
    owner: string;
    supportsRoyalties: boolean;
    royaltyAmount: bigint;
    price: bigint;
    sold: boolean;
    isListed: boolean;
    isAuction: boolean;
    createdAt: bigint;
    updatedAt: bigint;
  };
}

export interface IEnftisNFTInterface extends Interface {
  getFunction(nameOrSignature: "searchTokenId"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "searchTokenId",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "searchTokenId",
    data: BytesLike
  ): Result;
}

export interface IEnftisNFT extends BaseContract {
  connect(runner?: ContractRunner | null): IEnftisNFT;
  waitForDeployment(): Promise<this>;

  interface: IEnftisNFTInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  searchTokenId: TypedContractMethod<
    [_uint256: BigNumberish],
    [Structs.NFTMarketItemStructOutput[]],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "searchTokenId"
  ): TypedContractMethod<
    [_uint256: BigNumberish],
    [Structs.NFTMarketItemStructOutput[]],
    "nonpayable"
  >;

  filters: {};
}