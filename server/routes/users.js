const express = require("express");
const userRouter = express.Router();
const registerValidator = require("../validations/registerValidator");
const { registerUser } = require("../controllers/authController");
const validateRequest = require("../middleware/validateRequest");

// @route   Post /api/users
// @desc    Register User
// @access  Public
userRouter.post("/", registerValidator, validateRequest, registerUser);

module.exports = userRouter;
