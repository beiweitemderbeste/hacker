import StoryScore from "./StoryScore";
import StoryCommentsCounter from "./StoryCommentsCounter";

interface StoryFooterProps {
  score: number;
  commentCount: number;
}

const StoryFooter: React.FC<StoryFooterProps> = ({ score, commentCount }) => {
  return (
    <div className="flex items-center space-x-4">
      <StoryScore score={score} />
      <StoryCommentsCounter commentCount={commentCount} />
    </div>
  );
};

export default StoryFooter;
