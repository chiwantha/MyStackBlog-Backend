import express from "express";
import { load } from "../controllers/galleries.js";

const routes = express.Router();

routes.get("/load", load);

export default routes;
