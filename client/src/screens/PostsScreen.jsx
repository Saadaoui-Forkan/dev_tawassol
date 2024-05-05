import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, dislikePost, getPosts, likePost, removePost } from "../redux/apiCalls/postsApiCalls";
import Title from "../components/utils/Title";
import Textarea from "../components/utils/Textarea";
import Button from "../components/utils/Button";
import { Oval } from "react-loader-spinner";
import moment from "moment";
import { Link } from "react-router-dom";

function PostsScreen() {
  const [text, setText] = useState("");

  const data = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleCreatePost = () => {
    dispatch(createPost({ text }));
    setText("");
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const handleRemovePost = (postId) => {
    dispatch(removePost(postId))
  }

  const handleLikePost = (postId) => {
    dispatch(likePost(postId))
  }

  const handleDislikePost = (postId) => {
    dispatch(dislikePost(postId))
  }

  if (data.loading) {
    return (
      <div className="h-[90vh] w-full flex items-center justify-center">
        <Oval
          height={120}
          width={120}
          color="#86198f"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#d8b4fe"
          strokeWidth={3}
          strokeWidthSecondary={3}
        />
      </div>
    );
  }

  return (
    <div className="mt-14">
      <Title>Posts</Title>
      <p className="ml-4 text-lg text-zinc-800 my-4">
        Welcome to the community
      </p>
      <Textarea
        label="Create a post"
        value={text}
        onChange={(e) => setText(e.target.value)}
        id="post"
      />
      <div className="mt-[-25px] ml-6">
        <Button type="button" onClick={handleCreatePost} secondaryBtn>
          Submit
        </Button>
      </div>
      <>
        {data?.posts &&
          Array.isArray(data.posts) &&
          data.posts.map((post) => (
            <div
              className="border border-zinc-300 my-2 mx-4 flex items-center justify-between"
              key={post?._id}
            >
              <div className="m-4 w-1/3 sm:w-2/12 flex flex-col items-center">
                <img
                  src={post?.avatar}
                  className="rounded-full w-10 h-10 sm:w-20 sm:h-20"
                  alt={post?.name}
                />
                <h2 className="font-bold font-roboto text-zinc-800 text-sm">
                  {post?.name}
                </h2>
              </div>
              <div className="flex flex-col w-2/3 sm:w-10/12 sm:ml-8 mx-2">
                <p className="text-md">{post.text}</p>
                <span className="text-xs font-bold my-2">
                  Posted on: {moment(post?.date).format("DD MMM YYYY")}
                </span>
                <div className="flex flex-wrap mb-2">
                  <button
                    className={`bg-zinc-200 p-[5px] sm:px-2 sm:py-[5px] mb-2 flex items-center ${
                      user.id === post.user ? "cursor-not-allowed" : ""
                    }`}
                    type="button"
                    onClick={() => handleLikePost(post?._id)}
                  >
                    <i className="fa-solid fa-thumbs-up text-zinc-500 text-sm sm:text-md"></i>
                    <span className="ml-2 text-xs">{post?.likes.length}</span>
                  </button>
                  <button
                    className={`bg-zinc-200 p-[5px] sm:px-2 sm:py-[5px] mx-2 mb-2 ${
                      user.id === post.user ? "cursor-not-allowed" : ""
                    }`}
                    type="button"
                    onClick={() => handleDislikePost(post?._id)}
                  >
                    <i className="fa-solid fa-thumbs-down text-zinc-500 text-sm sm:text-md"></i>
                  </button>

                  <Link to={`${post?._id}`}>
                  <button
                    className="bg-emerald-600 p-[5px] sm:px-2 sm:py-[5px] flex items-center mr-2 mb-2"
                    type="button"
                  >
                    <i className="fa-solid fa-comment text-white text-sm sm:text-md"></i>
                    <span className="ml-2 text-xs text-white font-bold">
                      {post?.comments.length}
                    </span>
                  </button>
                  </Link>
                  {user.id === post.user && (
                    <button
                      className="bg-red-600 p-[5px] sm:px-2 sm:py-[5px] mb-2"
                      type="button"
                      onClick={() => handleRemovePost(post?._id)}
                    >
                      <i className="fa-solid fa-xmark text-white text-sm sm:text-md"></i>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
      </>
    </div>
  );
}

export default PostsScreen;
