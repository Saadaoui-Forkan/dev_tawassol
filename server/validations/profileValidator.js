const { check } = require("express-validator");

const profileValidator = [
  check("status", "Status is required").notEmpty(),
  check("skills", "Skills is required").notEmpty(),
];

module.exports = profileValidator;