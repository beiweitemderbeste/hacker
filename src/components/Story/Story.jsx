import { useState, useEffect } from "react";

import { fetchSingleStory } from "../../utils/utils";

import StoryHeader from "./StoryHeader";
import StoryBody from "./StoryBody";
import StoryFooter from "./StoryFooter";

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
    <li
      onClick={() => setShowStoryDetails(story)}
      className="border-b border-gray-700 p-4"
    >
      {story ? (
        <>
          <StoryHeader story={story} />
          <StoryBody story={story} />
          <StoryFooter story={story} />
        </>
      ) : (
        <p className="text-gray-400">Loading...</p>
      )}
    </li>
  );
};

export default Story;
