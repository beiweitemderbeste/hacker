import { decodeHTMLEntities } from "../../utils/utils";

const CommentBody = ({ comment }) => {
  return (
    <div className="text-white px-4">
      <p>{decodeHTMLEntities(comment.text)}</p>
    </div>
  );
};

export default CommentBody;
