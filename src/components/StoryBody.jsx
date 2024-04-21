import StoryThumbnail from "./StoryThumbail";

const StoryBody = ({ story }) => {
  return (
    <div className="contain bg-gray-900 text-white py-4 flex">
        <h1 className="text-3xl font-bold flex-1 px-3">{story.title}</h1>
        <StoryThumbnail className="flex-1" story={story} />
    </div>
  );
};

export default StoryBody;
