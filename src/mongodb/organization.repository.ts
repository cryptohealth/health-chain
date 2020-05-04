import {Model} from 'mongoose'

import IStore from '../interfaces/user.type.d';


export default (Model:Model<IStore, {}>) => {
    return Object.freeze({
        createUser: async (customer:any) => {
            return await Model.create(customer)
        },
        findByEmail: async (email:string) => {
            return await Model.findOne({email})
        },
        findById: async (id:string) => {
            return await Model.findById(id, 'email')
        },
        findByIdAndDelete: async (id:string) => {
            return await Model.findByIdAndDelete(id)
        },
        findByIdAndUpdate: async (id:string, data:IStore) => {
            return await Model.findByIdAndUpdate(id, data)
        },
        findByIdAndDesactive: async (id: string) => {
            return await Model.findByIdAndUpdate(id, {activated: false})
        },
        findByIdAndActive: async (id: string) => {
            return await Model.findByIdAndUpdate(id, {activated: true})
        }
    })
}