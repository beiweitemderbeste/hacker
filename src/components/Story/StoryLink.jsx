import { shortURL } from "../../utils/utils";

const StoryLink = ({ link }) => {
  if (!link) return null;
  const formattedLink = shortURL(link);

  return <p className="text-gray-500">{formattedLink}</p>;
};

export default StoryLink;
