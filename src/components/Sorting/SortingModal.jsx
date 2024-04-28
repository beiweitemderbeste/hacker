import SortingModalHeader from "./SortingModalHeader";
import SortingModalBody from "./SortingModalBody";

const SortingModal = ({ setSortingSelection, setOpenSortingModal }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 overflow-y-auto bg-gray-800">
      <SortingModalHeader />
      <SortingModalBody setSortingSelection={setSortingSelection} setOpenSortingModal={setOpenSortingModal} />
    </div>
  );
};

export default SortingModal;
