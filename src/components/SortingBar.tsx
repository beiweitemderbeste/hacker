import React from "react";

import DropDownMenu from "./dropdown/DropDownMenu";

import { SortingProps } from "../types/Sorting.interfaces";

const SortingBar: React.FC<SortingProps> = ({ sorting, setSorting }) => {
  return (
    <div className="bg-gray-800">
      <DropDownMenu sorting={sorting} setSorting={setSorting} />
    </div>
  );
};

export default SortingBar;
