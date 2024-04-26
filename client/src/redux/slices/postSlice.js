import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    error: false,
    loading: false,
  },
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload
    },
    setLoading(state) {
      state.loading = true;
    },
    setError(state) {
      state.error = true;
    },
    clearLoading(state) {
      state.loading = false;
    },
    clearError(state) {
      state.loading = false;
    },
  },
});

const postReducer = postSlice.reducer;
const postActions = postSlice.actions;

export { postReducer, postActions };
