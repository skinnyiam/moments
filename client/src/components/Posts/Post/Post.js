import React from "react";
import moment from "moment";
import FcLike from "../../icons/like";
import Delete from "../../icons/delete";
import Dots from "../../icons/dots";
import { Tooltip } from "@chakra-ui/react";
import {useDispatch} from "react-redux"
import { deletePost,likePost } from "../../../actions/post";
const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch()
  return (
    <div className="bg-pink-100   mt-6 rounded-xl ml-8 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-25">
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg w-full h-64" src={post.selectedFile} alt="" />

        <div className="flex justify-between">
          <p class=" p-2 text-sm font-normal text-gray-700 dark:text-gray-400">
            {moment(post.createdAt).fromNow()}
          </p>
          <button
            onClick={() => setCurrentId(post._id)}
            className="text-xl text-white pr-4"
          >
            <Dots />
          </button>
        </div>
        <p class="mb-1 mt-1  font-normal text-white text-xl pl-2">
          {post.title}
        </p>
        <h1 class="mb-1 font-thin text-white text-md pl-2">{post.message}</h1>
        <div class="p-2">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {post.creator}
          </h5>

          <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">
            {post.tags.map((tag) => {
              return <p>{`#${tag}`}</p>;
            })}
          </p>
        </div>
        <div className="flex mb-4 justify-between w-full">
          {/* <Tooltip label="Like!" placement="top" aria-label="A tooltip"> */}
          <button onClick={() => {dispatch(likePost(post._id ))}} className="pl-2 text-white flex justify-center items-center text-xl">
            <FcLike /> {<span className="ml-2">{post.like}</span> }
         
          </button>
          {/* </Tooltip> */}
         
          <button onClick={() => {dispatch(deletePost(post._id))}} className="text-white pr-2 text-xl">
            <Delete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
