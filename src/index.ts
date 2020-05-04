import express from "express";
import config from './config'
import passport from "passport";
import passportInit from "./passport/index";
import makeRoutes from "./routes/index";
import cookieParser from "cookie-parser";
import cors from 'cors'

const makeServer = () => {
  const app = express();
  app.disable("x-powered-by");
  app.use(passport.initialize());
  app.use(cookieParser(config.cookieKey))
  app.use(express.json());
  app.use(cors())
  
  const auth = passportInit();
  const router = express.Router();
  const routes = makeRoutes(router, auth);
  app.use("/v1", routes);

  return app;
};

export default makeServer;
