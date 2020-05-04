import {Document} from 'mongoose'
interface ICustomer extends Document {
    id: string,
    externalId: string,
    provider: string,
    email: string, 
    password: string,
    name: string,
    locale: string
    languague: string,
    source: string
    activated: boolean
}

export default ICustomer