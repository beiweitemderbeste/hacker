import { useState, useEffect } from "react";

import { fetchSingleStory } from "../utils/apiUtils";

const Story = ({ storyID, setShowStoryDetails }) => {
  const [story, setStory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const singleStory = await fetchSingleStory(storyID);
        setStory(singleStory);
      } catch (error) {
        console.error("Error fetching single story: ", error);
      }
    };
    fetchData();
  }, [storyID]);

  return (
    <div
      onClick={() => setShowStoryDetails(story)}
      className="border border-gray-700 rounded-md p-4 mb-4"
    >
      {story ? (
        <>
          <h2 className="text-xl font-bold mb-2 text-white">{story.title}</h2>
          <ul className="list-disc pl-4">
            <li className="text-white">Story ID: {storyID}</li>
            <li className="text-white">Story by: {story.by}</li>
            <li className="text-white">
              Story descendants: {story.descendants}
            </li>
            <li className="text-white">Score: {story.score}</li>
            <li className="text-white">Time: {story.time}</li>
            <li className="text-white">Type: {story.type}</li>
            <li className="text-white">
              URL:
              {story.url && (
                <a href={story.url} className="text-blue-300">
                  {story.url}
                </a>
              )}
            </li>
          </ul>
        </>
      ) : (
        <p className="text-gray-400">Loading...</p>
      )}
    </div>
  );
};

export default Story;
