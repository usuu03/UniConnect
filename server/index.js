/*
 * Filename: index.js
 * Author: Usu Edeaghe
 * Date: Decemeber 27, 2023
 * Description:
 *
 */

require("dotenv").config();

const express = require("express");

const app = express();

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
