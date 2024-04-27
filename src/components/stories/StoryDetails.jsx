import CommentList from "./CommentList";
import StoryHeader from "./StoryHeader";
import StoryBody from "./StoryBody";
import StoryFooter from "./StoryFooter";

const StoryDetails = ({ showStoryDetails, setShowStoryDetails }) => {
  return (
    <>
      {showStoryDetails && (
        <div className="fixed inset-0 p-4 bg-gray-900 overflow-y-scroll">
          <button
            className="mb-4 px-4 py-2 rounded-md text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            onClick={() => setShowStoryDetails(false)}
          >
            close
          </button>
          <StoryHeader story={showStoryDetails} />
          <StoryBody story={showStoryDetails} />
          <StoryFooter story={showStoryDetails} />
          {showStoryDetails.kids && (
            <CommentList commentIDs={showStoryDetails.kids} />
          )}
        </div>
      )}
    </>
  );
};

export default StoryDetails;
