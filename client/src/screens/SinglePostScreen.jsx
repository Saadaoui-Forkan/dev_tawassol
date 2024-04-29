import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSinglePost } from "../redux/apiCalls/postsApiCalls";
import { Oval } from "react-loader-spinner";
import Button from "../components/utils/Button";
import moment from "moment";
import Message from "../components/utils/Message";
import Textarea from "../components/utils/Textarea";

function SinglePostScreen() {
  const [comment, setComment] = useState("");

  const { postId } = useParams();
  const dispatch = useDispatch();

  const { posts, loading } = useSelector((state) => state.post);
  console.log(posts);

  useEffect(() => {
    dispatch(getSinglePost(postId));
  }, [dispatch, postId]);

  const handleCommentPost = () => {
    console.log("first");
  };

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
          // label="Create a post"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          id="post"
        />
        <div className="mt-[-20px]">
            <Button type="button" onClick={handleCommentPost} secondaryBtn>
            Submit
            </Button>
        </div>

      </div>
    </div>
  );
}

export default SinglePostScreen;
