import { convertUnixTime } from "../../utils/utilities";

interface StoryTimeProps {
  time: number;
}

const StoryTime: React.FC<StoryTimeProps> = ({ time }) => {
  const formattedTime = convertUnixTime(time);

  return <p className="text-gray-500 mr-1"> ⚬ {formattedTime} ⚬ </p>;
};

export default StoryTime;
