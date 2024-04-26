import { POSTS_URL } from "../../constants";
import { postActions } from "../slices/postSlice";
import axios from "axios";

// Get All Posts
export function getPosts() {
  return async (dispatch, getState) => {
    try {
      dispatch(postActions.setLoading());
      const { data } = await axios.get(`${POSTS_URL}`, {
        headers: {
          "x-auth-token": getState().auth.user.token,
        },
      });
      dispatch(postActions.setPosts(data))
      dispatch(postActions.clearLoading())
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
}
