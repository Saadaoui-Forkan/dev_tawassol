import axios from "axios";
import { PROFILE_URL } from "../../constants";
import { profileActions } from "../slices/profileSlice";
import { alertActions } from "../slices/alertSlice";

// Get Profiles
export function getMyProfile() {
  return async (dispatch, getState) => {
    try {
      dispatch(profileActions.setLoading());
      const { data } = await axios.get(`${PROFILE_URL}/me`, {
        headers: {
          "x-auth-token": getState().auth.user.token,
        },
      });
      dispatch(profileActions.setProfile(data));
      dispatch(profileActions.clearLoading());
    } catch (error) {
      const err = error.response?.data.msg;
      if (err) {
        dispatch(alertActions.createAlert(err));
        dispatch(alertActions.clearAlert(err));
      }
      dispatch(profileActions.clearLoading());
    }
  };
}

// Create Profile
export function createProfile(newProfile) {
  return async (dispatch, getState) => {
    try {
      dispatch(profileActions.setLoading());
      const { data } = await axios.post(PROFILE_URL, newProfile, {
        headers: {
          "x-auth-token": getState().auth.user.token,
        },
      });
      dispatch(profileActions.setProfile(data));
      dispatch(profileActions.setIsProfileCreated());
      setTimeout(() => dispatch(profileActions.clearIsProfileCreated()), 2000);
    } catch (error) {
      console.log(error);
      const err = error.response?.data.msg;
      if (err) {
        dispatch(alertActions.createAlert(err));
        dispatch(alertActions.clearAlert(err));
      }

      const errors = error.response?.data.errors;
      errors?.forEach((err) => {
        dispatch(alertActions.createAlert(err.msg));
        dispatch(alertActions.clearAlert(err.id));
      });
      dispatch(profileActions.clearLoading());
    }
  };
}

// Add Experience
export function addAnExperience(newExperience) {
  return async (dispatch, getState) => {
    try {
      dispatch(profileActions.setLoading());
      await axios.put(`${PROFILE_URL}/experience`, newExperience, {
        headers: {
          "x-auth-token": getState().auth.user.token,
        },
      });
      dispatch(profileActions.setIsProfileCreated());
      setTimeout(() => dispatch(profileActions.clearIsProfileCreated()), 2000);
    } catch (error) {
      const err = error.response?.data.msg;
      if (err) {
        dispatch(alertActions.createAlert(err));
        dispatch(alertActions.clearAlert(err));
      }

      const errors = error.response.data.errors;
      errors?.forEach((err) => {
        dispatch(alertActions.createAlert(err.msg));
        dispatch(alertActions.clearAlert(err.id));
      });
      dispatch(profileActions.clearLoading());
    }
  };
}

// Add Education
export function addEducation(newEducation) {
  return async (dispatch, getState) => {
    try {
      dispatch(profileActions.setLoading());
      await axios.put(`${PROFILE_URL}/education`, newEducation, {
        headers: {
          "x-auth-token": getState().auth.user.token,
        },
      });
      dispatch(profileActions.setIsProfileCreated());
      setTimeout(() => dispatch(profileActions.clearIsProfileCreated()), 2000);
    } catch (error) {
      const err = error.response?.data.msg;
      if (err) {
        dispatch(alertActions.createAlert(err));
        dispatch(alertActions.clearAlert(err));
      }

      const errors = error.response.data.errors;
      errors?.forEach((err) => {
        dispatch(alertActions.createAlert(err.msg));
        dispatch(alertActions.clearAlert(err.id));
      });
      dispatch(profileActions.clearLoading());
    }
  };
}

// Remove An Experience
export function deleteExperience(expId) {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.delete(
        `${PROFILE_URL}/experience/${expId}`,
        {
          headers: {
            "x-auth-token": getState().auth.user.token,
          },
        }
      );
      dispatch(profileActions.removeExperience(data));
      // dispatch(profileActions.setProfile())
    } catch (error) {
      const errors = error.response?.data.errors;
      errors?.forEach((err) => {
        dispatch(alertActions.createAlert(err.msg));
        dispatch(alertActions.clearAlert(err.id));
      });
      dispatch(profileActions.clearLoading());
      console.log(error);
    }
  };
}

// Remove An Education
export function deleteEducation(educId) {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.delete(
        `${PROFILE_URL}/education/${educId}`,
        {
          headers: {
            "x-auth-token": getState().auth.user.token,
          },
        }
      );
      dispatch(profileActions.removeEducation(data));
      // dispatch(profileActions.setProfile())
    } catch (error) {
      const errors = error.response.data.errors;
      errors?.forEach((err) => {
        dispatch(alertActions.createAlert(err.msg));
        dispatch(alertActions.clearAlert(err.id));
      });
      dispatch(profileActions.clearLoading());
      console.log(error);
    }
  };
}
