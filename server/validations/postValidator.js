const { check } = require("express-validator");

exports.validatePost = [check("text", "Text is required").not().isEmpty()];
exports.validateComment = [check("comment", "Comment is required").not().isEmpty()];
