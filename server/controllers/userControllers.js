/*
 * Filename: userController.js
 * Author: Usu Edeaghe
 * Date: Decemeber 27, 2023
 * Description: File which contains functions to query the database
 *
 */

const db = require("../database/dbConfig");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

/**
 * @function getAllCampaigns
 * @description Fetches all users from the database.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @returns {object} JSON response with an array of campaigns.
 * @throws {object} JSON response with an error message if an error occurs.
 */
const getAllUsers = async (req, res) => {
  try {
    const query = "SELECT * FROM user";
    const [results] = await db.promise().query(query);

    if (results.length === 0) {
      return res.status(404).json({ message: "No Users in the Database" });
    }

    const users = results.map((user) => {
      (userID = user.userID), (username = user.username), (email = user.email);
    });

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllUsers,
};
