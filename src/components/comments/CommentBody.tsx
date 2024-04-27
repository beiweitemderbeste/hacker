import React from "react";

import { decodeHTMLEntities } from "../../utils/utils";

import { CommentBodyProps } from "../../interfaces/comments/CommentBodyProps";

const CommentBody: React.FC<CommentBodyProps> = ({ comment }) => {
  return (
    <div className="text-white px-4">
      <p>{decodeHTMLEntities(comment.text)}</p>
    </div>
  );
};

export default CommentBody;
