import usecases from "../use-cases/index";
import makePatients from "./patients.controllers";
import makeAllergy from './allergy.controllers';
import makeUser from './user.controllers'
import makeOrganization from './organization.controllers'

const {contracts, twilio} = usecases

const patients = makePatients({twilio, contracts})
const allergy = makeAllergy({twilio, contracts})
const user = makeUser({})
const organization = makeOrganization({})

export default Object.freeze({
  patients,
  allergy,
   user, 
   organization
});

export { patients, allergy, user, organization };
