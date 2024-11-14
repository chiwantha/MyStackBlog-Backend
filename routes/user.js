import express from "express";
import { profile, loadlist, loadtop } from "../controllers/users.js";

const routes = express.Router();

routes.get("/profile", profile);
routes.get("/list", loadlist);
routes.get("/loadtop", loadtop);

export default routes;
