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
      dispatch(postActions.getPosts(data))
      dispatch(postActions.clearLoading())
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
}

// Get Single Post
export function getSinglePost(post) {
  return async (dispatch, getState) => {
    try {
      dispatch(postActions.setLoading());
      const { data } = await axios.get(`${POSTS_URL}/${post}`, {
        headers: {
          "x-auth-token": getState().auth.user.token,
        },
      });
      dispatch(postActions.getPosts(data))
      dispatch(postActions.clearLoading())
      // console.log(data);
    } catch (error) {
      console.log(error);
      dispatch(postActions.clearLoading())
    }
  };
}

// Create A Post
export function createPost(post) {
  return async (dispatch, getState) => {
    try {
      dispatch(postActions.setLoading());
      const data = await axios.post(`${POSTS_URL}`, post, {
        headers: {
          "x-auth-token": getState().auth.user.token,
        },
      });
      dispatch(postActions.setPosts(data.data))
      dispatch(postActions.clearLoading())
      console.log(data);
    } catch (error) {
      console.log(error);
      dispatch(postActions.clearLoading())
    }
  };
}

// Delete A Post
export function removePost(postId) {
  return async (dispatch, getState) => {
    try {
      dispatch(postActions.setLoading());
      await axios.delete(`${POSTS_URL}/${postId}`, {
        headers: {
          "x-auth-token": getState().auth.user.token,
        },
      });
      dispatch(postActions.deletePost(postId))
      dispatch(postActions.clearLoading())
    } catch (error) {
      console.log(error);
      dispatch(postActions.clearLoading())
    }
  };
}
