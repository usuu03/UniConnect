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
 * @function getAllUsers
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

/**
 * @function getUserById
 * @description Fetches user by ID from the database.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @returns {object} JSON response with an array of campaigns.
 * @throws {object} JSON response with an error message if an error occurs.
 */
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const query = "SELECT * FROM user WHERE userID=?";

    const [results] = await db.promise().query(query, [id]);

    if (results.length === 0) {
      return res.status(200).json({ message: "No User with that ID" });
    }

    const users = results.map((user) => {
      (username = user.username), (email = user.email);
    });

    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * @function register
 * @description Inserts new User into the database
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @returns {object} JSON response with an array of campaigns.
 * @throws {object} JSON response with an error message if an error occurs.
 */
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //Hashing password
    const hashPassword = await bcrypt.hash(password, 10);

    const query =
      "INSERT INTO user (username, email, password) VALUES (?, ?, ?)";

    const [results] = await db
      .promise()
      .query(query, [username, email, hashPassword]);

    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  register,
};
