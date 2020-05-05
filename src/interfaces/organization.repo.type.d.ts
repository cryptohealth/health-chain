import IOrganization from './organization.type.d';

interface OrganizationRepo {
    createOrganization: (customer: any) => Promise<IOrganization>;
    findByEmail: (email: string) => Promise<IOrganization | null>
    findById: (id: string) => Promise<IOrganization | null>;
    findByIdAndDelete: (id: string) => Promise<IOrganization | null>;
    findByIdAndUpdate: (id: string, data: IOrganization) => Promise<IOrganization | null>;
    findByIdAndDesactive: (id: string) => Promise<IOrganization | null>;
    findByIdAndActive: (id: string) => Promise<IOrganization | null>;
}


export default OrganizationRepo