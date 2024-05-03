import { decodeHTMLEntities } from "../../utils/utils";

const CommentBody = ({ commentObject }) => {
  return (
    <div className="text-white px-4">
      <p>{decodeHTMLEntities(commentObject.text)}</p>
    </div>
  );
};

export default CommentBody;
