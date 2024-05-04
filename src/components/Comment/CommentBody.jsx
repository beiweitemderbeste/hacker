import { decodeHTMLEntities } from "../../utils/utils";

const CommentBody = ({ text }) => {
  const decodedText = decodeHTMLEntities(text);

  return (
    <div className="text-white px-4">
      <p>{decodedText}</p>
    </div>
  );
};

export default CommentBody;
