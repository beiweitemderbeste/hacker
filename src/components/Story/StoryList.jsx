import { useState, useEffect } from "react";

import { fetchLast10StoryIDs } from "../../utils/utils";

import Story from "./Story";
import BackToTopButton from "../BackToTopButton";

const StoryList = ({ sortingSelection }) => {
  const [storyIDs, setStoryIDs] = useState([]);

  useEffect(() => {
    fetchLast10StoryIDs(sortingSelection, setStoryIDs);
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
