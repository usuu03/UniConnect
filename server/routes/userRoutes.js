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

module.exports = router;
