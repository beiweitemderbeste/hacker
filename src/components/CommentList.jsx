import Comment from "./Comment";

const CommentList = ({ commentIDs }) => {
  return (
    <div className="container mx-auto bg-gray-900">
      <ul className="list-none m-0 p-0">
        {commentIDs.map((commentID) => (
          <Comment key={commentID} commentID={commentID} />
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
