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
      state.posts = [ action.payload, ...state.posts]
    },
    getPosts(state, action) {
      state.posts = action.payload;
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
    deletePost(state, action) {
      state.posts = state.posts.filter((item) => item._id !== action.payload._id);
    },
    updateLike(state, action) {
      state.posts = state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    },
    addComment(state, action) {
      state.posts = action.payload
    },
    removeComment(state, action) {
      state.posts.comments = state.posts.comments.filter(c => c._id !== action.payload)
    },
  },
});

const postReducer = postSlice.reducer;
const postActions = postSlice.actions;

export { postReducer, postActions };
