const { check } = require("express-validator");

const educationValidator = [
  check("school", "School is required").notEmpty(),
  check("degree", "Degree is required").notEmpty(),
  check("fieldofstudy", "Field of study is required").notEmpty(),
  check("from", "From date is required").notEmpty(),
];

module.exports = educationValidator;