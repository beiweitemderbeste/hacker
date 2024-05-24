interface ProfileModalButtonProps {
  setShowProfileModal: Function;
}

const ProfileModalButton: React.FC<ProfileModalButtonProps> = ({
  setShowProfileModal,
}) => {
  return (
    <button
      className="mb-4 px-4 py-2 rounded-md text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
      onClick={() => setShowProfileModal(false)}
    >
      close
    </button>
  );
};

export default ProfileModalButton;
