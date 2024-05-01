import { shortURL } from "../../utils/utils";

import StoryAuthor from "./StoryAuthor";
import StoryTime from "./StoryTime"

const StoryHeader = ({ storyObject }) => {
  const formattedURL = shortURL(storyObject.url);

  return (
    <div className="flex">
      <StoryAuthor author={storyObject.by} />
      <StoryTime time={storyObject.time} />
      {storyObject.url && <p className="text-gray-500">{formattedURL}</p>}
    </div>
  );
};

export default StoryHeader;
