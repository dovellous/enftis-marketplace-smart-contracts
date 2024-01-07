/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  ERC721FactoryErrors,
  ERC721FactoryErrorsInterface,
} from "../../../../contracts/base/ERC721/ERC721FactoryErrors";

const _abi = [
  {
    inputs: [
      {
        internalType: "bool",
        name: "active",
        type: "bool",
      },
    ],
    name: "DisabledOption",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "message",
        type: "bytes32",
      },
    ],
    name: "ExceededMaxValue",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "requiredRole",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "message",
        type: "bytes32",
      },
    ],
    name: "InsufficientPermissions",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidAmount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "message",
        type: "bytes32",
      },
    ],
    name: "NoAdmins",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "message",
        type: "bytes32",
      },
    ],
    name: "NoMinters",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "message",
        type: "bytes32",
      },
    ],
    name: "NotApprovedOrOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "mintingFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "message",
        type: "bytes32",
      },
    ],
    name: "PriceBelowMintingFee",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "message",
        type: "bytes32",
      },
    ],
    name: "TokenDoesNotExists",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "message",
        type: "bytes32",
      },
    ],
    name: "TokenURIAlreadyExists",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "message",
        type: "bytes32",
      },
    ],
    name: "ZeroAddress",
    type: "error",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea26469706673582212209d94dc4f412267507fe11f0f01a124bafd3af4cd4f0a7c883e0035a3efb6a9e664736f6c63430008120033";

type ERC721FactoryErrorsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721FactoryErrorsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721FactoryErrors__factory extends ContractFactory {
  constructor(...args: ERC721FactoryErrorsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721FactoryErrors> {
    return super.deploy(overrides || {}) as Promise<ERC721FactoryErrors>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC721FactoryErrors {
    return super.attach(address) as ERC721FactoryErrors;
  }
  override connect(signer: Signer): ERC721FactoryErrors__factory {
    return super.connect(signer) as ERC721FactoryErrors__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721FactoryErrorsInterface {
    return new utils.Interface(_abi) as ERC721FactoryErrorsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721FactoryErrors {
    return new Contract(address, _abi, signerOrProvider) as ERC721FactoryErrors;
  }
}
