import { useState, useEffect } from "react";

import { fetchAuthor } from "../../utils/utilities";

interface ProfileModalBodyProps {
  author: string;
}

interface AuthorObject {
  about: string;
  created: number;
  id: string;
  karma: number;
  submitted: number[];
}

const ProfileModalBody: React.FC<ProfileModalBodyProps> = ({ author }) => {
  const [authorObject, setAuthorObject] = useState<AuthorObject | null>(null);

  useEffect(() => {
    fetchAuthor(author, setAuthorObject);
  }, [author]);

  return (
    <>
      {authorObject ? (
        <p>name: {authorObject.id}</p>
      ) : (
        <p className="text-gray-400">Loading...</p>
      )}
    </>
  );
};

export default ProfileModalBody;
