const makeOauthPassport = ({
  createUser,
  getUser,
  getRequsetIp,
}: any) => {
  return async (
    req: any,
    {}: any,
    {}: any,
    profile: any,
    done: any
  ) => {
    try {
      const source = { device: req.device.type, ip: getRequsetIp(req) };

      const alreadyCustomer = await getUser(profile._json.email);
      const currentCustomer = { ...alreadyCustomer, source }
      
      let create = async () => {
        const newCustomer = await createUser(profile, source);
        done(null, newCustomer)
      };

      alreadyCustomer ? done(null, currentCustomer) : create()
    
    } catch (error) {
      done(error, false, error.message);
    }
  };
};

export default makeOauthPassport;
