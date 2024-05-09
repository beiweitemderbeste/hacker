import Comment from "./Comment";

interface CommentListProps {
  commentIDs: number[];
}

const CommentList: React.FC<CommentListProps> = ({ commentIDs }) => {
  return (
    <div className="container mx-auto bg-gray-900">
      <ul className="list-none m-0 p-0">
        {commentIDs &&
          commentIDs.map((commentID) => (
            <Comment key={commentID} commentID={commentID} />
          ))}
      </ul>
    </div>
  );
};

export default CommentList;
