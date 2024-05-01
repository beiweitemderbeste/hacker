import StoryAuthor from "./StoryAuthor";
import StoryTime from "./StoryTime";
import StoryLink from "./StoryLink";

const StoryHeader = ({ storyObject }) => {
  return (
    <div className="flex">
      <StoryAuthor author={storyObject.by} />
      <StoryTime time={storyObject.time} />
      <StoryLink link={storyObject.url} />
    </div>
  );
};

export default StoryHeader;
