import CommentAuthor from "./CommentAuthor";
import CommentTime from "./CommentTime";

interface CommentHeaderProps {
  author: string;
  time: number;
}

const CommentHeader: React.FC<CommentHeaderProps> = ({ author, time }) => {
  return (
    <div className="flex px-4">
      <CommentAuthor author={author} />
      <CommentTime time={time} />
    </div>
  );
};

export default CommentHeader;
