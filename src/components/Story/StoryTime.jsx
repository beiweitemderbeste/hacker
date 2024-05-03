import { convertUnixTime } from "../../utils/utils";

const StoryTime = ({ time }) => {
  const formattedTime = convertUnixTime(time);

  return <p className="text-gray-500 mr-1"> ⚬ {formattedTime} ⚬ </p>;
};

export default StoryTime;
