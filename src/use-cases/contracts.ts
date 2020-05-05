const makeContracts = (contracts:any) => {
    return {
       getPatientHistory: (address:any) => {
        contracts.getPatient(address)
       },
       createPatient: ({}:any) => {
        contracts.createPatient()
       }

        
    }
}


export default makeContracts