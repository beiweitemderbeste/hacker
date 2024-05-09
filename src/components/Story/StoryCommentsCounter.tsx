interface StoryCommentsCounterProps {
  commentCount: number;
}

const StoryCommentsCounter: React.FC<StoryCommentsCounterProps> = ({
  commentCount,
}) => {
  return (
    <p className="text-white border border-gray-700 rounded-xl px-3 py-1">
      {commentCount} {commentCount === 1 ? "comment" : "comments"}
    </p>
  );
};

export default StoryCommentsCounter;
