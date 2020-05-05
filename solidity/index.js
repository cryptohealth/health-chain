import solc from 'solc'
import path from 'path'
import fs from 'fs'



const indexPath = path.resolve('./src/solidity/Patient.sol');


const source = fs.readFileSync(indexPath, 'UTF-8');

console.log(source)

var input = {
    language: 'Solidity',
    sources: source,
    settings: {
      outputSelection: {
        '*': {
          '*': ['*']
        }
      }
    }
  };


  
const output = solc.compile(JSON.stringify(input))




// for (var contractName in output.contracts['test.sol']) {
//     console.log(
//       contractName +
//         ': ' +
//         output.contracts['test.sol'][contractName].evm.bytecode.object
//     );
//   }

export default {}