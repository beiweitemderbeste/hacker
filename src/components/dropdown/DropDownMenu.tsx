import React, { useState } from "react";

import DropDownModal from "./DropDownModal";

import { SortingProps } from "../../types/Sorting.interfaces";

const DropDownMenu: React.FC<SortingProps> = ({ sorting, setSorting }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="p-3 px-6">
      <button onClick={toggleMenu} className="text-white">{sorting} stories ↓</button>
      {open && <DropDownModal setSorting={setSorting} setOpen={setOpen} />}
    </div>
  );
};

export default DropDownMenu;
