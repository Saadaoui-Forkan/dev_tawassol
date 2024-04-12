import axios from "axios"
import { PROFILE_URL } from "../../constants"
import { profileActions } from "../slices/profileSlice"

// Create Profile
const user = localStorage.getItem("user");

export function createProfile(newProfile) {
    return async(dispatch, getState) => {
        try {
            dispatch(profileActions.setLoading())
            await axios.post(PROFILE_URL, newProfile, {
                headers: {
                    'x-auth-token': getState().user?.token
                }
            })
            dispatch(profileActions.setIsProfileCreated())
            setTimeout(
              () => dispatch(profileActions.clearIsProfileCreated()),
              2000
            );
        } catch (error) {
            console.log(error)
        }
    }
}