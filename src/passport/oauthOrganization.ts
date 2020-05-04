const makeOauthPassport = ({
  createOrganization,
  getOrganization,
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

      const alreadyCustomer = await getOrganization(profile._json.email);
      const currentCustomer = { ...alreadyCustomer, source }
      
      let create = async () => {
        const newCustomer = await createOrganization(profile, source);
        done(null, newCustomer)
      };

      alreadyCustomer ? done(null, currentCustomer) : create()
    
    } catch (error) {
      done(error, false, error.message);
    }
  };
};

export default makeOauthPassport;
