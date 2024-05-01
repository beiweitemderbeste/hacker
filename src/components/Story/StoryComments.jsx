const StoryComments = ({ commentCount }) => {
  return (
    <>
      {commentCount ? (
        <p className="text-white border border-gray-700 rounded-xl px-3 py-1">
          {commentCount}
          {commentCount === 1 ? " comment" : " comments"}
        </p>
      ) : (
        <p className="text-white border border-gray-700 rounded-xl px-3 py-1">
          0 comments
        </p>
      )}
    </>
  );
};

export default StoryComments;
