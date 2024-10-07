import express from "express";
import { upload } from "../controllers/upload.js";

const routes = express.Router();

routes.post("/image", upload.single("file"), (req, res) => {
  const file = req.file;
  return res.status(200).json(file.filename);
});

export default routes;
