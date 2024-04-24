import { useState, useEffect } from "react";

import Story from "./Story";
import BackToTopButton from "./BackToTopButton";

const StoryList = ({ fetchingFunction, setShowStoryDetails }) => {
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
    <div className="container mx-auto bg-gray-900">
      <ul className="list-none m-0 p-0">
        {storyIDs.map((storyID) => (
          <Story
            key={storyID}
            storyID={storyID}
            setShowStoryDetails={setShowStoryDetails}
          />
        ))}
      </ul>
      <BackToTopButton />
    </div>
  );
};

export default StoryList;
