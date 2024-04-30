import { useState } from "react";

import Navigation from "./Navigation";
import StoryList from "./Story/StoryList";

const Newsfeed = () => {
  const [sortingSelection, setSortingSelection] = useState("top");

  return (
    <>
      <Navigation
        sortingSelection={sortingSelection}
        setSortingSelection={setSortingSelection}
      />
      <StoryList sortingSelection={sortingSelection} />
    </>
  );
};

export default Newsfeed;
