import SortingModalButton from "./SortingModalButton";

const SortingModalBody = ({ setSortingSelection, setOpenSortingModal }) => {
  return (
    <div className="flex flex-col">
      <SortingModalButton
        text="new"
        setSortingSelection={setSortingSelection}
        setOpenSortingModal={setOpenSortingModal}
      />
      <SortingModalButton
        text="best"
        setSortingSelection={setSortingSelection}
        setOpenSortingModal={setOpenSortingModal}
      />
      <SortingModalButton
        text="top"
        setSortingSelection={setSortingSelection}
        setOpenSortingModal={setOpenSortingModal}
      />
    </div>
  );
};

export default SortingModalBody;
