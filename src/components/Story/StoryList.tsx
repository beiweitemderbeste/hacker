import { useState, useEffect } from "react";

import { fetchLast10StoryIDs } from "../../utils/utilities";

import StoryListItem from "./StoryListItem";
import BackToTopButton from "../BackToTopButton";

interface StoryListProps {
  sortingSelection: "top" | "best" | "new";
}

const StoryList: React.FC<StoryListProps> = ({ sortingSelection }) => {
  const [storyIDs, setStoryIDs] = useState<number[]>([]);

  useEffect(() => {
    fetchLast10StoryIDs(sortingSelection, setStoryIDs);
  }, [sortingSelection]);

  return (
    <ul className="list-none m-0 p-0 bg-gray-900">
      {storyIDs.map((storyID) => (
        <StoryListItem key={storyID} storyID={storyID} />
      ))}
      <BackToTopButton />
    </ul>
  );
};

export default StoryList;
