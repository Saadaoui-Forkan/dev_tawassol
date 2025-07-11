const { check } = require("express-validator");

const experienceValidator = [
  check("title", "Title is required").notEmpty(),
  check("company", "Company is required").notEmpty(),
  check("from", "From date is required").notEmpty(),
];

module.exports = experienceValidator;