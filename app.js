const express = require("express");
const mongoose = require("mongoose");
const blogRouter = require( "./routes/blog-routes.js");
const router = require( "./routes/user-routes.js");
const cors = require( "cors");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user", router);
app.use("/api/blog", blogRouter);

const port = process.env.PORT || 5000 ;

mongoose
  .connect(
    "mongodb+srv://admin:wNbFztSsYnWKzd0o@cluster0.w4jyodm.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  )
  .then(() => app.listen(port))
  .then(() =>
    console.log(`Connected TO Database and Listening TO Localhost -${port} `)
  )
  .catch((err) => console.log(err));


module.exports = app;
