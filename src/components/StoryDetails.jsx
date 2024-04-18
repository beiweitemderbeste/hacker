import Comment from "./Comment";

const StoryDetails = ({ showStoryDetails, setShowStoryDetails }) => {
  console.log(showStoryDetails);
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-800 text-white">
      <button
        className="mb-4 px-4 py-2 rounded-md text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
        onClick={() => setShowStoryDetails(false)}
      >
        go back
      </button>
      <p className="text-lg font-bold mb-2">{showStoryDetails.title}</p>
      <p className="text-gray-500 mb-2">Story ID: {showStoryDetails.id}</p>
      <p className="text-gray-500 mb-2">Story by: {showStoryDetails.by}</p>
      <p className="text-gray-500 mb-2">
        Story descendants: {showStoryDetails.descendants}
      </p>
      <p className="text-gray-500 mb-2">Score: {showStoryDetails.score}</p>
      <p className="text-gray-500 mb-2">Time: {showStoryDetails.time}</p>
      <p className="text-gray-500 mb-2">Type: {showStoryDetails.type}</p>
      <p className="text-gray-500 mb-2">URL: {showStoryDetails.url}</p>
      <p className="text-gray-500 mb-2">kids: {showStoryDetails.kids}</p>
      {showStoryDetails.kids.map((kid) => (
        <Comment key={kid} commentID={kid} />
      ))}
    </div>
  );
};

export default StoryDetails;
