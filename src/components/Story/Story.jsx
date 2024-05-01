import { useState, useEffect } from "react";

import { fetchSingleStory } from "../../utils/utils";

import StoryHeader from "./StoryHeader";
import StoryBody from "./StoryBody";
import StoryFooter from "./StoryFooter";
import StoryModal from "./StoryModal";

const Story = ({ storyID }) => {
  const [storyObject, setStoryObject] = useState(null);
  const [showStoryModal, setShowStoryModal] = useState(false);

  useEffect(() => {
    fetchSingleStory(storyID, setStoryObject);
  }, [storyID]);

  const handleStoryClick = () => {
    setShowStoryModal(true);
  };

  return (
    <>
      <li onClick={handleStoryClick} className="border-b border-gray-700 p-4">
        {storyObject ? (
          <>
            <StoryHeader
              author={storyObject.by}
              time={storyObject.time}
              link={storyObject.url}
            />
            <StoryBody title={storyObject.title} link={storyObject.url} />
            <StoryFooter commentCount={storyObject.kids.length} score={storyObject.score} />
          </>
        ) : (
          <p className="text-gray-400">Loading...</p>
        )}
      </li>
      <StoryModal
        showStoryModal={showStoryModal}
        setShowStoryModal={setShowStoryModal}
        storyObject={storyObject}
      />
    </>
  );
};

export default Story;
