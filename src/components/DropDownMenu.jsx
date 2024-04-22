import { useState } from "react";

import DropDownModal from "./DropDownModal";

const DropDownMenu = () => {
  const [open, setOpen] = useState(true);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button onClick={toggleMenu}>new stories ↓</button>
      {open && <DropDownModal />}
    </div>
  );
};

export default DropDownMenu;
