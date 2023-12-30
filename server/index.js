/*
 * Filename: index.js
 * Author: Usu Edeaghe
 * Date: Decemeber 27, 2023
 * Description:
 *
 */

require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

const app = express();

const cookieParser = require("cookie-parser");

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//Routes
const userRoutes = require("./routes/userRoutes");

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/users", userRoutes);

app.listen(process.env.PORT, () => {
  console.log("Connected to port " + process.env.PORT);
});
