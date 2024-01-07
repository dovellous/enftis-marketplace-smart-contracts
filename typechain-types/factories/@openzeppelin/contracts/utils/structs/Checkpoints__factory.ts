/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type {
  Checkpoints,
  CheckpointsInterface,
} from "../../../../../@openzeppelin/contracts/utils/structs/Checkpoints";

const _abi = [
  {
    inputs: [],
    name: "CheckpointUnorderedInsertion",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220888694d350937591f8b6d2f1bc5e12e9428a7f3d6a9437a10138713c64b9971964736f6c63430008160033";

type CheckpointsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CheckpointsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Checkpoints__factory extends ContractFactory {
  constructor(...args: CheckpointsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Checkpoints & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Checkpoints__factory {
    return super.connect(runner) as Checkpoints__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CheckpointsInterface {
    return new Interface(_abi) as CheckpointsInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Checkpoints {
    return new Contract(address, _abi, runner) as unknown as Checkpoints;
  }
}
