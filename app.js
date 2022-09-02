import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

const port = process.env.PORT || 5000 ;

mongoose
  .connect(
    "mongodb+srv://admin:wNbFztSsYnWKzd0o@cluster0.w4jyodm.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => app.listen(port))
  .then(() =>
    console.log(`Connected TO Database and Listening TO Localhost -${port} `)
  )
  .catch((err) => console.log(err));