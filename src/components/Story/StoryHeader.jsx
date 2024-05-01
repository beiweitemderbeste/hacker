import { convertUnixTime, shortURL } from "../../utils/utils";

const StoryHeader = ({ storyObject }) => {
  const formattedTime = convertUnixTime(storyObject.time);
  const formattedURL = shortURL(storyObject.url)

  return (
    <div className="flex">
      <p className="text-white mr-2">{storyObject.by}</p>
      <p className="text-gray-500 mr-1"> ⚬ </p>
      <p className="text-gray-500 mr-1">{formattedTime}</p>
      <p className="text-gray-500 mr-1"> ⚬ </p>
      {storyObject.url && <p className="text-gray-500">{formattedURL}</p>}
    </div>
  );
};

export default StoryHeader;
