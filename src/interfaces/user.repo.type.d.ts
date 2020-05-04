import ICustomer from './customer.type.d';

interface CustomerRepo {
    createUser: (customer: any) => Promise<ICustomer>;
    findByEmail: (email: string) => Promise<ICustomer | null>
    findById: (id: string) => Promise<ICustomer | null>;
    findByIdAndDelete: (id: string) => Promise<ICustomer | null>;
    findByIdAndUpdate: (id: string, data: ICustomer) => Promise<ICustomer | null>;
    findByIdAndDesactive: (id: string) => Promise<ICustomer | null>;
    findByIdAndActive: (id: string) => Promise<ICustomer | null>;
}


export default CustomerRepo