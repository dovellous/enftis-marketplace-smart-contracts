/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERCConstants,
  ERCConstantsInterface,
} from "../../../../../contracts/base/NFT/common/ERCConstants";

const _abi = [
  {
    inputs: [],
    name: "ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "AMOUNT_BELOW_MINTING_FEE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INDEX_OUT_OF_BOUNDS",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INSUFFICIENT_PERMISSIONS",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INVALID_CALLER",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_SUPPLY_REACHED",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NOT_APPROVED_OWNER",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NO_ADMINS_SPECIFIED",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NO_MINTERS_SPECIFIED",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TOKEN_DOES_NOT_EXISTS",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TOKEN_URI_EXISTS",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ZERO_ADDRESS",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506102f7806100206000396000f3fe608060405234801561001057600080fd5b50600436106100af5760003560e01c8063023bdf01146100b45780630d50c222146100ed57806311b60e7b146101145780631e7341c91461013b57806320f9f02b146101625780634334484914610189578063538ba4f9146101b0578063589e9c82146101d75780635f1c4c0e146101fe57806375b238fc14610225578063d3dc12721461024c578063d539139314610273578063fb67a12d1461029a575b600080fd5b6100db7ffa21d81135d602cbdd6d6eba32f113725ff3cf3482deca5b7e42e431627ab4bc81565b60405190815260200160405180910390f35b6100db7f4f1f4510b69fad6299ff39d382e74059b0940bed8ddd501bdf0a8ef73b144adc81565b6100db7fdb8ecf91f7fb45f19c7705fc675a1a92284efc9e6304c32b842093cc66a9dc0981565b6100db7f7aea2a5a54ade2c7d5177326e7a3070116c6f0c0e0e2c8e4979c1a8643ecb26c81565b6100db7fbf8cb79a39bb793e84d2e97ae1406af328da3f623c7688fc6a7ab735c1b165de81565b6100db7f94a878f488b402745116100074a492c72c3221a277262ef976a0007ead25098181565b6100db7f71869b3729b99fadce3ee30cb1aa2a0d639e6a2d24158c1ae1ae0059e81b72af81565b6100db7fc4cb8fb7b1a67482de901cc9aac777eef40e2b59fe11c7aa102d3bf285ff434081565b6100db7f7ba4dc8f715496ea115fdbd0a2da65e0665096c909392fefbfb708035bd6291581565b6100db7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177581565b6100db7f7224d0b24cbe51460a003681be787a3532eb2369489536477f0d269f69978a9481565b6100db7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b6100db7ff7cdaa469931e3108134377723e8da207dac8d0bb6a5e4bf593d544bbef723a28156fea2646970667358221220cb390019f83da9af7d62d83c53bf888b5c44c1a79f916b66bd6550a208f541f364736f6c63430008130033";

type ERCConstantsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERCConstantsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERCConstants__factory extends ContractFactory {
  constructor(...args: ERCConstantsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERCConstants> {
    return super.deploy(overrides || {}) as Promise<ERCConstants>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERCConstants {
    return super.attach(address) as ERCConstants;
  }
  override connect(signer: Signer): ERCConstants__factory {
    return super.connect(signer) as ERCConstants__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERCConstantsInterface {
    return new utils.Interface(_abi) as ERCConstantsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERCConstants {
    return new Contract(address, _abi, signerOrProvider) as ERCConstants;
  }
}