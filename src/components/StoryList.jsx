import { useState, useEffect } from "react";

import { fetchTop10TopStoryIDs } from "../utils/apiUtils";

import Story from "./Story";

const StoryList = () => {
  const [storyIDs, setStorIDs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const top10StoryIDs = await fetchTop10TopStoryIDs();
        setStorIDs(top10StoryIDs);
      } catch (error) {
        console.error("Error fetching top10 stories:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <p className="text-xl font-bold mb-4">Hello from StoryList component</p>
      <ul className="list-none m-0 p-0">
        {storyIDs.map((storyID) => (
          <Story key={storyID} storyID={storyID} />
        ))}
      </ul>
    </div>
  );
};

export default StoryList;
