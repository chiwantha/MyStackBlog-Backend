import express from "express";
import { profile } from "../controllers/users.js";

const routes = express.Router();

routes.get("/profile", profile);

export default routes;
