const StoryHeader = ({ story }) => {
  return (
    <div className="flex">
      <p className="text-white mr-4">{story.by}</p>
      <p className="text-white mr-4">{story.time}</p>
      <p className="text-white">{story.url}</p>
    </div>
  );
};

export default StoryHeader;
