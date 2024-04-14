import { useState } from "react";

import SortingBar from "./SortingBar";
import StoryList from "./StoryList";

const Newsfeed = () => {

  const [sorting, setSorting] = useState("top")

  return (
    <>
      <SortingBar sorting={sorting} setSorting={setSorting} />
      <StoryList sorting={sorting} />
    </>
  );
};

export default Newsfeed;
