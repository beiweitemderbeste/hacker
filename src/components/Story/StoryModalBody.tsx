import CommentList from "../Comment/CommentList";
import Story from "./Story";

interface StoryModalBodyProps {
  storyObject: {
    by: string;
    descendants: number;
    id: number;
    kids: number[];
    score: number;
    time: number;
    title: string;
    type: "story";
    url: string;
  };
}

const StoryModalBody: React.FC<StoryModalBodyProps> = ({ storyObject }) => {
  return (
    <div>
      <Story storyObject={storyObject} />
      <CommentList commentIDs={storyObject.kids} />
    </div>
  );
};

export default StoryModalBody;
