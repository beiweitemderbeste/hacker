import { useState } from "react";

import SortingModal from "./SortingModal";

const SortingMenu = ({ sorting, setSorting }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="p-3 px-6">
      <button onClick={toggleMenu} className="text-white">{sorting} stories ↓</button>
      {open && <SortingModal setSorting={setSorting} setOpen={setOpen} />}
    </div>
  );
};

export default SortingMenu;
