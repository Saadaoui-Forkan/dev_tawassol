import { createSlice } from "@reduxjs/toolkit";

const userInfo = JSON.parse(localStorage.getItem("user"))
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("user") ? userInfo : null,
  },
  reducers: {
    setCredentials(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
  },
});

const authReducer = authSlice.reducer;
const authActions = authSlice.actions;

export { authReducer, authActions }
