// src/MainVideo.js
import React, { useState } from "react";
import Like from "../src/assets/Like.png";
import Dislike from "../src/assets/dislike.png";
import Share from "../src/assets/Share.png";
import CommentProfile from "../src/assets/Profile.png";

function MainVideo({ videoData }) {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([...comments, commentText]);
      setCommentText("");
    }
  };

  return (
    <div className="mt-5 p-8 bg-white shadow-none rounded-lg  max-w-7xl "> 
   <iframe
  src={`https://www.youtube.com/embed/${videoData.id}`}
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  className="w-full h-[700px] rounded-lg"
/>


      <h3 className="mt-4 text-4xl font-bold ">{videoData.snippet.title}</h3> 

      <div className="flex justify-between items-center mt-2 text-gray-600">
        <div className="flex space-x-4">
          <span className="flex items-center text-gray-800 hover:text-red-500 cursor-pointer">
            <img src={Like} alt="Like" className="h-6 w-6 mr-1" />
            {videoData.statistics.likeCount}
          </span>
          <span className="flex items-center text-gray-800 hover:text-red-500 cursor-pointer">
            <img src={Dislike} alt="Dislike" className="h-6 w-6 mr-1" />
            {videoData.statistics.dislikeCount}
          </span>
          <span className="flex items-center text-gray-800 hover:text-blue-500 cursor-pointer">
            <img src={Share} alt="Share" className="h-6 w-6 mr-1" /> Share
          </span>
        </div>
      </div>

      <hr className="my-4" />

      <div className="mt-4">
        <h4 className="text-lg font-semibold">Comments</h4>
        <form onSubmit={handleCommentSubmit} className="flex mt-2">
          <input
            type="text"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 border rounded-l-md p-2"
          />
          <button
            type="submit"
            className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-r-md"
          >
            COMMENT
          </button>
        </form>
        <div className="mt-4">
          {comments.length === 0 ? (
            <p className="text-gray-600">No comments yet.</p>
          ) : (
            comments.map((comment, index) => (
              <div
                key={index}
                className="flex items-start bg-gray-100 p-2 rounded my-2"
              >
                <img
                  src={CommentProfile}
                  alt="Comment Profile"
                  className="h-8 w-8 rounded-full mr-2"
                />
                <p className="flex-1">{comment}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default MainVideo;
