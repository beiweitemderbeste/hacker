import { useState } from "react";

import DropDownModal from "./DropDownModal";

const DropDownMenu = ({ sorting, setSorting }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button onClick={toggleMenu}>{sorting} stories ↓</button>
      {open && <DropDownModal setSorting={setSorting} setOpen={setOpen} />}
    </div>
  );
};

export default DropDownMenu;
