import express from "express";
import {
  NewBlog,
  category,
  loadLatest,
  loadSnigle,
  loadfeed,
} from "../controllers/blogs.js";

const routes = express.Router();

routes.get("/latest", loadLatest);
routes.get("/feed", loadfeed);
routes.get("/category", category);
routes.post("/new", NewBlog);
routes.get("/single", loadSnigle);

export default routes;
