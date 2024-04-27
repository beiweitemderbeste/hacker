import React from "react";

import DropDownMenu from "./dropdown/DropDownMenu";

import { SortingBarProps } from "../interfaces/SortingBarProps";

const SortingBar: React.FC<SortingBarProps> = ({ sorting, setSorting }) => {
  return (
    <div className="bg-gray-800">
      <DropDownMenu sorting={sorting} setSorting={setSorting} />
    </div>
  );
};

export default SortingBar;
