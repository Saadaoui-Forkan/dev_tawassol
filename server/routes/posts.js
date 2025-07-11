const express = require("express");
const postRouter = express.Router();
const protect = require("../middleware/authMiddleware");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const Post = require("../models/Post");
const checkObjectId = require("../middleware/checkObjectId");
const { validatePost, validateComment } = require("../validations/postValidator");
const validateRequest = require("../middleware/validateRequest");
const { createPost, getPosts, getPostById, deletePost, unlikePost, addComment, deleteComment, likePost } = require("../controllers/postController");

// api/posts
// Create a post
postRouter.post('/', protect, validatePost, validateRequest, createPost)

// api/posts
// all posts
postRouter.get('/', protect, getPosts)

// api/posts/:id
// @desc    Get Post By Id
postRouter.get("/:id", protect, checkObjectId("id"), getPostById);

// api/posts/:id
// Delete a post
postRouter.delete("/:id", protect, checkObjectId("id"), deletePost);

// api/posts/like/:id
// Like a post
postRouter.put("/like/:id", protect, checkObjectId("id"), likePost);

// api/posts/unlike/:id
// Unlike a post
postRouter.put("/unlike/:id", protect, checkObjectId("id"), unlikePost);

// api/posts/comment/:id
// Comment a post
postRouter.post(
  '/comment/:id',
  protect,
  checkObjectId('id'),
  validateComment,
  validateRequest,
  addComment
);

// api/posts/comment/:id/:comment_id
// Delete a comment
postRouter.delete(
  "/comment/:id/:comment_id",
  protect,
  checkObjectId("id"),
  checkObjectId("comment_id"),
  deleteComment
);

module.exports = postRouter;
