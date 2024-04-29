import { useState, useEffect } from "react";

import { fetchSingleStory } from "../../utils/utils";

import StoryHeader from "./StoryHeader";
import StoryBody from "./StoryBody";
import StoryFooter from "./StoryFooter";

const Story = ({ storyID, setShowStoryDetails }) => {
  const [storyObject, setStoryObject] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const story = await fetchSingleStory(storyID);
        setStoryObject(story);
      } catch (error) {
        console.error("Error fetching single story: ", error);
      }
    };
    fetchData();
  }, [storyID]);

  return (
    <li
      onClick={() => setShowStoryDetails(storyObject)}
      className="border-b border-gray-700 p-4"
    >
      {storyObject ? (
        <>
          <StoryHeader story={storyObject} />
          <StoryBody story={storyObject} />
          <StoryFooter story={storyObject} />
        </>
      ) : (
        <p className="text-gray-400">Loading...</p>
      )}
    </li>
  );
};

export default Story;
