import { useState, useEffect } from "react";

import { fetchSingleComment } from "../../utils/utils";

import CommentHeader from "./CommentHeader.tsx";
import CommentBody from "./CommentBody";
import CommentList from "./CommentList";

const Comment = ({ commentID }) => {
  const [commentObject, setCommentObject] = useState(null);

  useEffect(() => {
    fetchSingleComment(commentID, setCommentObject);
  }, [commentID]);

  return (
    <li className="p-4 mb-4">
      {commentObject ? (
        <>
          <CommentHeader author={commentObject.by} time={commentObject.time} />
          <CommentBody text={commentObject.text} />
          {commentObject.kids && <CommentList commentIDs={commentObject.kids} />}
        </>
      ) : (
        <p className="text-gray-400">Loading...</p>
      )}
    </li>
  );
};

export default Comment;
