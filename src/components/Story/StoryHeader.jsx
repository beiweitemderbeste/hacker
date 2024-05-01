import { convertUnixTime, shortURL } from "../../utils/utils";

import StoryAuthor from "./StoryAuthor";

const StoryHeader = ({ storyObject }) => {
  const formattedTime = convertUnixTime(storyObject.time);
  const formattedURL = shortURL(storyObject.url);

  return (
    <div className="flex">
      <StoryAuthor author={storyObject.by} />
      <p className="text-gray-500 mr-1"> ⚬ </p>
      <p className="text-gray-500 mr-1">{formattedTime}</p>
      <p className="text-gray-500 mr-1"> ⚬ </p>
      {storyObject.url && <p className="text-gray-500">{formattedURL}</p>}
    </div>
  );
};

export default StoryHeader;
