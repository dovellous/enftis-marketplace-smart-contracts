/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ERCLogging,
  ERCLoggingInterface,
} from "../../../../contracts-v5/base/common/ERCLogging";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "getERCMarketplaceLogging",
    outputs: [
      {
        components: [
          {
            internalType: "enum Enums.NFTMarketItemActivityType",
            name: "activityType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "fromAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "toAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
        ],
        internalType: "struct Structs.NFTMarketItemActivity[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "getERCTokenLogging",
    outputs: [
      {
        components: [
          {
            internalType: "enum Enums.TokenActivityType",
            name: "activityType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "fromAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "toAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
        ],
        internalType: "struct Structs.TokenActivityItem[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "enum Enums.NFTMarketItemActivityType",
        name: "_type",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "logMarketplaceActivity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "enum Enums.TokenActivityType",
        name: "_type",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "logTokenActivity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "enum Enums.NFTMarketItemActivityType",
            name: "activityType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "fromAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "toAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
        ],
        internalType: "struct Structs.NFTMarketItemActivity",
        name: "_activity",
        type: "tuple",
      },
    ],
    name: "setERCMarketplaceLogging",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "enum Enums.TokenActivityType",
            name: "activityType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "fromAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "toAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
        ],
        internalType: "struct Structs.TokenActivityItem",
        name: "_activity",
        type: "tuple",
      },
    ],
    name: "setERCTokenLogging",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenIdToNFTMarketItemActivity",
    outputs: [
      {
        internalType: "enum Enums.NFTMarketItemActivityType",
        name: "activityType",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "fromAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "toAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenIdToTokenActivityItem",
    outputs: [
      {
        internalType: "enum Enums.TokenActivityType",
        name: "activityType",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "fromAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "toAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class ERCLogging__factory {
  static readonly abi = _abi;
  static createInterface(): ERCLoggingInterface {
    return new Interface(_abi) as ERCLoggingInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ERCLogging {
    return new Contract(address, _abi, runner) as unknown as ERCLogging;
  }
}
