import express from "express";
import { uploadBlogImage, uploadProfileImage } from "../controllers/uploads.js";

const routes = express.Router();

routes.post("/Blogimage", uploadBlogImage.single("file"), (req, res) => {
  const file = req.file;
  return res.status(200).json(file.filename);
});

routes.post("/ProfileImage", uploadProfileImage.single("file"), (req, res) => {
  const file = req.file;
  return res.status(200).json(file.filename);
});

export default routes;
