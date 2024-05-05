import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { commentPost, deleteComment, getSinglePost } from "../redux/apiCalls/postsApiCalls";
import { Oval } from "react-loader-spinner";
import Button from "../components/utils/Button";
import moment from "moment";
import Message from "../components/utils/Message";
import Textarea from "../components/utils/Textarea";
import { postActions } from "../redux/slices/postSlice";

function SinglePostScreen() {
  const [comment, setComment] = useState("");

  const { postId } = useParams();
  const dispatch = useDispatch();

  const { posts, loading } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);
  console.log(posts)

  useEffect(() => {
    dispatch(getSinglePost(postId));
  }, [dispatch, postId]);

  const handleCommentPost = () => {
    dispatch(commentPost(postId, { comment }));
    dispatch(postActions.addComment())
    setComment("");
  };

  const handleRemoveComment = (id, commentId) => {
    dispatch(deleteComment(id, commentId))
    dispatch(postActions.removeComment(commentId))
  }

  if (loading) {
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
    <div className="mx-4 mt-14">
      <Link to="/posts">
        <Button lightBtn>Back to posts</Button>
      </Link>
      <div
        className="border border-zinc-300 my-2 mx-4 flex items-center justify-between"
        key={posts?._id}
      >
        <div className="m-4 w-1/3 sm:w-2/12 flex flex-col items-center">
          <img
            src={posts?.avatar}
            className="rounded-full w-10 h-10 sm:w-20 sm:h-20"
            alt={posts?.name}
          />
          <h2 className="font-bold font-roboto text-zinc-800 text-sm">
            {posts?.name}
          </h2>
        </div>
        <div className="flex flex-col w-2/3 sm:w-10/12 sm:ml-8 mx-2">
          <p className="text-md">{posts.text}</p>
          <span className="text-xs font-bold my-2">
            posted on: {moment(posts?.date).format("DD MMM YYYY")}
          </span>
        </div>
      </div>
      <Message>Leave a comment ...</Message>
      <div className="mt-[-20px]">
        <Textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          id="post"
        />
        <div className="mt-[-20px]">
          <Button
            type="button"
            onClick={() => handleCommentPost()}
            secondaryBtn
          >
            Submit
          </Button>
        </div>
        {posts?.comments?.length > 0 && (
          <>
            <p className="p-2 ml-4 text-lg text-zinc-800 my-4 border-zinc-400 border-t-2 border-b-2 font-bold font-roboto">
              Comments
            </p>
            {posts?.comments.map((comment) => (
              <div
                className="relative border border-zinc-300 my-2 mx-2 sm:mx-4 flex items-center justify-between"
                key={comment?._id}
              >
                <div className="m-2 sm:m-4 w-1/3 sm:w-2/12 flex flex-col items-center">
                  <img
                    src={comment?.avatar}
                    className="rounded-full w-8 h-8 sm:w-14 sm:h-14"
                    alt={comment?._id}
                  />
                  <h2 className="font-bold font-roboto text-zinc-800 text-sm">
                    {comment?.name}
                  </h2>
                </div>
                <div className="flex flex-col w-2/3 sm:w-10/12 sm:ml-8 mx-2">
                  <p className="text-md">{comment?.comment}</p>
                  <span className="text-xs my-2">
                    commented on: {moment(comment?.date).format("DD MMM YYYY")}
                  </span>
                  {comment?.user === user?.id && (<button
                    className="absolute top-1 left-1 w-4 h-4 sm:w-6 sm:h-6 bg-red-600 flex items-center justify-center"
                    type="button"
                    onClick={() => handleRemoveComment(postId ,comment?._id)}
                  >
                    <i className="fa-solid fa-xmark text-white text-sm sm:text-md"></i>
                  </button>)}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default SinglePostScreen;
