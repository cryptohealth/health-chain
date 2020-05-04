
import controllers from "../controllers/index";

const { patients, allergy, organization, user} = controllers;

interface auth {
    googleOauth: () => void
    userJWT: () => void;
    organizationJWT: () => void;
    localOauth: () => void
}



const makeRoutes = (router: any, auth: auth) => {
  const { googleOauth, organizationJWT, userJWT, localOauth  } = auth;

  // User Routes
  router.post("/user/oauth/google", googleOauth, user.loginUser);
  router.post("/user/oauth/local", localOauth, user.loginUser);
  router.get("/user", userJWT, user.getUser);
  router.put("/user", userJWT, user.updateUser);
  router.delete("/user", userJWT, user.desactiveUser);


  // Organization Routes
  router.post("/organization", googleOauth, organization.loginOrganization);
  router.get("/organization", organizationJWT, organization.getOrganization);
  router.put("/organization", organizationJWT, organization.updateOrganization);
  router.delete("/organization", organizationJWT, organization.deleteOrganization);

  // Patient Routes
  router.post("/patient", googleOauth, patients.createPatient);
  router.get("/patient", userJWT, patients.getPatient);
  router.put("/patient", userJWT, patients.updatePatient);
  router.post("/patient/address", userJWT, patients.insertAddress);
  router.post("/patient/contact", userJWT, patients.insertContact);
  router.post("/patient/telecom", userJWT, patients.insertTelecom);

  // Allergy Routes
  router.get("/allergy", [userJWT, organizationJWT], allergy.createAllergy);
  router.put("/allergy", [userJWT, organizationJWT], allergy.updateAllergy);
  router.get("/allergy/note", [userJWT, organizationJWT], allergy.insertNote);
  router.get(
    "/allergy/reaction",
    [userJWT, organizationJWT],
    allergy.insertReaction
  );

  // Family History

  return router;
};

export default makeRoutes;
