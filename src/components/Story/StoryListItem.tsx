import { useState, useEffect } from "react";

import { fetchSingleStory } from "../../utils/utilities";

import Story from "./Story";
import StoryModal from "./StoryModal";

interface StoryListItemProps {
  storyID: number;
}

interface Story {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: "story";
  url: string;
}

const StoryListItem: React.FC<StoryListItemProps> = ({ storyID }) => {
  const [storyObject, setStoryObject] = useState<Story | null>(null);
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
        storyObject={storyObject as Story}
      />
    </>
  );
};

export default StoryListItem;
