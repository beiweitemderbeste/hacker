import StoryModalButton from "./StoryModalButton";
import StoryModalBody from "./StoryModalBody";

interface StoryModalProps {
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
  showStoryModal: boolean;
  setShowStoryModal: Function;
}

const StoryModal: React.FC<StoryModalProps> = ({
  storyObject,
  showStoryModal,
  setShowStoryModal,
}) => {
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
