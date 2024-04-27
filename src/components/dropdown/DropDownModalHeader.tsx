import React from "react";

import DropDownModalHeading from "./DropDownModalHeading";

const DropDownModalHeader: React.FC = () => {
  return (
    <div className="border-b border-gray-500">
      <DropDownModalHeading text="sort stories by" />
    </div>
  );
};

export default DropDownModalHeader;
