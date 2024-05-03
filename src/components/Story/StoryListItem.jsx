import { useState, useEffect } from "react";

import { fetchSingleStory } from "../../utils/utils";

import Story from "./Story";
import StoryModal from "./StoryModal";

const StoryListItem = ({ storyID }) => {
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
          <Story storyObject={storyObject} />
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
}

export default StoryListItem