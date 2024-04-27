import React from "react";

import { CommentHeaderProps } from "../../interfaces/comments/CommentHeaderProps";

const CommentHeader: React.FC<CommentHeaderProps> = ({ comment }) => {
  return (
    <div className="flex px-4">
      <p className="text-gray-400 font-medium mr-2">{comment.by}</p>
      <p className="text-gray-500 mr-1"> ⚬ </p>
      <p className="text-gray-500">{comment.time}</p>
    </div>
  );
};

export default CommentHeader;
