import React from "react";

import { StoryHeaderProps } from "../../types/Story.interfaces";

const StoryFooter: React.FC<StoryHeaderProps> = ({ story }) => {
  return (
    <div className="flex items-center space-x-4">
      <p className="text-white border border-gray-700 rounded-xl px-3 py-1">⬆ {story.score}</p>
      {story.kids ? (
        <p className="text-white border border-gray-700 rounded-xl px-3 py-1">
          {story.kids.length}
          {story.kids.length === 1 ? " comment" : " comments"}
        </p>
      ) : (
        <p className="text-white border border-gray-700 rounded-xl px-3 py-1">0 comments</p>
      )}
    </div>
  );
};

export default StoryFooter;
