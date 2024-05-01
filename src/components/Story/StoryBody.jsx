import StoryTitle from "./StoryTitle";
import StoryThumbnail from "./StoryThumbail";

const StoryBody = ({ title, link }) => {
  return (
    <div className="bg-gray-900 py-4 flex">
      <StoryTitle title={title} />
      <StoryThumbnail className="flex-1" link={link} />
    </div>
  );
};

export default StoryBody;
