import DropDownModalHeader from "./DropDownModalHeader.tsx";
import DropDownModalBody from "./DropDownModalBody.tsx"

const DropDownModal = ({ setSorting, setOpen }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 overflow-y-auto bg-gray-800">
      <DropDownModalHeader />
      <DropDownModalBody setSorting={setSorting} setOpen={setOpen} />
    </div>
  );
};

export default DropDownModal;
