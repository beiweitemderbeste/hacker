// todo:
// only show

import { convertUnixTime } from "../utils/apiUtils";

const StoryHeader = ({ story }) => {
  const time = convertUnixTime(story.time);

  return (
    <div className="flex">
      <p className="text-white mr-2">{story.by}</p>
      <p className="text-gray-500 mr-1"> ⚬ </p>
      <p className="text-gray-500 mr-1">{time}</p>
      <p className="text-gray-500 mr-1"> ⚬ </p>
      {story && <p className="text-gray-500">{story.url}</p>}
    </div>
  );
};

export default StoryHeader;
