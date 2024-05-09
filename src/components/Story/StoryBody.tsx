import StoryTitle from "./StoryTitle";
import StoryThumbnail from "./StoryThumbail";

interface StoryBodyProps {
  title: string;
  link: string;
}

const StoryBody: React.FC<StoryBodyProps> = ({ title, link }) => {
  return (
    <div className="bg-gray-900 py-4 flex">
      <StoryTitle title={title} />
      <StoryThumbnail link={link} />
    </div>
  );
};

export default StoryBody;
