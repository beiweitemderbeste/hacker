import { useState } from "react";

import Navigation from "./Navigation";
import StoryList from "./Story/StoryList";

const Newsfeed: React.FC = () => {
  const [sortingSelection, setSortingSelection] = useState<
    "top" | "best" | "new"
  >("top");

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
