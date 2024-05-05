import { AUTH_URL, REGISTER_URL } from "../../constants";
import { alertActions } from "../slices/alertSlice";
import { authActions } from "../slices/authSlice";
import axios from "axios";

// Login User
export function loginUser(user) {
  return async (dispatch) => {
    try {
      dispatch(authActions.setLoading())
      const { data } = await axios.post(AUTH_URL, user);
      dispatch(authActions.setCredentials(data));
      localStorage.setItem("user", JSON.stringify(data));
      dispatch(authActions.clearLoading())
    } catch (error) {
      if (error) {
        const errors = error?.response?.data.errors;
        errors?.forEach((err) => {
          dispatch(alertActions.createAlert(err.msg));
          dispatch(alertActions.clearAlert(err.id));
        });
      }
      dispatch(authActions.clearLoading())
    }
  };
}

// Register User
export function registerUser(user) {
  return async (dispatch) => {
    try {
      dispatch(authActions.setLoading())
      const { data } = await axios.post(REGISTER_URL, user);
      dispatch(authActions.setCredentials(data));
      localStorage.setItem("user", JSON.stringify(data));
      dispatch(authActions.clearLoading())
    } catch (error) {
      const errors = error?.response?.data.errors;
      errors?.forEach((err) => {
        dispatch(alertActions.createAlert(err.msg));
        dispatch(alertActions.clearAlert(err.id));
      });
      dispatch(authActions.clearLoading())
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
