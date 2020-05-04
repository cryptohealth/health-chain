const organizationController = ({ useCases }: any) => {
    return {
      getOrganization: (req: any, res: any, {}: any) => {
        try {
          console.log(req)
          res.send(useCases);
        } catch (err) {
          console.log(err);
        }
      },
      loginOrganization: (req: any, res: any, {}: any) => {
        try {
          const token = useCases.signToken(req.user.hash);
          res.cookie('access_token', token, {
            httpOnly: true
          });
          res.status(200).json({ success: true });
        } catch (err) {
          console.log(err);
        }
      },
      updateOrganization: (req: any, res: any, {}: any) => {
        try {
          console.log(req)
          res.send(useCases);
        } catch (err) {
          console.log(err);
        }
      },
      deleteOrganization: (req: any, res: any, {}: any) => {
        try {
          console.log(req)
          res.send(useCases);
        } catch (err) {
          console.log(err);
        }
      }
    }
  };
  
  export default organizationController;
  