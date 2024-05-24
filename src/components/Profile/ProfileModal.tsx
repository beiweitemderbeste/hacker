import ProfileModalButton from "./ProfileModalButton";
import ProfileModalBody from "./ProfileModalBody";

interface ProfileModalProps {
  author: string;
  showProfileModal: boolean;
  setShowProfileModal: Function;
}

const ProfileModal: React.FC<ProfileModalProps> = ({
  author,
  showProfileModal,
  setShowProfileModal,
}) => {
  return (
    <>
      {showProfileModal && (
        <div className="fixed inset-0 z-999 bg-red-500">
          <ProfileModalButton setShowProfileModal={setShowProfileModal} />
          <ProfileModalBody author={author} />
        </div>
      )}
    </>
  );
};

export default ProfileModal;
