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
 *
 */
const getAllUsers = async (req, res) => {
  try {
    const query = "SELECT * FROM users";
    const [results] = await db.promise().query(query);

    if (results.length === 0) {
      return res.status(404).json({ message: "No Users in the Database" });
    }

    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * @function getUserById
 * @description Fetches user by ID from the database.
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
 */
const register = async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      firstName,
      lastName,
      academicInformation,
      interests,
    } = req.body;

    //Hashing password
    const hashPassword = await bcrypt.hash(password, 10);

    const query =
      "INSERT INTO users (username, email, password, firstName, lastName, academicInformation, interests) VALUES (?, ?, ?, ?, ?, ?, ?)";

    const [results] = await db
      .promise()
      .query(query, [
        username,
        email,
        hashPassword,
        firstName,
        lastName,
        academicInformation,
        interests,
      ]);

    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server" });
  }
};

/**
 * @function login
 * @description Logs user into system
 *
 */
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    //Finding the User by their username
    const query = "SELECT * FROM users WHERE username = ?";
    const [results] = await db.promise().query(query, [username]);

    if (results === 0) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const user = results[0];

    //Checking the password by using bcrypt
    const match = await bcrypt.compare(password, user.password);

    if (match) {
      //Generating a JWT token if password matches
      const token = jwt.sign({ id: user.userID }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1h",
      });
      res.status(200).json({ message: "Login successful", token, user });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Login Error", error);
    if (
      error instanceof jwt.JsonWebTokenError ||
      error instanceof jwt.TokenExpiredError
    ) {
      res.status(401).json({ message: "Invalid token" });
    } else {
      res.status(500).json({ message: `Login Unsuccessful: ${error.message}` });
    }
  }
};

/**
 * @function updateUser
 * @description Updates the User Details
 */
const updateUser = async (req, res) => {
  try {
  } catch (error) {}
};

/**
 * @function deleteUser
 * @description Delete a User from the Database
 */
const deleteUser = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  getAllUsers,
  getUserById,
  register,
  login,
  updateUser,
  deleteUser,
};
