const patientController = ({ useCases }: any) => {
    return {
      getPatient: (req: any, res: any, {}: any) => {
        try {
          console.log(req)
          res.send(useCases);
        } catch (err) {
          console.log(err);
        }
      },
      createPatient: (req: any, res: any, {}: any) => {
        try {
          console.log(req)
          res.send(useCases);
        } catch (err) {
          console.log(err);
        }
      },
      updatePatient: (req: any, res: any, {}: any) => {
        try {
          console.log(req)
          res.send(useCases);
        } catch (err) {
          console.log(err);
        }
      },
      insertAddress: (req: any, res: any, {}: any) => {
        try {
          console.log(req)
          res.send(useCases);
        } catch (err) {
          console.log(err);
        }
      },
      insertContact: (req: any, res: any, {}: any) => {
        try {
          console.log(req)
          res.send(useCases);
        } catch (err) {
          console.log(err);
        }
      },
      insertTelecom: (req: any, res: any, {}: any) => {
        try {
          console.log(req)
          res.send(useCases);
        } catch (err) {
          console.log(err);
        }
      },
    }
  };
  
  export default patientController;
  