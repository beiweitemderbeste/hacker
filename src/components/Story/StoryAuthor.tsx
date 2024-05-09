interface StoryAuthorProps {
  author: string;
}

const StoryAuthor: React.FC<StoryAuthorProps> = ({ author }) => {
  return <p className="text-white mr-2">{author}</p>;
};

export default StoryAuthor;
