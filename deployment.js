const Web3 = require('web3');
const contract = require('web3-eth-contract');
const fs = require('fs');

const web3 = new Web3('http://localhost:8545'); // Replace with your RPC URL
contract.setProvider(web3);

// Load the contract ABI and bytecode
const abi = JSON.parse(fs.readFileSync('path/to/contract/MyContract.abi'));
const bytecode = '0x' + fs.readFileSync('path/to/contract/MyContract.bin').toString();

// Deploy the contract
const MyContract = new contract(abi);
const deploy = MyContract.deploy({ data: bytecode, arguments: [constructorArg1, constructorArg2, ...] });
const gasPrice = await web3.eth.getGasPrice();
const transaction = await deploy.send({ from: account, gas: gasLimit, gasPrice: gasPrice });

// Wait for the transaction to be mined
const receipt = await web3.eth.getTransactionReceipt(transaction.transactionHash);
while (receipt === null) {
  receipt = await web3.eth.getTransactionReceipt(transaction.transactionHash);
}

console.log(`Contract deployed at address: ${receipt.contractAddress}`);
