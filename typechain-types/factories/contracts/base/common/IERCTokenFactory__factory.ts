/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IERCTokenFactory,
  IERCTokenFactoryInterface,
} from "../../../../contracts/base/common/IERCTokenFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_loggerAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_marketplaceAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "string",
        name: "_bannerMedia",
        type: "string",
      },
      {
        internalType: "string",
        name: "_displayPicture",
        type: "string",
      },
    ],
    name: "create721Token",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IERCTokenFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IERCTokenFactoryInterface {
    return new Interface(_abi) as IERCTokenFactoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IERCTokenFactory {
    return new Contract(address, _abi, runner) as unknown as IERCTokenFactory;
  }
}
