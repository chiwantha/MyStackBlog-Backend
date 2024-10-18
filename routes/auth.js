import express from "express";
import {
  register,
  login,
  logout,
  Usernamecheck,
  RstPass,
  update,
} from "../controllers/auth.js";

const routes = express.Router();

routes.post("/register", register);
routes.post("/login", login);
routes.post("/logout", logout);
routes.post("/ckeckuser", Usernamecheck);
routes.post("/rstPassword", RstPass);
routes.post("/updateUser", update);

export default routes;
