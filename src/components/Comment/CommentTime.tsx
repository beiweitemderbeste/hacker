interface CommentTimeProps {
  time: number;
}

const CommentTime: React.FC<CommentTimeProps> = ({ time }) => {
  return (
    <>
      <p className="text-gray-500"> ⚬ {time}</p>{" "}
    </>
  );
};

export default CommentTime;
