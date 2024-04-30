import { useState, useEffect } from "react";

import { fetchTop10BestStoryIDs } from "../../utils/utils";
import { fetchTop10TopStoryIDs } from "../../utils/utils";
import { fetchTop10NewStoryIDs } from "../../utils/utils";

import Story from "./Story";
import BackToTopButton from "../BackToTopButton";

const StoryList = ({ sortingSelection }) => {
  const [storyIDs, setStoryIDs] = useState([]);
  const [fetchingFunction, setFetchingFunction] = useState(() =>
    fetchTop10TopStoryIDs()
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stories = await fetchingFunction;
        setStoryIDs(stories);
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    };

    fetchData();
  }, [fetchingFunction]);

  useEffect(() => {
    if (sortingSelection === "new") {
      setFetchingFunction(() => fetchTop10NewStoryIDs());
    } else if (sortingSelection === "best") {
      setFetchingFunction(() => fetchTop10BestStoryIDs());
    } else {
      setFetchingFunction(() => fetchTop10TopStoryIDs());
    }
  }, [sortingSelection]);

  return (
    <div className="container mx-auto bg-gray-900">
      <ul className="list-none m-0 p-0">
        {storyIDs.map((storyID) => (
          <Story key={storyID} storyID={storyID} />
        ))}
      </ul>
      <BackToTopButton />
    </div>
  );
};

export default StoryList;
