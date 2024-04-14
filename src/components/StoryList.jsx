import { useState, useEffect } from "react";

import { fetchTop10TopStories } from "../utils/apiUtils";

import Story from "./Story";

const StoryList = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const top10Stories = await fetchTop10TopStories();
        setStories(top10Stories);
      } catch (error) {
        console.error("Error fetching top10 stories:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <p>Hello from StoryList component</p>
      <ul>
        {stories.map(story => <Story key={story} story={storyID} />)}
      </ul>
    </>
  );
};

export default StoryList;
