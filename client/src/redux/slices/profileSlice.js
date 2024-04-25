import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: [],
    repos: [],
    loading: false,
    isProfileCreated: false,
  },
  reducers: {
    setProfile(state, action) {
      state.profile = action.payload;
    },
    setLoading(state) {
      state.loading = true;
    },
    clearLoading(state) {
      state.loading = false;
    },
    setIsProfileCreated(state) {
      state.isProfileCreated = true;
      state.loading = false;
    },
    clearIsProfileCreated(state) {
      state.isProfileCreated = false;
    },
    addExperience(state, action) {
      state.profile.experience = action.payload;
    },
    removeExperience(state, action) {
      state.profile.experience = state.profile.experience.filter(
        (el) => el._id !== action.payload
      );
    },
    addEducation(state, action) {
      state.profile.education = action.payload;
    },
    removeEducation(state, action) {
      state.profile.education = state.profile.education.filter(
        (el) => el._id !== action.payload
      );
    },
    addGithubRepos(state, action) {
      state.repos = action.payload
    },
  },
});

const profileReducer =profileSlice.reducer;
const profileActions = profileSlice.actions;

export { profileReducer, profileActions }