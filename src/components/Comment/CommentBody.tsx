import { decodeHTMLEntities } from "../../utils/utilities";

interface CommentBodyProps {
  text: string;
}

const CommentBody: React.FC<CommentBodyProps> = ({ text }) => {
  const decodedText = decodeHTMLEntities(text);

  return (
    <div className="text-white px-4">
      <p>{decodedText}</p>
    </div>
  );
};

export default CommentBody;
