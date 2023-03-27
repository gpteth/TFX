const fs = require('fs');
const solc = require('solcjs');

const contractPath = './sampleContract.sol';
const contractCode = fs.readFileSync(contractPath, 'utf8');

const input = {
	    language: 'Solidity',
	    sources: {
		    'sampleContract.sol': {
				    content: contractCode,
				},
		    },
	    settings: {
		outputSelection: {
			'*': {
				'*': ['abi', 'evm.bytecode'],
			},
		},
	},
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));

const bytecode = output.contracts['sampleContract.sol']['TokenMintERC20Token'].evm.bytecode.object;
const abi = output.contracts['sampleContract.sol']['TokenMintERC20Token'].abi;

console.log('Bytecode: ' + bytecode);
console.log('ABI: ' + JSON.stringify(abi));
