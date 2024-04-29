const StoryFooter = ({ storyObject }) => {
  return (
    <div className="flex items-center space-x-4">
      <p className="text-white border border-gray-700 rounded-xl px-3 py-1">⬆ {storyObject.score}</p>
      {storyObject.kids ? (
        <p className="text-white border border-gray-700 rounded-xl px-3 py-1">
          {storyObject.kids.length}
          {storyObject.kids.length === 1 ? " comment" : " comments"}
        </p>
      ) : (
        <p className="text-white border border-gray-700 rounded-xl px-3 py-1">0 comments</p>
      )}
    </div>
  );
};

export default StoryFooter;
