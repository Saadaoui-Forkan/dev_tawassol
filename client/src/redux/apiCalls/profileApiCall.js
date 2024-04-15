import axios from "axios"
import { PROFILE_URL } from "../../constants"
import { profileActions } from "../slices/profileSlice"
import { alertActions } from "../slices/alertSlice"

// Create Profile
export function createProfile(newProfile) {
    return async(dispatch, getState) => {
        try {
            dispatch(profileActions.setLoading())
            const { data } = await axios.post(PROFILE_URL, newProfile, {
                headers: {
                    'x-auth-token': getState().auth.user.token
                }
            })
            dispatch(profileActions.setProfile(data))
            dispatch(profileActions.setIsProfileCreated())
            setTimeout(
              () => dispatch(profileActions.clearIsProfileCreated()),
              2000
            );
        } catch (error) {
            const err = error.response?.data.msg
            if (err) {
                dispatch(alertActions.createAlert(err));
                dispatch(alertActions.clearAlert(err));
            }

            const errors = error.response.data.errors 
            errors?.forEach((err) => {
                dispatch(alertActions.createAlert(err.msg));
                dispatch(alertActions.clearAlert(err.id));
            });
            dispatch(profileActions.clearLoading())
        }
    }
}