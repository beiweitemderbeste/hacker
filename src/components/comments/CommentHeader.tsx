import React from "react";

import { CommentProps } from "../../interfaces/comments/CommentProps";

const CommentHeader: React.FC<CommentProps> = ({ comment }) => {
  return (
    <div className="flex px-4">
      <p className="text-gray-400 font-medium mr-2">{comment.by}</p>
      <p className="text-gray-500 mr-1"> ⚬ </p>
      <p className="text-gray-500">{comment.time}</p>
    </div>
  );
};

export default CommentHeader;
