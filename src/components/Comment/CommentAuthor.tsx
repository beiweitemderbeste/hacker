interface CommentAuthorProps {
  author: string;
}

const CommentAuthor: React.FC<CommentAuthorProps> = ({ author }) => {
  return (
    <>
      <p className="text-gray-400 font-medium mr-2">{author}</p>
    </>
  );
};

export default CommentAuthor;
