import { useState, useEffect } from "react";

import { fetchSingleComment } from "../utils/apiUtils";

const Comment = ({ commentID }) => {
  const [comment, setComment] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const singleComment = await fetchSingleComment(commentID);
        setComment(singleComment);
      } catch (error) {
        console.error("Error fetching single comment: ", error);
      }
    };
    fetchData();
  }, [commentID]);

  return (
    <div className="border border-gray-700 bg-gray-800 rounded-md p-4 mb-4">
      {comment ? (
        <>
          <ul className="list-disc pl-4">
            <li className="text-gray-300">Comment ID: {comment.id}</li>
            <li className="text-gray-300">Comment by: {comment.by}</li>
            <li className="text-gray-300">Kids: {comment.kids}</li>
            <li className="text-gray-300">Text: {comment.text}</li>
            <li className="text-gray-300">Time: {comment.time}</li>
            <li className="text-gray-300">Type: {comment.type}</li>
          </ul>
        </>
      ) : (
        <p className="text-gray-400">Loading...</p>
      )}
    </div>
  );
};

export default Comment;
