/*
 * Filename: userRoutes.js
 * Author: Usu Edeaghe
 * Date: Decemeber 27, 2023
 * Description: File which contains the REST API endpoints
 *
 */
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControllers");
const { authentication } = require("../middleware/authentication");

/**
 * @route GET /api/user/all
 * @description Retrieves all Users
 * @access Public
 */
router.get("/all", userController.getAllUsers);

/**
 * @route GET /api/user/:id
 * @description Retrieves User by ID
 * @access Public
 */
router.get("/:id", userController.getUserById);

/**
 * @route GET /api/user/register
 * @description Adds user to the database
 * @access Public
 */
router.post("/register", userController.register);

/**
 * @route GET /api/user/login
 * @description Checks if user is in the database and logs them in
 * @access Public
 */
router.post("/login", userController.login);

/**
 * @route GET /api/user/update-user
 * @description Updates the user details and saves it to the database
 * @access Private - needs to be authenticated
 */
router.put("/update-user", authentication, userController.updateUser);

/**
 * @route GET /api/user/delete-user
 * @description Deletes a user from the Database
 * @access Private - needs to be authenticated
 */
router.delete("delete-user", authentication, userController.deleteUser);

module.exports = router;
