import { AUTH_URL, REGISTER_URL } from "../../constants";
import { alertActions } from "../slices/alertSlice";
import { authActions } from "../slices/authSlice";
import axios from "axios";

// Login User
export function loginUser(user) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(AUTH_URL, user);
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
      const { data } = await axios.post(REGISTER_URL, user);
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
