interface StoryTitleProps {
  title: string;
}

const StoryTitle: React.FC<StoryTitleProps> = ({ title }) => {
  return <h1 className="text-3xl font-bold flex-1 px-3 text-white">{title}</h1>;
};

export default StoryTitle;
