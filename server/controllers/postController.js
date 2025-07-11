const Post = require("../models/Post");
const User = require("../models/User");

// Create new post
const createPost = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    const newPost = new Post({
      text: req.body.text,
      name: user.name,
      avatar: user.avatar,
      user: req.user.id,
    });

    const post = await newPost.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Get all posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Get single post by ID
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ msg: "Post Not Found" });
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Delete post
const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ msg: "Post not found" });
    if (post.user.toString() !== req.user.id)
      return res.status(401).json({ msg: "User not authorized" });

    await post.deleteOne();
    res.json({ msg: "Post removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Like post
const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.likes.some((like) => like.user.toString() === req.user.id))
      return res.status(400).json({ msg: "Post already liked" });

    post.likes.unshift({ user: req.user.id });
    await post.save();
    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Unlike post
const unlikePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.some((like) => like.user.toString() === req.user.id))
      return res.status(400).json({ msg: "Post not liked yet" });

    post.likes = post.likes.filter(
      (like) => like.user.toString() !== req.user.id
    );
    await post.save();
    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Add comment
const addComment = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    const post = await Post.findById(req.params.id);

    const newComment = {
      comment: req.body.comment,
      name: user.name,
      avatar: user.avatar,
      user: req.user.id,
    };

    post.comments.unshift(newComment);
    await post.save();
    res.json(post.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Delete comment
const deleteComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    const comment = post.comments.find(
      (c) => c.id === req.params.comment_id
    );
    if (!comment) return res.status(404).json({ msg: "Comment not found" });

    if (comment.user.toString() !== req.user.id)
      return res.status(401).json({ msg: "User not authorized" });

    post.comments = post.comments.filter(
      (c) => c.id !== req.params.comment_id
    );
    await post.save();
    res.json(post.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  deletePost,
  likePost,
  unlikePost,
  addComment,
  deleteComment,
};