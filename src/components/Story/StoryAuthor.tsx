import { useState, useEffect } from "react";

import ProfileModal from "../Profile/ProfileModal";

interface StoryAuthorProps {
  author: string;
}

const StoryAuthor: React.FC<StoryAuthorProps> = ({ author }) => {
  const [showProfileModal, setShowProfileModal] = useState<boolean>(false);

  const handleClick = () => {
    setShowProfileModal(true);
  };

  return (
    <>
      <p onClick={handleClick} className="text-white mr-2">
        {author}
      </p>
      <ProfileModal
        author={author}
        showProfileModal={showProfileModal}
        setShowProfileModal={setShowProfileModal}
      />
    </>
  );
};

export default StoryAuthor;
