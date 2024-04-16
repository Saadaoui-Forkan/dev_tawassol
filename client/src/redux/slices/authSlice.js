import { createSlice } from "@reduxjs/toolkit";

const userInfo = JSON.parse(localStorage.getItem("user"))
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("user") ? userInfo : null,
    loading: false
  },
  reducers: {
    setCredentials(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
    setLoading(state) {
      state.loading = true
    },
    clearLoading(state) {
      state.loading = false
    }
  },
});

const authReducer = authSlice.reducer;
const authActions = authSlice.actions;

export { authReducer, authActions }
