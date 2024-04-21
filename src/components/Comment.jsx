import { useState, useEffect } from "react";

import { fetchSingleComment } from "../utils/apiUtils";

import CommentHeader from "./CommentHeader";
import CommentBody from "./CommentBody";

const Comment = ({ commentID }) => {
  const [comment, setComment] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const singleComment = await fetchSingleComment(commentID);
        setComment(singleComment);
      } catch (error) {
        console.error("Error fetching single comment: ", error);
      }
    };
    fetchData();
  }, [commentID]);

  return (
    <div className="p-4 mb-4">
      {comment ? (
        <>
          <CommentHeader comment={comment} />
          <CommentBody comment={comment} />
          {comment.kids &&
            comment.kids.map((kid) => <Comment key={kid} commentID={kid} />)}
        </>
      ) : (
        <p className="text-gray-400">Loading...</p>
      )}
    </div>
  );
};

export default Comment;
