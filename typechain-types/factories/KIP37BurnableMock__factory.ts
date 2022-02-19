/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  KIP37BurnableMock,
  KIP37BurnableMockInterface,
} from "../KIP37BurnableMock";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address",
      },
      {
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "ids",
        type: "uint256[]",
      },
      {
        name: "amounts",
        type: "uint256[]",
      },
      {
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "accounts",
        type: "address[]",
      },
      {
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        name: "",
        type: "uint256[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "account",
        type: "address",
      },
      {
        name: "ids",
        type: "uint256[]",
      },
      {
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "burnBatch",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "id",
        type: "uint256",
      },
      {
        name: "value",
        type: "uint256",
      },
      {
        name: "data",
        type: "bytes",
      },
    ],
    name: "mint",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "operator",
        type: "address",
      },
      {
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address",
      },
      {
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "id",
        type: "uint256",
      },
      {
        name: "amount",
        type: "uint256",
      },
      {
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "account",
        type: "address",
      },
      {
        name: "id",
        type: "uint256",
      },
      {
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        name: "uri",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620036ec380380620036ec833981018060405260208110156200003757600080fd5b8101908080516401000000008111156200005057600080fd5b828101905060208101848111156200006757600080fd5b81518560018202830111640100000000821117156200008557600080fd5b505092919050505080620000a66301ffc9a760e01b6200010760201b60201c565b620000b7816200021060201b60201c565b620000cf636433ca1f60e01b6200010760201b60201c565b620000e7630e89341c60e01b6200010760201b60201c565b5062000100639e094e9e60e01b6200010760201b60201c565b50620002db565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415620001a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f4b495031333a20696e76616c696420696e74657266616365206964000000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b8060049080519060200190620002289291906200022c565b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200026f57805160ff1916838001178555620002a0565b82800160010185558215620002a0579182015b828111156200029f57825182559160200191906001019062000282565b5b509050620002af9190620002b3565b5090565b620002d891905b80821115620002d4576000816000905550600101620002ba565b5090565b90565b61340180620002eb6000396000f3fe608060405234801561001057600080fd5b50600436106100b35760003560e01c8063731133e911610071578063731133e914610756578063a22cb46514610845578063bd85b03914610895578063e985e9c5146108d7578063f242432a14610953578063f5298aca14610a62576100b3565b8062fdd58e146100b857806301ffc9a71461011a5780630e89341c1461017f5780632eb2c2d6146102265780634e1273f4146104495780636b20c454146105ea575b600080fd5b610104600480360360408110156100ce57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610aba565b6040518082815260200191505060405180910390f35b6101656004803603602081101561013057600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610b9a565b604051808215151515815260200191505060405180910390f35b6101ab6004803603602081101561019557600080fd5b8101908080359060200190929190505050610c01565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101eb5780820151818401526020810190506101d0565b50505050905090810190601f1680156102185780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610447600480360360a081101561023c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561029957600080fd5b8201836020820111156102ab57600080fd5b803590602001918460208302840111640100000000831117156102cd57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561032d57600080fd5b82018360208201111561033f57600080fd5b8035906020019184602083028401116401000000008311171561036157600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156103c157600080fd5b8201836020820111156103d357600080fd5b803590602001918460018302840111640100000000831117156103f557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610ca5565b005b6105936004803603604081101561045f57600080fd5b810190808035906020019064010000000081111561047c57600080fd5b82018360208201111561048e57600080fd5b803590602001918460208302840111640100000000831117156104b057600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561051057600080fd5b82018360208201111561052257600080fd5b8035906020019184602083028401116401000000008311171561054457600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290505050611188565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156105d65780820151818401526020810190506105bb565b505050509050019250505060405180910390f35b6107546004803603606081101561060057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561063d57600080fd5b82018360208201111561064f57600080fd5b8035906020019184602083028401116401000000008311171561067157600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156106d157600080fd5b8201836020820111156106e357600080fd5b8035906020019184602083028401116401000000008311171561070557600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290505050611366565b005b6108436004803603608081101561076c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803590602001906401000000008111156107bd57600080fd5b8201836020820111156107cf57600080fd5b803590602001918460018302840111640100000000831117156107f157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611419565b005b6108936004803603604081101561085b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080351515906020019092919050505061142b565b005b6108c1600480360360208110156108ab57600080fd5b81019080803590602001909291905050506115c6565b6040518082815260200191505060405180910390f35b610939600480360360408110156108ed57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115e3565b604051808215151515815260200191505060405180910390f35b610a60600480360360a081101561096957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803590602001906401000000008111156109da57600080fd5b8201836020820111156109ec57600080fd5b80359060200191846001830284011164010000000083111715610a0e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611677565b005b610ab860048036036060811015610a7857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190505050611a41565b005b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b41576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806132026029913960400191505060405180910390fd5b6001600083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c995780601f10610c6e57610100808354040283529160200191610c99565b820191906000526020600020905b815481529060010190602001808311610c7c57829003601f168201915b50505050509050919050565b8151835114610cff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806132526026913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610d85576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602381526020018061334e6023913960400191505060405180910390fd5b610d8d611af4565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161480610dd35750610dd285610dcd611af4565b6115e3565b5b610e28576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806132786030913960400191505060405180910390fd5b6000610e32611af4565b9050610e42818787878787611afc565b60008090505b8451811015611016576000858281518110610e5f57fe5b602002602001015190506000858381518110610e7757fe5b60200260200101519050610efe816040518060600160405280602881526020016132a8602891396001600086815260200190815260200160002060008d73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611b049092919063ffffffff16565b6001600084815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610fb5816001600085815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611bc490919063ffffffff16565b6001600084815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050806001019050610e48565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156110c65780820151818401526020810190506110ab565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156111085780820151818401526020810190506110ed565b5050505090500194505050505060405180910390a461112b818787878787611c4c565b611180576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260368152602001806133716036913960400191505060405180910390fd5b505050505050565b606081518351146111e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806131986027913960400191505060405180910390fd5b606083516040519080825280602002602001820160405280156112165781602001602082028038833980820191505090505b50905060008090505b845181101561135b57600073ffffffffffffffffffffffffffffffffffffffff1685828151811061124c57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1614156112c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f8152602001806133a7602f913960400191505060405180910390fd5b600160008583815181106112d157fe5b6020026020010151815260200190815260200160002060008683815181106112f557fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482828151811061134457fe5b60200260200101818152505080600101905061121f565b508091505092915050565b61136e611af4565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614806113b457506113b3836113ae611af4565b6115e3565b5b611409576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806133276027913960400191505060405180910390fd5b6114148383836122c4565b505050565b61142584848484612692565b50505050565b8173ffffffffffffffffffffffffffffffffffffffff1661144a611af4565b73ffffffffffffffffffffffffffffffffffffffff1614156114b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806132d06027913960400191505060405180910390fd5b80600260006114c4611af4565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16611571611af4565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b600060036000838152602001908152602001600020549050919050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614156116fd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602381526020018061334e6023913960400191505060405180910390fd5b611705611af4565b73ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16148061174b575061174a85611745611af4565b6115e3565b5b6117a0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806133276027913960400191505060405180910390fd5b60006117aa611af4565b90506117ca8187876117bb88612944565b6117c488612944565b87611afc565b611847836040518060600160405280602881526020016132a8602891396001600088815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611b049092919063ffffffff16565b6001600086815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506118fe836001600087815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611bc490919063ffffffff16565b6001600086815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628787604051808381526020018281526020019250505060405180910390a46119e481878787878761299d565b611a39576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806132f76030913960400191505060405180910390fd5b505050505050565b611a49611af4565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161480611a8f5750611a8e83611a89611af4565b6115e3565b5b611ae4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806133276027913960400191505060405180910390fd5b611aef838383612f11565b505050565b600033905090565b505050505050565b6000838311158290611bb1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611b76578082015181840152602081019050611b5b565b50505050905090810190601f168015611ba35780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b600080828401905083811015611c42576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b6000806060611c708773ffffffffffffffffffffffffffffffffffffffff16613184565b611c7f576001925050506122ba565b8673ffffffffffffffffffffffffffffffffffffffff1663bc197c8160e01b8a8a898989604051602401808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b83811015611d55578082015181840152602081019050611d3a565b50505050905001848103835286818151815260200191508051906020019060200280838360005b83811015611d97578082015181840152602081019050611d7c565b50505050905001848103825285818151815260200191508051906020019080838360005b83811015611dd6578082015181840152602081019050611dbb565b50505050905090810190601f168015611e035780820380516001836020036101000a031916815260200191505b5098505050505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b60208310611e9e5780518252602082019150602081019050602083039250611e7b565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611f00576040519150601f19603f3d011682016040523d82523d6000602084013e611f05565b606091505b5080925081935050506000815114158015611f89575063bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916818060200190516020811015611f5757600080fd5b81019080805190602001909291905050507bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b15611f99576001925050506122ba565b8673ffffffffffffffffffffffffffffffffffffffff16639b49e33260e01b8a8a898989604051602401808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b8381101561206f578082015181840152602081019050612054565b50505050905001848103835286818151815260200191508051906020019060200280838360005b838110156120b1578082015181840152602081019050612096565b50505050905001848103825285818151815260200191508051906020019080838360005b838110156120f05780820151818401526020810190506120d5565b50505050905090810190601f16801561211d5780820380516001836020036101000a031916815260200191505b5098505050505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b602083106121b85780518252602082019150602081019050602083039250612195565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461221a576040519150601f19603f3d011682016040523d82523d6000602084013e61221f565b606091505b50809250819350505060008151141580156122a35750639b49e33260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681806020019051602081101561227157600080fd5b81019080805190602001909291905050507bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b156122b3576001925050506122ba565b6000925050505b9695505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561234a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806131e16021913960400191505060405180910390fd5b80518251146123a4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806132526026913960400191505060405180910390fd5b60006123ae611af4565b90506123ce81856000868660405180602001604052806000815250611afc565b60008090505b8351811015612584576124808382815181106123ec57fe5b60200260200101516040518060600160405280602281526020016131bf602291396001600088868151811061241d57fe5b6020026020010151815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611b049092919063ffffffff16565b6001600086848151811061249057fe5b6020026020010151815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061254d8382815181106124f657fe5b602002602001015160405180606001604052806027815260200161322b602791396003600088868151811061252757fe5b6020026020010151815260200190815260200160002054611b049092919063ffffffff16565b6003600086848151811061255d57fe5b602002602001015181526020019081526020016000208190555080806001019150506123d4565b50600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561263557808201518184015260208101905061261a565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561267757808201518184015260208101905061265c565b5050505090500194505050505060405180910390a450505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415612735576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f4b495033373a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b600061273f611af4565b90506127608160008761275188612944565b61275a88612944565b87611afc565b6127c3836001600087815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611bc490919063ffffffff16565b6001600086815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061283d836003600087815260200190815260200160002054611bc490919063ffffffff16565b60036000868152602001908152602001600020819055508473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628787604051808381526020018281526020019250505060405180910390a46128e88160008787878761299d565b61293d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806132f76030913960400191505060405180910390fd5b5050505050565b60608060016040519080825280602002602001820160405280156129775781602001602082028038833980820191505090505b509050828160008151811061298857fe5b60200260200101818152505080915050919050565b60008060606129c18773ffffffffffffffffffffffffffffffffffffffff16613184565b6129d057600192505050612f07565b8673ffffffffffffffffffffffffffffffffffffffff1663f23a6e6160e01b8a8a898989604051602401808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015612aa7578082015181840152602081019050612a8c565b50505050905090810190601f168015612ad45780820380516001836020036101000a031916815260200191505b509650505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b60208310612b6d5780518252602082019150602081019050602083039250612b4a565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114612bcf576040519150601f19603f3d011682016040523d82523d6000602084013e612bd4565b606091505b5080925081935050506000815114158015612c58575063f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916818060200190516020811015612c2657600080fd5b81019080805190602001909291905050507bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b15612c6857600192505050612f07565b8673ffffffffffffffffffffffffffffffffffffffff1663e78b332560e01b8a8a898989604051602401808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015612d3f578082015181840152602081019050612d24565b50505050905090810190601f168015612d6c5780820380516001836020036101000a031916815260200191505b509650505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b60208310612e055780518252602082019150602081019050602083039250612de2565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114612e67576040519150601f19603f3d011682016040523d82523d6000602084013e612e6c565b606091505b5080925081935050506000815114158015612ef0575063e78b332560e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916818060200190516020811015612ebe57600080fd5b81019080805190602001909291905050507bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b15612f0057600192505050612f07565b6000925050505b9695505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415612f97576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806131e16021913960400191505060405180910390fd5b6000612fa1611af4565b9050612fd181856000612fb387612944565b612fbc87612944565b60405180602001604052806000815250611afc565b61304e826040518060600160405280602281526020016131bf602291396001600087815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611b049092919063ffffffff16565b6001600085815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506130e28260405180606001604052806027815260200161322b602791396003600087815260200190815260200160002054611b049092919063ffffffff16565b6003600085815260200190815260200160002081905550600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628686604051808381526020018281526020019250505060405180910390a450505050565b600080823b90506000811191505091905056fe4b495033373a206163636f756e747320616e6420696473206c656e677468206d69736d617463684b495033373a206275726e20616d6f756e7420657863656564732062616c616e63654b495033373a206275726e2066726f6d20746865207a65726f20616464726573734b495033373a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734b495033373a206275726e20616d6f756e74206578636565647320746f74616c20737570706c794b495033373a2069647320616e6420616d6f756e7473206c656e677468206d69736d617463684b495033373a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644b495033373a20696e73756666696369656e742062616c616e636520666f72207472616e736665724b495033373a2073657474696e6720617070726f76616c2073746174757320666f722073656c664b495033373a207472616e7366657220746f206e6f6e204b49503337526563656976657220696d706c656d656e7465724b495033373a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644b495033373a207472616e7366657220746f20746865207a65726f20616464726573734b495033373a206261746368207472616e7366657220746f206e6f6e204b49503337526563656976657220696d706c656d656e7465724b495033373a2062617463682062616c616e636520717565727920666f7220746865207a65726f2061646472657373a165627a7a7230582027a5c8e3aaa080a123970675623dd26363850ee7ba63c645bc1eec584fade3470029";

type KIP37BurnableMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KIP37BurnableMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class KIP37BurnableMock__factory extends ContractFactory {
  constructor(...args: KIP37BurnableMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<KIP37BurnableMock> {
    return super.deploy(uri, overrides || {}) as Promise<KIP37BurnableMock>;
  }
  getDeployTransaction(
    uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(uri, overrides || {});
  }
  attach(address: string): KIP37BurnableMock {
    return super.attach(address) as KIP37BurnableMock;
  }
  connect(signer: Signer): KIP37BurnableMock__factory {
    return super.connect(signer) as KIP37BurnableMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KIP37BurnableMockInterface {
    return new utils.Interface(_abi) as KIP37BurnableMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KIP37BurnableMock {
    return new Contract(address, _abi, signerOrProvider) as KIP37BurnableMock;
  }
}