
import entity from "../entities/index";
import UserRepo from '../interfaces/user.repo.type.d';
import config from '../config/index'

var jwt = require("jsonwebtoken");

const UserUsecases = (User: UserRepo) => {
  const { Auth } = entity;
  return {
    createUser: async (profile: any) => {
        let auth = Auth(profile) // Validate
        let user = auth.getUser() // Get User Entity
        User.createUser(user) // Saves On MongoDb 
        return user // Return new User
    },
    updateUser: async (profile: any, data:any) => {
        let auth = Auth(data) // Validate
        let user = auth.getUser() // Get User Entity
        User.findByIdAndUpdate(profile.id, data) // Saves On MongoDb 
        return user // Return updated User
    },
    activeUser: async (id: string) => {
        let user = await User.findByIdAndActive(id)
        return user
    },
    desactiveUser: async (id: string) => {
        let user = await User.findByIdAndDesactive(id)
        return user
    },
    getActiveUser: async (id: string) => {
        let user = await User.findById(id)
        if(user?.activated){
            return user
        }else{
            throw new Error("Sorry, you are desactivated, contact the support.")
        }
    },
    getUser: async (email:string) => {
      return await User.findByEmail(email)
    },
    signToken: (id: string) => {
      return jwt.sign(
        {
          iss: "CryptoHealth",
          sub: id,
          iat: new Date().getTime(), // current time
          exp: new Date().setDate(new Date().getDate() + 1), // current time + 1 day ahead
        },
        config.jwt.secret1
      );
    }
  };
};

export default UserUsecases;
