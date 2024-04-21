const StoryBody = ({ story }) => {
  return (
    <div className="contain bg-gray-900 text-white py-4">
        <h1 className="text-3xl font-bold py-4">{story.title}</h1>
    </div>
  );
};

export default StoryBody;
