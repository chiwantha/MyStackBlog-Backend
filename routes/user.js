import express from "express";
import { profile, loadlist } from "../controllers/users.js";

const routes = express.Router();

routes.get("/profile", profile);
routes.get("/list", loadlist);

export default routes;
