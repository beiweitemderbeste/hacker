import StoryScore from "./StoryScore";
import StoryComments from "./StoryComments"

const StoryFooter = ({ score, commentCount }) => {
  return (
    <div className="flex items-center space-x-4">
      <StoryScore score={score} />
      <StoryComments commentCount={commentCount} />
      
    </div>
  );
};

export default StoryFooter;
