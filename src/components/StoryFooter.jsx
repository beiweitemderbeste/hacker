const StoryFooter = ({ story }) => {
  return (
    <>
      <p>score: {story.score}</p>
      <p>{story.kids.length} comments</p>
    </>
  );
};

export default StoryFooter;
