import { useState, useEffect } from "react";

import { fetchSingleComment } from "../../utils/utils";

import CommentHeader from "./CommentHeader";
import CommentBody from "./CommentBody";
import CommentList from "./CommentList";

const Comment = ({ commentID }) => {
  const [commentObject, setCommentObject] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const singleComment = await fetchSingleComment(commentID);
        setCommentObject(singleComment);
      } catch (error) {
        console.error("Error fetching single comment: ", error);
      }
    };
    fetchData();
  }, [commentID]);

  return (
    <li className="p-4 mb-4">
      {commentObject ? (
        <>
          <CommentHeader commentObject={commentObject} />
          <CommentBody commentObject={commentObject} />
          {commentObject.kids && <CommentList commentObject={commentObject.kids} />}
        </>
      ) : (
        <p className="text-gray-400">Loading...</p>
      )}
    </li>
  );
};

export default Comment;
