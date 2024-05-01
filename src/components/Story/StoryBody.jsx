import StoryTitle from "./StoryTitle";
import StoryThumbnail from "./StoryThumbail";

const StoryBody = ({ storyObject }) => {
  return (
    <div className="bg-gray-900 py-4 flex">
      <StoryTitle title={storyObject.title} />
      <StoryThumbnail className="flex-1" storyObject={storyObject} />
    </div>
  );
};

export default StoryBody;
