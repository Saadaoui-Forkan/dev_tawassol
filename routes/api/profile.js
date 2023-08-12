const express = require('express')
const router = express.Router()
const protect = require('../../middleware/authMiddleware')

const User = require('../../models/User')
const Profile = require('../../models/Profile')

// @route   Get api/profile/me
// @desc    Get current users profile 
// @access  Private
router.get('/me',protect ,async(req, res) => {
    try {
       const profile = await Profile.findOne({ user: req.user.id })
        .populate('user', ['name', 'avatar']) 

        if (!profile) {
            res.status(400).json({ msg: 'There is no profile for this user' })
        }

        res.json(profile)
        
    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error')
    }
})

module.exports = router;
