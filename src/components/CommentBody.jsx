const CommentBody = ({ comment }) => {
  return (
    <div className="text-white px-4">
      <p>{comment.text}</p>
    </div>
  );
};

export default CommentBody;
