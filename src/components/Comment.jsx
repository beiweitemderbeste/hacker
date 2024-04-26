import { useState, useEffect } from "react";

import { fetchSingleComment } from "../utils/apiUtils";

import CommentHeader from "./CommentHeader";
import CommentBody from "./CommentBody";
import CommentList from "./CommentList";

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
    <li className="p-4 mb-4">
      {comment ? (
        <>
          <CommentHeader comment={comment} />
          <CommentBody comment={comment} />
          {comment.kids && <CommentList commentIDs={comment.kids} />}
        </>
      ) : (
        <p className="text-gray-400">Loading...</p>
      )}
    </li>
  );
};

export default Comment;
