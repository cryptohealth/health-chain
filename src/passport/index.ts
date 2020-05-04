import passport from "passport";
import pjwt from "passport-jwt";
import makeOauthUser from "./oauthUser";
import makeUserStrategy from "./strategyUser";
import config from "../config/index";
import usecases from "../use-cases/index";
const requestIp = require("request-ip");
const GooglePlusTokenStrategy = require("passport-google-plus-token");

const makePassportInit = () => {
  const jwtStrategy = pjwt.Strategy;
  const { createUser, getUser } = usecases.user;

  const userStrategy = makeUserStrategy({ createUser, getUser });
  const organizationStrategy = makeUserStrategy({ createUser, getUser });

  const getRequsetIp = (req: any) => {
    return requestIp.getClientIp(req);
  };

  const cookieExtractor = (req: any) => {
    let token = null;
    if (req && req.cookies) {
      token = req.cookies["access_token"];
    }
    return token;
  };

  const userOauth = makeOauthUser({ createUser, getUser, getRequsetIp });

  passport.use(
    "userStrategy",
    new jwtStrategy(
      {
        jwtFromRequest: cookieExtractor,
        secretOrKey: config.jwt.secret1,
        passReqToCallback: true,
      },
      userStrategy
    )
  );

  passport.use(
    "organizationStrategy",
    new jwtStrategy(
      {
        jwtFromRequest: cookieExtractor,
        secretOrKey: config.jwt.secret1,
        passReqToCallback: true,
      },
      organizationStrategy
    )
  );

  passport.use(
    "googleToken",
    new GooglePlusTokenStrategy(
      {
        clientID: config.oauth.google.clientId,
        clientSecret: config.oauth.google.secretKey,
        passReqToCallback: true,
      },
      userOauth
    )
  );

  return {
    localOauth: passport.authenticate("localToken", { session: false }),
    googleOauth: passport.authenticate("googleToken", { session: false }),
    userJWT: passport.authenticate("userStrategy", { session: false }),
    organizationJWT: passport.authenticate("organizationStrategy", { session: false }),
  };
};

export default makePassportInit;
