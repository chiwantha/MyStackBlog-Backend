import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
// import routes
import authRoutes from "./routes/auth.js";
import blogRoutes from "./routes/blog.js";
import uploadRoutes from "./routes/upload.js";
import userRoutes from "./routes/user.js";
import galleryRoutes from "./routes/gallery.js";
import commentRoutes from "./routes/comment.js";

const app = express();

//use middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: "http://192.168.8.101:5173",
  })
);
app.use(cookieParser());

app.use("/server/auth/", authRoutes);
app.use("/server/blog/", blogRoutes);
app.use("/server/upload/", uploadRoutes);
app.use("/server/user/", userRoutes);
app.use("/server/gallery/", galleryRoutes);
app.use("/server/comment/", commentRoutes);

app.listen(8800, () => {
  console.log("Server Working ...");
});
