interface StoryModalButtonProps {
  setShowStoryModal: Function;
}

const StoryModalButton: React.FC<StoryModalButtonProps> = ({
  setShowStoryModal,
}) => {
  return (
    <button
      className="mb-4 px-4 py-2 rounded-md text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
      onClick={() => setShowStoryModal(false)}
    >
      close
    </button>
  );
};

export default StoryModalButton;
