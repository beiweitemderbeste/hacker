import StoryScore from "./StoryScore";
import StoryCommentsCounter from "./StoryCommentsCounter"

const StoryFooter = ({ score, commentCount }) => {
  return (
    <div className="flex items-center space-x-4">
      <StoryScore score={score} />
      <StoryCommentsCounter commentCount={commentCount} />
    </div>
  );
};

export default StoryFooter;
