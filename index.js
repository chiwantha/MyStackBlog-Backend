import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
// import routes
import authRoutes from "./routes/auth.js";

const app = express();

//use middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/server/auth/", authRoutes);

app.listen(8800, () => {
  console.log("Server Working ...");
});
