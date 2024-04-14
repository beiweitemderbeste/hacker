import { useState, useEffect } from "react";

import { fetchSingleStory } from "../utils/apiUtils";

const Story = ({ storyID }) => {
  const [story, setStory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const singleStory = await fetchSingleStory(storyID);
        setStory(singleStory);
      } catch (error) {
        console.error("Error fetching single story: ", error);
      }
    };
    fetchData();
  }, [storyID]);

  return (
    <div className="border border-gray-300 rounded p-4 mb-4">
      {story ? (
        <>
          <h2 className="text-xl font-bold mb-2">{story.title}</h2>
          <ul className="list-disc pl-4">
            <li>storyID: {storyID}</li>
            <li>story by: {story.by}</li>
            <li>story descendants: {story.descendants}</li>
            <li>score: {story.score}</li>
            <li>time: {story.time}</li>
            <li>type: {story.type}</li>
            <li>url: {story.url && <a href={story.url}>{story.url}</a>}</li>
          </ul>
        </>
      ) : (
        <p className="text-gray-500">Loading...</p>
      )}
    </div>
  );
};

export default Story;
