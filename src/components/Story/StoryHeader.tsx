import StoryAuthor from "./StoryAuthor";
import StoryTime from "./StoryTime";
import StoryLink from "./StoryLink";

interface StoryHeaderProps {
  author: string;
  time: number;
  link: string;
}

const StoryHeader: React.FC<StoryHeaderProps> = ({ author, time, link }) => {
  return (
    <div className="flex">
      <StoryAuthor author={author} />
      <StoryTime time={time} />
      {link && <StoryLink link={link} />}
    </div>
  );
};

export default StoryHeader;
