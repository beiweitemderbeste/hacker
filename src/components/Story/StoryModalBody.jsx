import CommentList from "../Comment/CommentList";
import StoryHeader from "./StoryHeader";
import StoryBody from "./StoryBody";
import StoryFooter from "./StoryFooter";

const StoryModalBody = ({ storyObject }) => {
  return (
    <div>
      <StoryHeader
        author={storyObject.by}
        time={storyObject.time}
        link={storyObject.url}
      />
      <StoryBody title={storyObject.title} link={storyObject.url} />
      <StoryFooter commentCount={storyObject.kids ? storyObject.kids.length : 0} score={storyObject.score} />
      {storyObject.kids && <CommentList commentIDs={storyObject.kids} />}
    </div>
  );
};

export default StoryModalBody;
