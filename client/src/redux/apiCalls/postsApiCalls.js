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
      dispatch(postActions.clearLoading())
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
      const {data} = await axios.post(`${POSTS_URL}`, post, {
        headers: {
          "x-auth-token": getState().auth.user.token,
        },
      });
      dispatch(postActions.setPosts(data))
      dispatch(postActions.clearLoading())
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
      const { data } = await axios.delete(`${POSTS_URL}/${postId}`, {
        headers: {
          "x-auth-token": getState().auth.user.token,
        },
      });
      dispatch(postActions.deletePost(data))
      dispatch(postActions.clearLoading())
    } catch (error) {
      console.log(error);
      dispatch(postActions.clearLoading())
    }
  };
}

// Like A Post
export function likePost(postId) {
  return async (dispatch, getState) => {
    try {
      dispatch(postActions.setLoading());
      const {data} = await axios.put(`${POSTS_URL}/like/${postId}`, postId, {
        headers: {
          "x-auth-token": getState().auth.user.token,
        },
      });
      dispatch(postActions.updateLike( data))
      dispatch(postActions.clearLoading())
    } catch (error) {
      const errors = error?.response?.data?.errors;
      console.log(errors);
      dispatch(postActions.clearLoading())
    }
  };
}

// DisLike A Post
export function dislikePost(postId) {
  return async (dispatch, getState) => {
    try {
      dispatch(postActions.setLoading());
      const {data} = await axios.put(`${POSTS_URL}/unlike/${postId}`, postId, {
        headers: {
          "x-auth-token": getState().auth.user.token,
        },
      });
      dispatch(postActions.updateLike(data))
      dispatch(postActions.clearLoading())
    } catch (error) {
      const errors = error?.response?.data?.errors;
      console.log(errors);
      dispatch(postActions.clearLoading())
    }
  };
}

// Comment Post
export function commentPost(postId, formData) {
  return async (dispatch, getState) => {
    try {
      dispatch(postActions.setLoading());
      const {data} = await axios.post(`${POSTS_URL}/comment/${postId}`, formData, {
        headers: {
          "x-auth-token": getState().auth.user.token,
        },
      });
      dispatch(postActions.addComment(data))
      dispatch(postActions.clearLoading())
    } catch (error) {
      const errors = error?.response?.data?.errors;
      console.log(errors);
      dispatch(postActions.clearLoading())
    }
  };
}

// Remove Comment
export function deleteComment(postId, commentId) {
  return async (dispatch, getState) => {
    try {
      dispatch(postActions.setLoading());
      await axios.delete(`${POSTS_URL}/comment/${postId}/${commentId}`, {
        headers: {
          "x-auth-token": getState().auth.user.token,
        },
      });
      dispatch(postActions.deleteComment())
      dispatch(postActions.clearLoading())
    } catch (error) {
      const errors = error?.response?.data?.errors;
      console.log(errors);
      dispatch(postActions.clearLoading())
    }
  };
}
