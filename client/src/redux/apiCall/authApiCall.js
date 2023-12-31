import axios from "axios";
import { alertActions } from "../slices/alertSlice";
import { authActions } from "../slices/authSlice";

// Register User
export function registerUser(user) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("api/users", user);
      dispatch(authActions.register(data));
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      const errors = error.response.data?.errors;
      errors?.forEach((el) => {
        const err = {
          id: new Date().getTime(),
          msg: el.msg,
          type: "danger",
        };
        dispatch(alertActions.setAlerts(err));
        setTimeout(() => dispatch(alertActions.removeAlert(err.id)), 3000);
      });
    }
  };
}

// Login User
export function loginUser(user) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("api/auth", user);
      dispatch(authActions.register(data));
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      const errors = error.response?.data?.errors;
      errors?.forEach((el) => {
        const err = {
          id: new Date().getTime(),
          type: "danger",
          msg: el.msg,
        };
        dispatch(alertActions.setAlerts(err));
        setTimeout(() => dispatch(alertActions.removeAlert(err.id)), 3000);
      });
    }
  };
}
