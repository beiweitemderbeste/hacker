import DropDownModalHeader from "./DropDownModalHeader";
import DropDownModalButton from "./DropDownModalButton";

const DropDownModal = ({ setSorting, setOpen }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 overflow-y-auto bg-gray-800">
      <DropDownModalHeader />
      <DropDownModalButton setSorting={setSorting} setOpen={setOpen} />
    </div>
  );
};

export default DropDownModal;
