import CommentList from "../Comment/CommentList";
import StoryHeader from "./StoryHeader";
import StoryBody from "./StoryBody";
import StoryFooter from "./StoryFooter";

const StoryModalBody = ({ storyObject }) => {
  return (
    <div>
      <StoryHeader storyObject={storyObject} />
      <StoryBody storyObject={storyObject} />
      <StoryFooter storyObject={storyObject} />
      {storyObject.kids && <CommentList commentIDs={storyObject.kids} />}
    </div>
  );
};

export default StoryModalBody;
