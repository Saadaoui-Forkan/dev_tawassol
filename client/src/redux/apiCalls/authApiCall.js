import { alertActions } from "../slices/alertSlice";
import { authActions } from "../slices/authSlice";
import axios from "axios";

// Login User
export function loginUser(user) {
  return async (dispatch, getState) => {
    //getState: get state from store
    try {
      const { data } = await axios.post("http://localhost:5000/api/auth", user);
      dispatch(authActions.setCredentials(data));
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      if (error) {
        const errors = error?.response?.data.errors;
        errors?.forEach((err) => {
          dispatch(alertActions.createAlert(err.msg));
          dispatch(alertActions.clearAlert(err.id));
        });
      }
    }
  };
}

// Register User
export function registerUser(user) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/users",
        user
      );
      dispatch(authActions.setCredentials(data));
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      const errors = error?.response?.data.errors;
      errors?.forEach((err) => {
        dispatch(alertActions.createAlert(err.msg));
        dispatch(alertActions.clearAlert(err.id));
      });
    }
  };
}

// Logout User
export function logoutUser() {
  return (dispatch) => {
    dispatch(authActions.logout());
    localStorage.removeItem("user");
  };
}
