const express = require('express')
const router = express.Router()
const protect = require('../../middleware/authMiddleware')
const User = require('../../models/User')

// @route   Get api/auth
// @desc    Test route
// @access  Public
router.get('/', protect, async(req, res) =>{
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Server Error')
    }
})

module.exports = router;
