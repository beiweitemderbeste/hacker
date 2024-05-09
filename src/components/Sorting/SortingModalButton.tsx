interface SortingModalButtonProps {
  text: "new" | "best" | "top";
  setSortingSelection: Function;
  setOpenSortingModal: Function;
}

const SortingModalButton: React.FC<SortingModalButtonProps> = ({
  text,
  setSortingSelection,
  setOpenSortingModal,
}) => {
  return (
    <button
      className="text-gray-400 text-lg px-6 py-4 w-full text-left"
      onClick={() => {
        setSortingSelection(text);
        setOpenSortingModal(false);
      }}
    >
      {text}
    </button>
  );
};

export default SortingModalButton;
