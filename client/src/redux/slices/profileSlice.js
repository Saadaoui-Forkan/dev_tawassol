import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: [],
    loading: false, 
    isProfileCreated: false,
  },
  reducers: {
    setProfile(state, action) {
        state.profile = action.payload
    },
    setLoading(state) {
        state.loading = true
    },
    clearLoading(state) {
        state.loading = false
    },
    setIsProfileCreated(state) {
        state.isProfileCreated = true;
        state.loading = false
    },
    clearIsProfileCreated(state) {
        state.isProfileCreated = false;
    },
    addExperience(state, action) {
      state.profile.experience = action.payload
    }
  },
});

const profileReducer =profileSlice.reducer;
const profileActions = profileSlice.actions;

export { profileReducer, profileActions }