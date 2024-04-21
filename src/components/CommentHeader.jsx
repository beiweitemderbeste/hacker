const CommentHeader = ({ comment }) => {
  return (
    <div className="flex">
      <p className="text-gray-400 font-medium mr-2">{comment.by}</p>
      <p className="text-gray-500 mr-1"> ⚬ </p>
      <p className="text-gray-500">{comment.time}</p>
    </div>
  );
};

export default CommentHeader;
