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
    <ul className="list-none m-0 p-0 bg-gray-900">
      {storyIDs.map((storyID) => (
        <Story key={storyID} storyID={storyID} />
      ))}
      <BackToTopButton />
    </ul>
  );
};

export default StoryList;
