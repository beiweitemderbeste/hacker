import StoryHeader from "./StoryHeader";
import StoryBody from "./StoryBody";
import StoryFooter from "./StoryFooter";

interface StoryProps {
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

const Story: React.FC<StoryProps> = ({ storyObject }) => {
  return (
    <>
      <StoryHeader
        author={storyObject.by}
        time={storyObject.time}
        link={storyObject.url}
      />
      <StoryBody title={storyObject.title} link={storyObject.url} />
      <StoryFooter
        commentCount={storyObject.kids ? storyObject.kids.length : 0}
        score={storyObject.score}
      />
    </>
  );
};

export default Story;
