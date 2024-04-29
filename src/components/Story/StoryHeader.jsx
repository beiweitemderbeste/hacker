import { convertUnixTime, shortURL } from "../../utils/utils";

const StoryHeader = ({ storyObject }) => {
  const time = convertUnixTime(storyObject.time);

  return (
    <div className="flex">
      <p className="text-white mr-2">{storyObject.by}</p>
      <p className="text-gray-500 mr-1"> ⚬ </p>
      <p className="text-gray-500 mr-1">{time}</p>
      <p className="text-gray-500 mr-1"> ⚬ </p>
      {storyObject.url && <p className="text-gray-500">{shortURL(storyObject.url)}</p>}
    </div>
  );
};

export default StoryHeader;
