const Profile = require("../models/Profile");
const User = require("../models/User");

// @route   Get api/profile/me
// @desc    Get current users profile
// @access  Private
const getMyProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate("user", ["name", "avatar"]);
    if (!profile) return res.status(400).json({ msg: "There is no profile for this user" });
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @route   POST api/profile
// @desc    Create or Update a user profile
// @access  Private
const createOrUpdateProfile = async (req, res) => {
  const {
    company, website, location, bio, status,
    githubusername, skills, youtube, facebook,
    twitter, instagram, linkedin
  } = req.body;

  const profileFields = {
    user: req.user.id,
    company, website, location, bio, status, githubusername,
    skills: Array.isArray(skills) ? skills : skills.split(",").map(skill => skill.trim()),
    social: { youtube, twitter, facebook, linkedin, instagram }
  };

  try {
    let profile = await Profile.findOne({ user: req.user.id });

    if (profile) {
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );
      return res.json(profile);
    }

    profile = new Profile(profileFields);
    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @route  GET api/profile
// @desc   Get all profiles
// @access Public
const getAllProfiles = async (_, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "avatar"]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @desc   Get profile by user ID
// @route  GET /api/profile/user/:user_id
// @access Public
const getProfileByUserId = async (req, res) => {
  const userId = req.params.user_id;

  try {
    const profile = await Profile.findOne({ user: userId }).populate("user", [
      "name",
      "avatar",
    ]);

    if (!profile) {
      return res.status(400).json({ msg: "Profile not found" });
    }

    return res.json(profile);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ msg: "Server error" });
  }
};

// @route  DELETE api/profile
// @desc   Delete Profile, User & Post
// @access Private
const deleteProfileAndUser = async (req, res) => {
  try {
    // Delete all posts by the user
    await Post.deleteMany({ user: req.user.id });

    // Delete the user's profile
    await Profile.findOneAndRemove({ user: req.user.id });

    // Delete the user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: "User, profile, and posts deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @route   PUT api/profile/experience
// @desc    Add a profile experience
// @access  Private
const addExperience = async (req, res) => {
  const { title, company, location, from, to, current, description } = req.body;
  const newExp = { title, company, location, from, to, current, description };

  try {
    const profile = await Profile.findOne({ user: req.user.id });
    profile.experience.unshift(newExp);
    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @route   DELETE api/profile/experience/:exp_id
// @desc    Delete experience from profile
// @access  Private
const deleteExperience = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    profile.experience = profile.experience.filter(exp => exp.id !== req.params.exp_id);
    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @route   PUT api/profile/education
// @desc    Add a profile education
// @access  Private
const addEducation = async (req, res) => {
  const { school, degree, fieldofstudy, from, to, current, description } = req.body;
  const newEducation = { school, degree, fieldofstudy, from, to, current, description };

  try {
    const profile = await Profile.findOne({ user: req.user.id });
    profile.education.unshift(newEducation);
    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @route   DELETE api/profile/education/:educ_id
// @desc    Delete education from profile
// @access  Private
const deleteEducation = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    profile.education = profile.education.filter(edu => edu.id !== req.params.educ_id);
    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// @route    GET api/profile/github/:username
// @desc     Get user repos from Github
// @access   Public
const getGithubRepos = (req, res) => {
  const options = {
    uri: `https://api.github.com/users/${req.params.username}/repos?per_page=5&sort=created:asc&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_SECRET}`,
    method: "GET",
    headers: { "user-agent": "node.js" },
  };

  request(options, (error, response, body) => {
    if (error) console.error(error);

    if (response.statusCode !== 200) {
      return res.status(404).json({ msg: "No GitHub profile found" });
    }

    res.json(JSON.parse(body));
  });
};

module.exports = {
  getMyProfile,
  createOrUpdateProfile,
  getAllProfiles,
  getProfileByUserId,
  deleteProfileAndUser,
  addExperience,
  deleteExperience,
  addEducation,
  deleteEducation,
  getGithubRepos,
};