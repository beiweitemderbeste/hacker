import React from "react";

import Comment from "./Comment";

import { CommentListProps } from "../../interfaces/comments/CommentListProps"

const CommentList: React.FC<CommentListProps> = ({ commentIDs }) => {
  return (
    <div className="container mx-auto bg-gray-900">
      <ul className="list-none m-0 p-0">
        {commentIDs.map((commentID: CommentListProps) => (
          <Comment key={commentID} commentID={commentID} />
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
