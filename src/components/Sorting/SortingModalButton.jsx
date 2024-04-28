const SortingModalButton = ({ setSortingSelection, setOpenSortingModal }) => {
  return (
    <div className="flex flex-col">
      <button
        className="text-gray-400 text-lg px-6 py-4 w-full text-left"
        onClick={() => {
          setSortingSelection("new");
          setOpenSortingModal(false);
        }}
      >
        new
      </button>
      <button
        className="text-gray-400 text-lg px-6 py-4 w-full text-left"
        onClick={() => {
          setSortingSelection("top");
          setOpenSortingModal(false);
        }}
      >
        top
      </button>
      <button
        className="text-gray-400 text-lg px-6 py-4 w-full text-left"
        onClick={() => {
          setSortingSelection("best");
          setOpenSortingModal(false);
        }}
      >
        best
      </button>
    </div>
  );
};

export default SortingModalButton;
