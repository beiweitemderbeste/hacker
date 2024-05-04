import CommentAuthor from "./CommentAuthor.tsx";
import CommentTime from "./CommentTime.tsx";

const CommentHeader = ({ author, time }) => {
  return (
    <div className="flex px-4">
      <CommentAuthor author={author} />
      <CommentTime time={time} />
    </div>
  );
};

export default CommentHeader;
