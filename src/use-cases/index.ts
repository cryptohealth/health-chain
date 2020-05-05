

// Usecases
import makeUser from './users'
import makeOrganizations from './organizations'
import makeContracts from './contracts'
import twilio from './twilio'
// Repositories
import {Organization, User} from '../mongodb/index'
import Web3 from 'web3'
const abi = {}

console.log(abi)
var web3 = new Web3('ws://localhost:8546');

var PatientFactoryContract = web3.eth.Contract
var contractAddress = '/* our contract address on Ethereum after deploying */'



console.log(contractAddress)

var publicContracts = PatientFactoryContract



const contracts = makeContracts(publicContracts)
const user = makeUser(User)
const organization = makeOrganizations(Organization)


export default {twilio, contracts, user, organization}