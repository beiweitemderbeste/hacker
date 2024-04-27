import React from "react";

import DropDownModalHeader from "./DropDownModalHeader";
import DropDownModalBody from "./DropDownModalBody"

import { DropDownModalProps } from "../../interfaces/dropdown/DropDownModalProps.js";

const DropDownModal: React.FC<DropDownModalProps> = ({ setSorting, setOpen }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 overflow-y-auto bg-gray-800">
      <DropDownModalHeader />
      <DropDownModalBody setSorting={setSorting} setOpen={setOpen} />
    </div>
  );
};

export default DropDownModal;
