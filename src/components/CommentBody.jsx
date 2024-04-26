const CommentBody = ({ comment }) => {
  return (
    <div className="max-w-prose">
      <p>{comment.text}</p>
    </div>
  );
};

export default CommentBody;
