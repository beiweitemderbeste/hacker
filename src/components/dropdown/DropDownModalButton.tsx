import React from "react";

import { DropDownModalButtonProps } from "../../interfaces/dropdown/DropDownModalButtonProps";

const DropDownModalButton: React.FC<DropDownModalButtonProps> = ({ text, setSorting, setOpen }) => {
  return (
    <div className="flex flex-col">
      <button
        className="text-gray-400 text-lg px-6 py-4 w-full text-left"
        onClick={() => {
          setSorting(text);
          setOpen(false);
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default DropDownModalButton;
