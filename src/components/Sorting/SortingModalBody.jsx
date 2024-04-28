import SortingModalButton from "./SortingModalButton"

const SortingModalBody = ({ setSortingSelection, setOpenSortingModal }) => {
  return (
    <>
    <SortingModalButton setSortingSelection={setSortingSelection} setOpenSortingModal={setOpenSortingModal} />
    <SortingModalButton setSortingSelection={setSortingSelection} setOpenSortingModal={setOpenSortingModal} />
    <SortingModalButton setSortingSelection={setSortingSelection} setOpenSortingModal={setOpenSortingModal} />
    </>
  )
}

export default SortingModalBody