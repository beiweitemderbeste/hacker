import { useState, useEffect } from "react";

import { fetchSingleComment } from "../../utils/utilities";

import CommentHeader from "./CommentHeader";
import CommentBody from "./CommentBody";
import CommentList from "./CommentList";

interface CommentProps {
  commentID: number;
}

interface Comment {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
}

const Comment: React.FC<CommentProps> = ({ commentID }) => {
  const [commentObject, setCommentObject] = useState<Comment | null>(null);

  useEffect(() => {
    fetchSingleComment(commentID, setCommentObject);
  }, [commentID]);

  return (
    <li className="p-4 mb-4">
      {commentObject ? (
        <>
          <CommentHeader author={commentObject.by} time={commentObject.time} />
          <CommentBody text={commentObject.text} />
          {commentObject.kids && (
            <CommentList commentIDs={commentObject.kids} />
          )}
        </>
      ) : (
        <p className="text-gray-400">Loading...</p>
      )}
    </li>
  );
};

export default Comment;
