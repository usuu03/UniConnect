/*
 * Filename: dbConfig.js
 * Author: Usu Edeaghe
 * Date: Decemeber 27, 2023
 * Description: File which connects to the Cloud Hosted Database
 *
 */
require("dotenv").config({ path: __dirname + "/../.env" });
const mysql2 = require("mysql2");

const db = mysql2.createConnection({
  host: process.env.DB_HOST, // Your database host
  user: process.env.DB_USER, // Your database username
  password: process.env.DB_PASSWORD, // Your database password
  database: process.env.DB_DATABASE, // Your database name
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to the database");
  }
});

module.exports = db;
