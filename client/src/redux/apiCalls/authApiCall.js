import { authActions } from "../reducers/authSlice"
import axios from 'axios'

// Login User
export function loginUser(user) {
    return async(dispatch, getState) => { //getState: get state from store
        try {
           const { data } = await axios.post("http://localhost:5000/api/auth", user) 
           dispatch(authActions.login(data))
           localStorage.setItem("user", JSON.stringify(data))
           console.log({data})
        } catch (error) {
            console.log({error})
        }
    }
}