import CommentList from "../Comment/CommentList";
import Story from "./Story";

const StoryModalBody = ({ storyObject }) => {
  return (
    <div>
      <Story storyObject={storyObject} />
      <CommentList commentIDs={storyObject.kids} />
    </div>
  );
};

export default StoryModalBody;
