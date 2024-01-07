/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  Signer,
  utils,
} from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export interface ERCEventsInterface extends utils.Interface {
  functions: {};

  events: {
    "BaseURIChanged(string)": EventFragment;
    "CollectionDescriptionChanged(string)": EventFragment;
    "CollectionDisplayPictureChanged(string)": EventFragment;
    "ContractURIChanged(string)": EventFragment;
    "Log(string,uint256)": EventFragment;
    "MarketplaceAddressChanged(address)": EventFragment;
    "MarketplaceAddressForTokenChanged(address,uint256)": EventFragment;
    "MintingFeeChanged(uint256)": EventFragment;
    "OwnerChanged(address)": EventFragment;
    "Received(address,uint256)": EventFragment;
    "TokenBurned(address,address,uint256,uint256)": EventFragment;
    "TokenCategoryChanged(uint8)": EventFragment;
    "TokenMinted(address,address,uint256,uint256)": EventFragment;
    "TokenTransfered(address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BaseURIChanged"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "CollectionDescriptionChanged"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "CollectionDisplayPictureChanged"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ContractURIChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Log"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MarketplaceAddressChanged"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "MarketplaceAddressForTokenChanged"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MintingFeeChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Received"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenBurned"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenCategoryChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenMinted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenTransfered"): EventFragment;
}

export interface BaseURIChangedEventObject {
  newURI: string;
}
export type BaseURIChangedEvent = TypedEvent<
  [string],
  BaseURIChangedEventObject
>;

export type BaseURIChangedEventFilter = TypedEventFilter<BaseURIChangedEvent>;

export interface CollectionDescriptionChangedEventObject {
  description: string;
}
export type CollectionDescriptionChangedEvent = TypedEvent<
  [string],
  CollectionDescriptionChangedEventObject
>;

export type CollectionDescriptionChangedEventFilter =
  TypedEventFilter<CollectionDescriptionChangedEvent>;

export interface CollectionDisplayPictureChangedEventObject {
  photoURL: string;
}
export type CollectionDisplayPictureChangedEvent = TypedEvent<
  [string],
  CollectionDisplayPictureChangedEventObject
>;

export type CollectionDisplayPictureChangedEventFilter =
  TypedEventFilter<CollectionDisplayPictureChangedEvent>;

export interface ContractURIChangedEventObject {
  newURI: string;
}
export type ContractURIChangedEvent = TypedEvent<
  [string],
  ContractURIChangedEventObject
>;

export type ContractURIChangedEventFilter =
  TypedEventFilter<ContractURIChangedEvent>;

export interface LogEventObject {
  func: string;
  gas: BigNumber;
}
export type LogEvent = TypedEvent<[string, BigNumber], LogEventObject>;

export type LogEventFilter = TypedEventFilter<LogEvent>;

export interface MarketplaceAddressChangedEventObject {
  newMarketplaceAddress: string;
}
export type MarketplaceAddressChangedEvent = TypedEvent<
  [string],
  MarketplaceAddressChangedEventObject
>;

export type MarketplaceAddressChangedEventFilter =
  TypedEventFilter<MarketplaceAddressChangedEvent>;

export interface MarketplaceAddressForTokenChangedEventObject {
  newMarketplaceAddress: string;
  tokenId: BigNumber;
}
export type MarketplaceAddressForTokenChangedEvent = TypedEvent<
  [string, BigNumber],
  MarketplaceAddressForTokenChangedEventObject
>;

export type MarketplaceAddressForTokenChangedEventFilter =
  TypedEventFilter<MarketplaceAddressForTokenChangedEvent>;

export interface MintingFeeChangedEventObject {
  newMintingFee: BigNumber;
}
export type MintingFeeChangedEvent = TypedEvent<
  [BigNumber],
  MintingFeeChangedEventObject
>;

export type MintingFeeChangedEventFilter =
  TypedEventFilter<MintingFeeChangedEvent>;

export interface OwnerChangedEventObject {
  newOwner: string;
}
export type OwnerChangedEvent = TypedEvent<[string], OwnerChangedEventObject>;

export type OwnerChangedEventFilter = TypedEventFilter<OwnerChangedEvent>;

export interface ReceivedEventObject {
  arg0: string;
  arg1: BigNumber;
}
export type ReceivedEvent = TypedEvent<
  [string, BigNumber],
  ReceivedEventObject
>;

export type ReceivedEventFilter = TypedEventFilter<ReceivedEvent>;

export interface TokenBurnedEventObject {
  creator: string;
  burner: string;
  burnedTokenId: BigNumber;
  batchSize: BigNumber;
}
export type TokenBurnedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  TokenBurnedEventObject
>;

export type TokenBurnedEventFilter = TypedEventFilter<TokenBurnedEvent>;

export interface TokenCategoryChangedEventObject {
  newTokenCategotyIndex: number;
}
export type TokenCategoryChangedEvent = TypedEvent<
  [number],
  TokenCategoryChangedEventObject
>;

export type TokenCategoryChangedEventFilter =
  TypedEventFilter<TokenCategoryChangedEvent>;

export interface TokenMintedEventObject {
  creator: string;
  minter: string;
  newTokenId: BigNumber;
  batchSize: BigNumber;
}
export type TokenMintedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  TokenMintedEventObject
>;

export type TokenMintedEventFilter = TypedEventFilter<TokenMintedEvent>;

export interface TokenTransferedEventObject {
  creator: string;
  burner: string;
  transferedTokenId: BigNumber;
  batchSize: BigNumber;
}
export type TokenTransferedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  TokenTransferedEventObject
>;

export type TokenTransferedEventFilter = TypedEventFilter<TokenTransferedEvent>;

export interface ERCEvents extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERCEventsInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {};

  callStatic: {};

  filters: {
    "BaseURIChanged(string)"(newURI?: null): BaseURIChangedEventFilter;
    BaseURIChanged(newURI?: null): BaseURIChangedEventFilter;

    "CollectionDescriptionChanged(string)"(
      description?: null
    ): CollectionDescriptionChangedEventFilter;
    CollectionDescriptionChanged(
      description?: null
    ): CollectionDescriptionChangedEventFilter;

    "CollectionDisplayPictureChanged(string)"(
      photoURL?: null
    ): CollectionDisplayPictureChangedEventFilter;
    CollectionDisplayPictureChanged(
      photoURL?: null
    ): CollectionDisplayPictureChangedEventFilter;

    "ContractURIChanged(string)"(newURI?: null): ContractURIChangedEventFilter;
    ContractURIChanged(newURI?: null): ContractURIChangedEventFilter;

    "Log(string,uint256)"(func?: null, gas?: null): LogEventFilter;
    Log(func?: null, gas?: null): LogEventFilter;

    "MarketplaceAddressChanged(address)"(
      newMarketplaceAddress?: null
    ): MarketplaceAddressChangedEventFilter;
    MarketplaceAddressChanged(
      newMarketplaceAddress?: null
    ): MarketplaceAddressChangedEventFilter;

    "MarketplaceAddressForTokenChanged(address,uint256)"(
      newMarketplaceAddress?: null,
      tokenId?: null
    ): MarketplaceAddressForTokenChangedEventFilter;
    MarketplaceAddressForTokenChanged(
      newMarketplaceAddress?: null,
      tokenId?: null
    ): MarketplaceAddressForTokenChangedEventFilter;

    "MintingFeeChanged(uint256)"(
      newMintingFee?: null
    ): MintingFeeChangedEventFilter;
    MintingFeeChanged(newMintingFee?: null): MintingFeeChangedEventFilter;

    "OwnerChanged(address)"(newOwner?: null): OwnerChangedEventFilter;
    OwnerChanged(newOwner?: null): OwnerChangedEventFilter;

    "Received(address,uint256)"(arg0?: null, arg1?: null): ReceivedEventFilter;
    Received(arg0?: null, arg1?: null): ReceivedEventFilter;

    "TokenBurned(address,address,uint256,uint256)"(
      creator?: null,
      burner?: null,
      burnedTokenId?: PromiseOrValue<BigNumberish> | null,
      batchSize?: null
    ): TokenBurnedEventFilter;
    TokenBurned(
      creator?: null,
      burner?: null,
      burnedTokenId?: PromiseOrValue<BigNumberish> | null,
      batchSize?: null
    ): TokenBurnedEventFilter;

    "TokenCategoryChanged(uint8)"(
      newTokenCategotyIndex?: null
    ): TokenCategoryChangedEventFilter;
    TokenCategoryChanged(
      newTokenCategotyIndex?: null
    ): TokenCategoryChangedEventFilter;

    "TokenMinted(address,address,uint256,uint256)"(
      creator?: null,
      minter?: null,
      newTokenId?: PromiseOrValue<BigNumberish> | null,
      batchSize?: null
    ): TokenMintedEventFilter;
    TokenMinted(
      creator?: null,
      minter?: null,
      newTokenId?: PromiseOrValue<BigNumberish> | null,
      batchSize?: null
    ): TokenMintedEventFilter;

    "TokenTransfered(address,address,uint256,uint256)"(
      creator?: null,
      burner?: null,
      transferedTokenId?: PromiseOrValue<BigNumberish> | null,
      batchSize?: null
    ): TokenTransferedEventFilter;
    TokenTransfered(
      creator?: null,
      burner?: null,
      transferedTokenId?: PromiseOrValue<BigNumberish> | null,
      batchSize?: null
    ): TokenTransferedEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
