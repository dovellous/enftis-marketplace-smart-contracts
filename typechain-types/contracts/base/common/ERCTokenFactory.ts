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
} from "../../../common";

export interface ERCTokenFactoryInterface extends Interface {
  getFunction(
    nameOrSignature: "_token721Counter" | "create721Token" | "erc721Tokens"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_token721Counter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "create721Token",
    values: [
      AddressLike,
      AddressLike,
      AddressLike,
      BytesLike,
      string,
      string,
      string,
      string,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "erc721Tokens",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "_token721Counter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "create721Token",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "erc721Tokens",
    data: BytesLike
  ): Result;
}

export interface ERCTokenFactory extends BaseContract {
  connect(runner?: ContractRunner | null): ERCTokenFactory;
  waitForDeployment(): Promise<this>;

  interface: ERCTokenFactoryInterface;

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

  _token721Counter: TypedContractMethod<[], [bigint], "view">;

  create721Token: TypedContractMethod<
    [
      _owner: AddressLike,
      _loggerAddress: AddressLike,
      _marketplaceAddress: AddressLike,
      _data: BytesLike,
      _name: string,
      _symbol: string,
      _description: string,
      _bannerMedia: string,
      _displayPicture: string
    ],
    [string],
    "nonpayable"
  >;

  erc721Tokens: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, string, bigint, bigint, bigint] & {
        tokenCreator: string;
        tokenAddress: string;
        tokenIndex: bigint;
        tokenMaxTotalSupply: bigint;
        tokenDateCreated: bigint;
      }
    ],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "_token721Counter"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "create721Token"
  ): TypedContractMethod<
    [
      _owner: AddressLike,
      _loggerAddress: AddressLike,
      _marketplaceAddress: AddressLike,
      _data: BytesLike,
      _name: string,
      _symbol: string,
      _description: string,
      _bannerMedia: string,
      _displayPicture: string
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "erc721Tokens"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, string, bigint, bigint, bigint] & {
        tokenCreator: string;
        tokenAddress: string;
        tokenIndex: bigint;
        tokenMaxTotalSupply: bigint;
        tokenDateCreated: bigint;
      }
    ],
    "view"
  >;

  filters: {};
}
