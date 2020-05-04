const AllergyController = ({ useCases }: any) => {
    return {
      createAllergy: (req: any, res: any, {}: any) => {
        try {
          console.log(req)
          res.send(useCases);
        } catch (err) {
          console.log(err);
        }
      },
      updateAllergy: (req: any, res: any, {}: any) => {
        try {
          console.log(req)
          res.send(useCases);
        } catch (err) {
          console.log(err);
        }
      },
      insertNote: (req: any, res: any, {}: any) => {
        try {
          console.log(req)
          res.send(useCases);
        } catch (err) {
          console.log(err);
        }
      },
      insertReaction: (req: any, res: any, {}: any) => {
        try {
          console.log(req)
          res.send(useCases);
        } catch (err) {
          console.log(err);
        }
      }
    }
  };
  
  export default AllergyController;
  