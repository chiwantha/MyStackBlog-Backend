import express from "express";
import {
  delComment,
  loadComments,
  newComment,
} from "../controllers/comments.js";

const routes = express.Router();

routes.get("/load", loadComments);
routes.post("/new", newComment);
routes.post("/delete", delComment);

export default routes;
