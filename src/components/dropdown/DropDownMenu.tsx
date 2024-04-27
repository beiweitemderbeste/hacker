import React, { useState } from "react";

import DropDownModal from "./DropDownModal";

import { DropDownMenuProps } from "../../interfaces/dropdown/DropDownMenuProps"

const DropDownMenu: React.FC<DropDownMenuProps> = ({ sorting, setSorting }) => {
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
