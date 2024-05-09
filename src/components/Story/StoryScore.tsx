interface StoryScoreProps {
  score: number;
}

const StoryScore: React.FC<StoryScoreProps> = ({ score }) => {
  return (
    <p className="text-white border border-gray-700 rounded-xl px-3 py-1">
      ⬆ {score}
    </p>
  );
};

export default StoryScore;
