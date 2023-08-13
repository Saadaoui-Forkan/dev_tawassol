const express = require('express')
const router = express.Router()
const protect = require('../../middleware/authMiddleware')
const { check, validationResult } = require('express-validator')

const User = require('../../models/User')
const Profile = require('../../models/Profile')
const Post = require('../../models/Post')

// @route   Get api/posts
// @desc    Create a post
// @access  Private
router.post('/', [protect, [
    check('text', 'Text is required').not().isEmpty()
]], async(req, res) => {
    // Post Validation
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    const user = await User.findById(req.user.id);

    // Create a New Post
    const newPost = new Post({
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
    })

    const post = newPost.save();
    res.json(post)
})

module.exports = router;
