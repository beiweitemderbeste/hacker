import SortingModalButton from "./SortingModalButton";

interface SortingModalBodyProps {
  setSortingSelection: Function;
  setOpenSortingModal: Function;
}

const SortingModalBody: React.FC<SortingModalBodyProps> = ({
  setSortingSelection,
  setOpenSortingModal,
}) => {
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
