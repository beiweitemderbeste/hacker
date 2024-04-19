import { useState, useEffect } from "react";

import Story from "./Story";

const StoryList = ({ sorting, fetchingFunction, setShowStoryDetails }) => {
  const [storyIDs, setStorIDs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stories = await fetchingFunction;
        setStorIDs(stories);
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    };

    fetchData();
  }, [fetchingFunction]);

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-800">
      <p className="text-xl font-bold mb-4 text-white">
        Top Ten {sorting} Stories
      </p>
      <ul className="list-none m-0 p-0">
        {storyIDs.map((storyID) => (
          <Story
            key={storyID}
            storyID={storyID}
            setShowStoryDetails={setShowStoryDetails}
          />
        ))}
      </ul>
    </div>
  );
};

export default StoryList;
