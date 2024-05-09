import { shortURL } from "../../utils/utilities";

interface StoryLinkProps {
  link: string;
}

const StoryLink: React.FC<StoryLinkProps> = ({ link }) => {
  if (!link) return null;
  const formattedLink = shortURL(link);

  return <p className="text-gray-500">{formattedLink}</p>;
};

export default StoryLink;
