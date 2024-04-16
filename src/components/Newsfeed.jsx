import { useState, useEffect } from "react";

import { fetchTop10BestStoryIDs } from "../utils/apiUtils";
import { fetchTop10TopStoryIDs } from "../utils/apiUtils";
import { fetchTop10NewStoryIDs } from "../utils/apiUtils";

import SortingBar from "./SortingBar";
import StoryList from "./StoryList";

const Newsfeed = () => {
  const [sorting, setSorting] = useState("top");
  const [fetchingFunction, setFetchingFunction] = useState(() => fetchTop10TopStoryIDs());

  useEffect(() => {
    if (sorting === "new") {
      setFetchingFunction(() => fetchTop10NewStoryIDs());
    } else if (sorting === "best") {
      setFetchingFunction(() => fetchTop10BestStoryIDs());
    } else {
      setFetchingFunction(() => fetchTop10TopStoryIDs());
    }
  }, [sorting]);

  return (
    <>
      <SortingBar setSorting={setSorting} />
      <StoryList sorting={sorting} fetchingFunction={fetchingFunction} />
    </>
  );
};

export default Newsfeed;
