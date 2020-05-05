
let makeStrategy = ({createUser}:any) => {
  return async (req: any, profile: any, done: any) => {
    try {


      const iss = profile.iss
      console.log(iss)
      const id = profile.sub
       // Find the user specified in token
      const user = await createUser(id);
     
       
       // If user doesn't exists, handle it
       if (!user) {
         return done(null, false);
       }

       // Otherwise, return the user
       req.user = user;
       done(null, user);
    } catch (error) {
      done(error, false);
    }
  };
};

export default makeStrategy;
