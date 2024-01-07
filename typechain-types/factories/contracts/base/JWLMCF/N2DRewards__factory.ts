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
import type { NonPayableOverrides } from "../../../../common";
import type {
  N2DRewards,
  N2DRewardsInterface,
} from "../../../../contracts/base/JWLMCF/N2DRewards";

const _abi = [
  {
    inputs: [],
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
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
    name: "MANAGER_ROLE",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "safeN2drTransfer",
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
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50336040518060400160405280600b81526020016a4e3244205265776172647360a81b815250604051806040016040528060048152602001632719222960e11b81525081600390816200006591906200029d565b5060046200007482826200029d565b5050506001600160a01b038116620000a657604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b620000b181620000f3565b50620000bf60003362000145565b50620000ec7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b083362000145565b5062000369565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60008281526006602090815260408083206001600160a01b038516845290915281205460ff16620001ee5760008381526006602090815260408083206001600160a01b03861684529091529020805460ff19166001179055620001a53390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001620001f2565b5060005b92915050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200022357607f821691505b6020821081036200024457634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200029857600081815260208120601f850160051c81016020861015620002735750805b601f850160051c820191505b8181101562000294578281556001016200027f565b5050505b505050565b81516001600160401b03811115620002b957620002b9620001f8565b620002d181620002ca84546200020e565b846200024a565b602080601f831160018114620003095760008415620002f05750858301515b600019600386901b1c1916600185901b17855562000294565b600085815260208120601f198616915b828110156200033a5788860151825594840194600190910190840162000319565b5085821015620003595787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610eec80620003796000396000f3fe608060405234801561001057600080fd5b50600436106101985760003560e01c806370a08231116100e3578063a217fddf1161008c578063dd62ed3e11610066578063dd62ed3e14610373578063ec87621c146103ac578063f2fde38b146103d357600080fd5b8063a217fddf14610345578063a9059cbb1461034d578063d547741f1461036057600080fd5b80638da5cb5b116100bd5780638da5cb5b146102e957806391d148541461030457806395d89b411461033d57600080fd5b806370a08231146102a5578063715018a6146102ce57806379cc6790146102d657600080fd5b8063248a9ca31161014557806336568abe1161011f57806336568abe1461026c57806340c10f191461027f57806342966c681461029257600080fd5b8063248a9ca3146102275780632f2ff15d1461024a578063313ce5671461025d57600080fd5b806318160ddd1161017657806318160ddd146101ed5780631f48c74e146101ff57806323b872dd1461021457600080fd5b806301ffc9a71461019d57806306fdde03146101c5578063095ea7b3146101da575b600080fd5b6101b06101ab366004610cd0565b6103e6565b60405190151581526020015b60405180910390f35b6101cd61041d565b6040516101bc9190610d01565b6101b06101e8366004610d6b565b6104af565b6002545b6040519081526020016101bc565b61021261020d366004610d6b565b6104c7565b005b6101b0610222366004610d95565b610567565b6101f1610235366004610dd1565b60009081526006602052604090206001015490565b610212610258366004610dea565b61058b565b604051601281526020016101bc565b61021261027a366004610dea565b6105b0565b61021261028d366004610d6b565b6105e3565b6102126102a0366004610dd1565b6106a3565b6101f16102b3366004610e16565b6001600160a01b031660009081526020819052604090205490565b6102126106b0565b6102126102e4366004610d6b565b6106c4565b6005546040516001600160a01b0390911681526020016101bc565b6101b0610312366004610dea565b60009182526006602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6101cd6106d9565b6101f1600081565b6101b061035b366004610d6b565b6106e8565b61021261036e366004610dea565b6106f6565b6101f1610381366004610e31565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101f17f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b0881565b6102126103e1366004610e16565b61071b565b60006001600160e01b03198216637965db0b60e01b148061041757506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606003805461042c90610e5b565b80601f016020809104026020016040519081016040528092919081815260200182805461045890610e5b565b80156104a55780601f1061047a576101008083540402835291602001916104a5565b820191906000526020600020905b81548152906001019060200180831161048857829003601f168201915b5050505050905090565b6000336104bd818585610756565b5060019392505050565b6104f17f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b0833610312565b6105305760405162461bcd60e51b815260206004820152600b60248201526a139bdd08185b1b1bddd95960aa1b60448201526064015b60405180910390fd5b30600090815260208190526040902054808211156105585761055283826106e8565b50505050565b61055283836106e8565b505050565b600033610575858285610763565b6105808585856107db565b506001949350505050565b6000828152600660205260409020600101546105a68161083a565b6105528383610844565b6001600160a01b03811633146105d95760405163334bd91960e11b815260040160405180910390fd5b61056282826108f2565b61060d7f241ecf16d79d0f8dbfb92cbc07fe17840425976cf0667f022fe9877caa831b0833610312565b6106475760405162461bcd60e51b815260206004820152600b60248201526a139bdd08185b1b1bddd95960aa1b6044820152606401610527565b806008546106559190610e95565b6008556001600160a01b03821660009081526007602052604090205461067c908290610e95565b6001600160a01b03831660009081526007602052604090205561069f8282610979565b5050565b6106ad33826109af565b50565b6106b86109e5565b6106c26000610a12565b565b6106cf823383610763565b61069f82826109af565b60606004805461042c90610e5b565b6000336104bd8185856107db565b6000828152600660205260409020600101546107118161083a565b61055283836108f2565b6107236109e5565b6001600160a01b03811661074d57604051631e4fbdf760e01b815260006004820152602401610527565b6106ad81610a12565b6105628383836001610a7c565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811461055257818110156107cc57604051637dc7a0d960e11b81526001600160a01b03841660048201526024810182905260448101839052606401610527565b61055284848484036000610a7c565b6001600160a01b03831661080557604051634b637e8f60e11b815260006004820152602401610527565b6001600160a01b03821661082f5760405163ec442f0560e01b815260006004820152602401610527565b610562838383610b51565b6106ad8133610c7b565b60008281526006602090815260408083206001600160a01b038516845290915281205460ff166108ea5760008381526006602090815260408083206001600160a01b03861684529091529020805460ff191660011790556108a23390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610417565b506000610417565b60008281526006602090815260408083206001600160a01b038516845290915281205460ff16156108ea5760008381526006602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4506001610417565b6001600160a01b0382166109a35760405163ec442f0560e01b815260006004820152602401610527565b61069f60008383610b51565b6001600160a01b0382166109d957604051634b637e8f60e11b815260006004820152602401610527565b61069f82600083610b51565b6005546001600160a01b031633146106c25760405163118cdaa760e01b8152336004820152602401610527565b600580546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038416610aa65760405163e602df0560e01b815260006004820152602401610527565b6001600160a01b038316610ad057604051634a1406b160e11b815260006004820152602401610527565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561055257826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610b4391815260200190565b60405180910390a350505050565b6001600160a01b038316610b7c578060026000828254610b719190610e95565b90915550610bee9050565b6001600160a01b03831660009081526020819052604090205481811015610bcf5760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610527565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610c0a57600280548290039055610c29565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610c6e91815260200190565b60405180910390a3505050565b60008281526006602090815260408083206001600160a01b038516845290915290205460ff1661069f5760405163e2517d3f60e01b81526001600160a01b038216600482015260248101839052604401610527565b600060208284031215610ce257600080fd5b81356001600160e01b031981168114610cfa57600080fd5b9392505050565b600060208083528351808285015260005b81811015610d2e57858101830151858201604001528201610d12565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610d6657600080fd5b919050565b60008060408385031215610d7e57600080fd5b610d8783610d4f565b946020939093013593505050565b600080600060608486031215610daa57600080fd5b610db384610d4f565b9250610dc160208501610d4f565b9150604084013590509250925092565b600060208284031215610de357600080fd5b5035919050565b60008060408385031215610dfd57600080fd5b82359150610e0d60208401610d4f565b90509250929050565b600060208284031215610e2857600080fd5b610cfa82610d4f565b60008060408385031215610e4457600080fd5b610e4d83610d4f565b9150610e0d60208401610d4f565b600181811c90821680610e6f57607f821691505b602082108103610e8f57634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561041757634e487b7160e01b600052601160045260246000fdfea26469706673582212202cf51611b4b26c83c0c4122fa625ea71864293849ec48e562eb3163fcd7f44d364736f6c63430008140033";

type N2DRewardsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: N2DRewardsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class N2DRewards__factory extends ContractFactory {
  constructor(...args: N2DRewardsConstructorParams) {
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
      N2DRewards & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): N2DRewards__factory {
    return super.connect(runner) as N2DRewards__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): N2DRewardsInterface {
    return new Interface(_abi) as N2DRewardsInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): N2DRewards {
    return new Contract(address, _abi, runner) as unknown as N2DRewards;
  }
}
