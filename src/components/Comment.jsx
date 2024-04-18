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
        console.error("Error fetching single story: ", error);
      }
    };
    fetchData();
  }, [commentID]);

  return (
    <div>
      {comment ? (
        <>
          <ul className="list-disc pl-4">
            <li className="text-white">comment ID: {comment.id}</li>
            <li className="text-white">comment by: {comment.by}</li>
            <li className="text-white">kids: {comment.kids}</li>
            <li className="text-white">text: {comment.text}</li>
            <li className="text-white">Time: {comment.time}</li>
            <li className="text-white">Type: {comment.type}</li>
          </ul>
        </>
      ) : (
        <p className="text-gray-400">Loading...</p>
      )}
    </div>
  );
};

export default Comment;

/*
{
  "by" : "norvig",
  "id" : 2921983,
  "kids" : [ 2922097, 2922429, 2924562, 2922709, 2922573, 2922140, 2922141 ],
  "parent" : 2921506,
  "text" : "Aw shucks, guys ... you make me blush with your compliments.<p>Tell you what, Ill make a deal: I'll keep writing if you keep reading. K?",
  "time" : 1314211127,
  "type" : "comment"
}
*/
