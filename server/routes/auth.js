const express = require("express");
const authRouter = express.Router();
const loginValidator = require("../validations/loginValidators");
const { loginUser } = require("../controllers/authController");
const validateRequest = require("../middleware/validateRequest");

// @route   POST api/auth
// @desc    authenticate user & get token (login user)
// @access  Public
authRouter.post('/', loginValidator, validateRequest, loginUser)

module.exports = authRouter;
