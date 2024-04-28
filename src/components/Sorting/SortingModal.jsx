import SortingModalHeader from "./SortingModalHeader";
import SortingModalButton from "./SortingModalButton";

const SortingModal = ({ setSorting, setOpen }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 overflow-y-auto bg-gray-800">
      <SortingModalHeader />
      <SortingModalButton setSorting={setSorting} setOpen={setOpen} />
    </div>
  );
};

export default SortingModal;
