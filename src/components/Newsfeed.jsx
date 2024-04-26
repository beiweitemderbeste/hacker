import { useState, useEffect } from "react";

import { fetchTop10BestStoryIDs } from "../utils/utils";
import { fetchTop10TopStoryIDs } from "../utils/utils";
import { fetchTop10NewStoryIDs } from "../utils/utils";

import SortingBar from "./SortingBar";
import StoryList from "./StoryList";
import StoryDetails from "./StoryDetails";

const Newsfeed = () => {
  const [sorting, setSorting] = useState("top");
  const [fetchingFunction, setFetchingFunction] = useState(() =>
    fetchTop10TopStoryIDs()
  );
  const [showStoryDetails, setShowStoryDetails] = useState(false);

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
      <SortingBar sorting={sorting} setSorting={setSorting} />
      <StoryList
        fetchingFunction={fetchingFunction}
        setShowStoryDetails={setShowStoryDetails}
      />
      <StoryDetails
        showStoryDetails={showStoryDetails}
        setShowStoryDetails={setShowStoryDetails}
      />
    </>
  );
};

export default Newsfeed;
