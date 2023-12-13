import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null,
  },
  reducers: {
        register(state, action) {
            state.user = action.payload
        }
  },
});

const authReducer = authSlice.reducer;
const authActions = authSlice.actions;

export {authActions, authReducer}