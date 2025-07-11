const express = require("express");
const profileRouter = express.Router();
const protect = require("../middleware/authMiddleware");
const checkObjectId = require("../middleware/checkObjectId");
const {
  getMyProfile,
  createOrUpdateProfile,
  deleteEducation,
  getGithubRepos,
  getAllProfiles,
  getProfileByUserId,
  deleteProfileAndUser,
  addEducation,
  deleteExperience,
} = require("../controllers/profileController");
const profileValidator = require("../validations/profileValidator");
const validateRequest = require("../middleware/validateRequest");
const experienceValidator = require("../validations/experienceValidator");
const educationValidator = require("../validations/educationValidator")

// GET current user profile
// /api/profile/me
profileRouter.get("/me", protect, getMyProfile);

// /api/profile
// Create or Update a user profile
profileRouter.post(
  "/",
  protect,
  profileValidator,
  validateRequest,
  createOrUpdateProfile
);

// api/profile
// Get all profiles
profileRouter.get("/", getAllProfiles);

// api/profile/user/:user_id
// Get profile by user id
profileRouter.get("/user/:user_id", checkObjectId("user_id"), getProfileByUserId);

// api/profile
// Delete Profile, User & Post
profileRouter.delete("/", protect, deleteProfileAndUser);

// api/profile/experience
// Add a profile experience
profileRouter.put(
  "/experience",
  protect,
  experienceValidator,
  validateRequest,
  addEducation
);

// api/profile/experience/:exp_id
// experience from profile
profileRouter.put("/experience:exp_id", protect, deleteExperience);

// PUT api/profile/education
// Add a profile education
profileRouter.put(
  "/education",
  protect,
  educationValidator,
  validateRequest,
  addEducation
);

// api/profile/education/:educ_id
// Delete education from profile
profileRouter.delete("/education/:educ_id", protect, deleteEducation);

// api/profile/github/:username
// Get user repos from Github
profileRouter.get("/github/:username", getGithubRepos);

module.exports = profileRouter;
