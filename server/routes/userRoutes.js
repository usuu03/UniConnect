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

module.exports = router;
