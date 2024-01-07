/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  TimelockController,
  TimelockControllerInterface,
} from "../../../../@openzeppelin/contracts/governance/TimelockController";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minDelay",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "proposers",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "executors",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
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
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedInnerCall",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minDelay",
        type: "uint256",
      },
    ],
    name: "TimelockInsufficientDelay",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "targets",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "payloads",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "values",
        type: "uint256",
      },
    ],
    name: "TimelockInvalidOperationLength",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "TimelockUnauthorizedCaller",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "predecessorId",
        type: "bytes32",
      },
    ],
    name: "TimelockUnexecutedPredecessor",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "operationId",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "expectedStates",
        type: "bytes32",
      },
    ],
    name: "TimelockUnexpectedOperationState",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "CallExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "CallSalt",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "CallScheduled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "Cancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldDuration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newDuration",
        type: "uint256",
      },
    ],
    name: "MinDelayChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "CANCELLER_ROLE",
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
    name: "DEFAULT_ADMIN_ROLE",
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
    name: "EXECUTOR_ROLE",
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
    name: "PROPOSER_ROLE",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinDelay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "getOperationState",
    outputs: [
      {
        internalType: "enum TimelockController.OperationState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "getTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperation",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperationBatch",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperation",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationDone",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationPending",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationReady",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
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
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
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
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "schedule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "scheduleBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "updateDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001f3438038062001f3483398101604081905262000034916200032f565b620000416000306200019d565b506001600160a01b0381161562000061576200005f6000826200019d565b505b60005b83518110156200010157620000bc7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1858381518110620000a857620000a8620003b6565b60200260200101516200019d60201b60201c565b50620000f77ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783858381518110620000a857620000a8620003b6565b5060010162000064565b5060005b82518110156200015357620001497fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63848381518110620000a857620000a8620003b6565b5060010162000105565b5060028490556040805160008152602081018690527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a150505050620003cc565b6000828152602081815260408083206001600160a01b038516845290915281205460ff1662000242576000838152602081815260408083206001600160a01b03861684529091529020805460ff19166001179055620001f93390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600162000246565b5060005b92915050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200027a57600080fd5b919050565b600082601f8301126200029157600080fd5b815160206001600160401b0380831115620002b057620002b06200024c565b8260051b604051601f19603f83011681018181108482111715620002d857620002d86200024c565b6040529384526020818701810194908101925087851115620002f957600080fd5b6020870191505b848210156200032457620003148262000262565b8352918301919083019062000300565b979650505050505050565b600080600080608085870312156200034657600080fd5b845160208601519094506001600160401b03808211156200036657600080fd5b62000374888389016200027f565b945060408701519150808211156200038b57600080fd5b506200039a878288016200027f565b925050620003ab6060860162000262565b905092959194509250565b634e487b7160e01b600052603260045260246000fd5b611b5880620003dc6000396000f3fe6080604052600436106101bb5760003560e01c80638065657f116100ec578063bc197c811161008a578063d547741f11610064578063d547741f1461058e578063e38335e5146105ae578063f23a6e61146105c1578063f27a0c92146105ed57600080fd5b8063bc197c8114610515578063c4d252f514610541578063d45c44351461056157600080fd5b806391d14854116100c657806391d1485414610468578063a217fddf146104ac578063b08e51c0146104c1578063b1c5f427146104f557600080fd5b80638065657f146103f45780638f2a0bb0146104145780638f61f4f51461043457600080fd5b80632ab0f5291161015957806336568abe1161013357806336568abe14610367578063584b153e1461038757806364d62353146103a75780637958004c146103c757600080fd5b80632ab0f529146103075780632f2ff15d1461032757806331d507501461034757600080fd5b8063134008d311610195578063134008d31461026057806313bc9f2014610273578063150b7a0214610293578063248a9ca3146102d757600080fd5b806301d5062a146101c757806301ffc9a7146101e957806307bd02651461021e57600080fd5b366101c257005b600080fd5b3480156101d357600080fd5b506101e76101e23660046112b2565b610602565b005b3480156101f557600080fd5b50610209610204366004611327565b6106d8565b60405190151581526020015b60405180910390f35b34801561022a57600080fd5b506102527fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e6381565b604051908152602001610215565b6101e761026e366004611351565b6106e9565b34801561027f57600080fd5b5061020961028e3660046113bd565b6107e1565b34801561029f57600080fd5b506102be6102ae36600461148d565b630a85bd0160e11b949350505050565b6040516001600160e01b03199091168152602001610215565b3480156102e357600080fd5b506102526102f23660046113bd565b60009081526020819052604090206001015490565b34801561031357600080fd5b506102096103223660046113bd565b610807565b34801561033357600080fd5b506101e76103423660046114f5565b610810565b34801561035357600080fd5b506102096103623660046113bd565b61083b565b34801561037357600080fd5b506101e76103823660046114f5565b610860565b34801561039357600080fd5b506102096103a23660046113bd565b610898565b3480156103b357600080fd5b506101e76103c23660046113bd565b6108de565b3480156103d357600080fd5b506103e76103e23660046113bd565b610951565b6040516102159190611537565b34801561040057600080fd5b5061025261040f366004611351565b61099c565b34801561042057600080fd5b506101e761042f3660046115a4565b6109db565b34801561044057600080fd5b506102527fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc181565b34801561047457600080fd5b506102096104833660046114f5565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b3480156104b857600080fd5b50610252600081565b3480156104cd57600080fd5b506102527ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f78381565b34801561050157600080fd5b50610252610510366004611656565b610b7f565b34801561052157600080fd5b506102be61053036600461177f565b63bc197c8160e01b95945050505050565b34801561054d57600080fd5b506101e761055c3660046113bd565b610bc4565b34801561056d57600080fd5b5061025261057c3660046113bd565b60009081526001602052604090205490565b34801561059a57600080fd5b506101e76105a93660046114f5565b610c6f565b6101e76105bc366004611656565b610c94565b3480156105cd57600080fd5b506102be6105dc366004611829565b63f23a6e6160e01b95945050505050565b3480156105f957600080fd5b50600254610252565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc161062c81610e74565b600061063c89898989898961099c565b90506106488184610e81565b6000817f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8b8b8b8b8b8a604051610684969594939291906118b7565b60405180910390a383156106cd57807f20fda5fd27a1ea7bf5b9567f143ac5470bb059374a27e8f67cb44f946f6d0387856040516106c491815260200190565b60405180910390a25b505050505050505050565b60006106e382610f15565b92915050565b600080527fdae2aa361dfd1ca020a396615627d436107c35eff9fe7738a3512819782d70696020527f5ba6852781629bcdcd4bdaa6de76d786f1c64b16acdac474e55bebc0ea157951547fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e639060ff16610766576107668133610f3a565b600061077688888888888861099c565b90506107828185610f91565b61078e88888888610fdf565b6000817fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b588a8a8a8a6040516107c694939291906118f5565b60405180910390a36107d781611057565b5050505050505050565b600060025b6107ef83610951565b600381111561080057610800611521565b1492915050565b600060036107e6565b60008281526020819052604090206001015461082b81610e74565b6108358383611083565b50505050565b60008061084783610951565b600381111561085857610858611521565b141592915050565b6001600160a01b03811633146108895760405163334bd91960e11b815260040160405180910390fd5b610893828261112d565b505050565b6000806108a483610951565b905060018160038111156108ba576108ba611521565b14806108d7575060028160038111156108d5576108d5611521565b145b9392505050565b3330811461090f5760405163e2850c5960e01b81526001600160a01b03821660048201526024015b60405180910390fd5b60025460408051918252602082018490527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a150600255565b600081815260016020526040812054806000036109715750600092915050565b600181036109825750600392915050565b428111156109935750600192915050565b50600292915050565b60008686868686866040516020016109b9969594939291906118b7565b6040516020818303038152906040528051906020012090509695505050505050565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1610a0581610e74565b8887141580610a145750888514155b15610a5c576040517fffb03211000000000000000000000000000000000000000000000000000000008152600481018a90526024810186905260448101889052606401610906565b6000610a6e8b8b8b8b8b8b8b8b610b7f565b9050610a7a8184610e81565b60005b8a811015610b305780827f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8e8e85818110610aba57610aba611928565b9050602002016020810190610acf919061193e565b8d8d86818110610ae157610ae1611928565b905060200201358c8c87818110610afa57610afa611928565b9050602002810190610b0c9190611959565b8c8b604051610b20969594939291906118b7565b60405180910390a3600101610a7d565b508315610b7257807f20fda5fd27a1ea7bf5b9567f143ac5470bb059374a27e8f67cb44f946f6d038785604051610b6991815260200190565b60405180910390a25b5050505050505050505050565b60008888888888888888604051602001610ba0989796959493929190611a37565b60405160208183030381529060405280519060200120905098975050505050505050565b7ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783610bee81610e74565b610bf782610898565b610c335781610c0660026111b0565b610c1060016111b0565b604051635ead8eb560e01b81526004810193909352176024820152604401610906565b6000828152600160205260408082208290555183917fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb7091a25050565b600082815260208190526040902060010154610c8a81610e74565b610835838361112d565b600080527fdae2aa361dfd1ca020a396615627d436107c35eff9fe7738a3512819782d70696020527f5ba6852781629bcdcd4bdaa6de76d786f1c64b16acdac474e55bebc0ea157951547fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e639060ff16610d1157610d118133610f3a565b8786141580610d205750878414155b15610d68576040517fffb03211000000000000000000000000000000000000000000000000000000008152600481018990526024810185905260448101879052606401610906565b6000610d7a8a8a8a8a8a8a8a8a610b7f565b9050610d868185610f91565b60005b89811015610e5e5760008b8b83818110610da557610da5611928565b9050602002016020810190610dba919061193e565b905060008a8a84818110610dd057610dd0611928565b9050602002013590503660008a8a86818110610dee57610dee611928565b9050602002810190610e009190611959565b91509150610e1084848484610fdf565b84867fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b5886868686604051610e4794939291906118f5565b60405180910390a350505050806001019050610d89565b50610e6881611057565b50505050505050505050565b610e7e8133610f3a565b50565b610e8a8261083b565b15610ebc5781610e9a60006111b0565b604051635ead8eb560e01b815260048101929092526024820152604401610906565b6000610ec760025490565b905080821015610ef457604051635433660960e01b81526004810183905260248101829052604401610906565b610efe8242611af1565b600093845260016020526040909320929092555050565b60006001600160e01b03198216630271189760e51b14806106e357506106e3826111d3565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16610f8d5760405163e2517d3f60e01b81526001600160a01b038216600482015260248101839052604401610906565b5050565b610f9a826107e1565b610fa95781610e9a60026111b0565b8015801590610fbe5750610fbc81610807565b155b15610f8d5760405163121534c360e31b815260048101829052602401610906565b600080856001600160a01b0316858585604051610ffd929190611b12565b60006040518083038185875af1925050503d806000811461103a576040519150601f19603f3d011682016040523d82523d6000602084013e61103f565b606091505b509150915061104e8282611208565b50505050505050565b611060816107e1565b61106f5780610e9a60026111b0565b600090815260016020819052604090912055565b6000828152602081815260408083206001600160a01b038516845290915281205460ff16611125576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556110dd3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016106e3565b5060006106e3565b6000828152602081815260408083206001600160a01b038516845290915281205460ff1615611125576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016106e3565b60008160038111156111c4576111c4611521565b600160ff919091161b92915050565b60006001600160e01b03198216637965db0b60e01b14806106e357506301ffc9a760e01b6001600160e01b03198316146106e3565b60608261121d5761121882611224565b6106e3565b50806106e3565b8051156112345780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b80356001600160a01b038116811461126457600080fd5b919050565b60008083601f84011261127b57600080fd5b50813567ffffffffffffffff81111561129357600080fd5b6020830191508360208285010111156112ab57600080fd5b9250929050565b600080600080600080600060c0888a0312156112cd57600080fd5b6112d68861124d565b965060208801359550604088013567ffffffffffffffff8111156112f957600080fd5b6113058a828b01611269565b989b979a50986060810135976080820135975060a09091013595509350505050565b60006020828403121561133957600080fd5b81356001600160e01b0319811681146108d757600080fd5b60008060008060008060a0878903121561136a57600080fd5b6113738761124d565b955060208701359450604087013567ffffffffffffffff81111561139657600080fd5b6113a289828a01611269565b979a9699509760608101359660809091013595509350505050565b6000602082840312156113cf57600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611415576114156113d6565b604052919050565b600082601f83011261142e57600080fd5b813567ffffffffffffffff811115611448576114486113d6565b61145b601f8201601f19166020016113ec565b81815284602083860101111561147057600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080608085870312156114a357600080fd5b6114ac8561124d565b93506114ba6020860161124d565b925060408501359150606085013567ffffffffffffffff8111156114dd57600080fd5b6114e98782880161141d565b91505092959194509250565b6000806040838503121561150857600080fd5b823591506115186020840161124d565b90509250929050565b634e487b7160e01b600052602160045260246000fd5b602081016004831061155957634e487b7160e01b600052602160045260246000fd5b91905290565b60008083601f84011261157157600080fd5b50813567ffffffffffffffff81111561158957600080fd5b6020830191508360208260051b85010111156112ab57600080fd5b600080600080600080600080600060c08a8c0312156115c257600080fd5b893567ffffffffffffffff808211156115da57600080fd5b6115e68d838e0161155f565b909b50995060208c01359150808211156115ff57600080fd5b61160b8d838e0161155f565b909950975060408c013591508082111561162457600080fd5b506116318c828d0161155f565b9a9d999c50979a969997986060880135976080810135975060a0013595509350505050565b60008060008060008060008060a0898b03121561167257600080fd5b883567ffffffffffffffff8082111561168a57600080fd5b6116968c838d0161155f565b909a50985060208b01359150808211156116af57600080fd5b6116bb8c838d0161155f565b909850965060408b01359150808211156116d457600080fd5b506116e18b828c0161155f565b999c989b509699959896976060870135966080013595509350505050565b600082601f83011261171057600080fd5b8135602067ffffffffffffffff82111561172c5761172c6113d6565b8160051b61173b8282016113ec565b928352848101820192828101908785111561175557600080fd5b83870192505b848310156117745782358252918301919083019061175b565b979650505050505050565b600080600080600060a0868803121561179757600080fd5b6117a08661124d565b94506117ae6020870161124d565b9350604086013567ffffffffffffffff808211156117cb57600080fd5b6117d789838a016116ff565b945060608801359150808211156117ed57600080fd5b6117f989838a016116ff565b9350608088013591508082111561180f57600080fd5b5061181c8882890161141d565b9150509295509295909350565b600080600080600060a0868803121561184157600080fd5b61184a8661124d565b94506118586020870161124d565b93506040860135925060608601359150608086013567ffffffffffffffff81111561188257600080fd5b61181c8882890161141d565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6001600160a01b038716815285602082015260a0604082015260006118e060a08301868861188e565b60608301949094525060800152949350505050565b6001600160a01b038516815283602082015260606040820152600061191e60608301848661188e565b9695505050505050565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561195057600080fd5b6108d78261124d565b6000808335601e1984360301811261197057600080fd5b83018035915067ffffffffffffffff82111561198b57600080fd5b6020019150368190038213156112ab57600080fd5b6000838385526020808601955060208560051b8301018460005b87811015611a2a57848303601f19018952813536889003601e190181126119e057600080fd5b8701848101903567ffffffffffffffff8111156119fc57600080fd5b803603821315611a0b57600080fd5b611a1685828461188e565b9a86019a94505050908301906001016119ba565b5090979650505050505050565b60a0808252810188905260008960c08301825b8b811015611a78576001600160a01b03611a638461124d565b16825260209283019290910190600101611a4a565b5083810360208501528881527f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff891115611ab157600080fd5b8860051b9150818a60208301370182810360209081016040850152611ad990820187896119a0565b60608401959095525050608001529695505050505050565b808201808211156106e357634e487b7160e01b600052601160045260246000fd5b818382376000910190815291905056fea2646970667358221220b91dd80314d66f6993cde03ea870a26fb90808438bb68875fdd29be9df0dfb9f64736f6c63430008160033";

type TimelockControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TimelockControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TimelockController__factory extends ContractFactory {
  constructor(...args: TimelockControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    minDelay: BigNumberish,
    proposers: AddressLike[],
    executors: AddressLike[],
    admin: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      minDelay,
      proposers,
      executors,
      admin,
      overrides || {}
    );
  }
  override deploy(
    minDelay: BigNumberish,
    proposers: AddressLike[],
    executors: AddressLike[],
    admin: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      minDelay,
      proposers,
      executors,
      admin,
      overrides || {}
    ) as Promise<
      TimelockController & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TimelockController__factory {
    return super.connect(runner) as TimelockController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimelockControllerInterface {
    return new Interface(_abi) as TimelockControllerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TimelockController {
    return new Contract(address, _abi, runner) as unknown as TimelockController;
  }
}
