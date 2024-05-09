import { useState } from "react";

import SortingModal from "./SortingModal";

interface SortingMenuProps {
  sortingSelection: "top" | "best" | "new";
  setSortingSelection: Function;
}

const SortingMenu: React.FC<SortingMenuProps> = ({
  sortingSelection,
  setSortingSelection,
}) => {
  const [openSortingModal, setOpenSortingModal] = useState(false);

  const toggleMenu = () => {
    setOpenSortingModal(!openSortingModal);
  };

  return (
    <div className="p-3 px-6">
      <button onClick={toggleMenu} className="text-white">
        {sortingSelection} stories ↓
      </button>
      {openSortingModal && (
        <SortingModal
          setSortingSelection={setSortingSelection}
          setOpenSortingModal={setOpenSortingModal}
        />
      )}
    </div>
  );
};

export default SortingMenu;
