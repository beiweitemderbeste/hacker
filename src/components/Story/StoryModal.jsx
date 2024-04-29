import StoryModalButton from "./StoryModalButton";
import StoryModalBody from "./StoryModalBody";

const StoryModal = ({ storyObject, showStoryModal, setShowStoryModal }) => {
  return (
    <>
      {showStoryModal && (
        <div className="fixed inset-0 p-4 bg-gray-900 overflow-y-scroll">
          <StoryModalButton setShowStoryModal={setShowStoryModal} />
          <StoryModalBody storyObject={storyObject} />
        </div>
      )}
    </>
  );
};

export default StoryModal;
