const CommentHeader = ({ commentObject }) => {
  return (
    <div className="flex px-4">
      <p className="text-gray-400 font-medium mr-2">{commentObject.by}</p>
      <p className="text-gray-500 mr-1"> ⚬ </p>
      <p className="text-gray-500">{commentObject.time}</p>
    </div>
  );
};

export default CommentHeader;
