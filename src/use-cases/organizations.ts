
import entity from "../entities/index";
import OrganizationRepo from '../interfaces/organization.repo.type.d';
import config from '../config/index'

var jwt = require("jsonwebtoken");

const OrganizationUseCases = (Organization: OrganizationRepo) => {
  const { Auth } = entity;
  return {
    createOrganization: async (profile: any) => {
        let auth = Auth(profile) // Validate
        let organization = auth.getUser() // Get User Entity
        Organization.createOrganization(organization) // Saves On MongoDb 
        return organization // Return new User
    },
    updateOrganization: async (profile: any, data:any) => {
        let auth = Auth(data) // Validate
        let organization = auth.getUser() // Get User Entity
        Organization.findByIdAndUpdate(profile.id, data) // Saves On MongoDb 
        return organization // Return updated User
    },
    activeOrganization: async (id: string) => {
        let organization = await Organization.findByIdAndActive(id)
        return organization
    },
    desactiveOrganization: async (id: string) => {
        let organization = await Organization.findByIdAndDesactive(id)
        return organization
    },
    getOrganization: async (email:string) => {
      return await Organization.findByEmail(email)
    },
    signToken: (id: string) => {
      return jwt.sign(
        {
          iss: "Craton",
          sub: id,
          iat: new Date().getTime(), // current time
          exp: new Date().setDate(new Date().getDate() + 1), // current time + 1 day ahead
        },
        config.jwt.secret1
      );
    }
  };
};

export default OrganizationUseCases;
