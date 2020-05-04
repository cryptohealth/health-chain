const UserController = ({ useCases }: any) => {
    return {
      getUser: (req: any, res: any, {}: any) => {
        try {
          console.log(req)
          res.send(useCases);
        } catch (err) {
          console.log(err);
        }
      },
      loginUser: (req: any, res: any, {}: any) => {
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
      logoutUser: (req: any, res: any, {}: any) => {
        try {
          console.log(req)
          res.status(200).json({ success: true });
        } catch (err) {
          console.log(err);
        }
      },
      updateUser: (req: any, res: any, {}: any) => {
        try {
          console.log(req)
          res.send(useCases);
        } catch (err) {
          console.log(err);
        }
      },
      desactiveUser: (req: any, res: any, {}: any) => {
        try {
          console.log(req)
          res.send(useCases);
        } catch (err) {
          console.log(err);
        }
      },
    }
  };
  
  export default UserController;
  