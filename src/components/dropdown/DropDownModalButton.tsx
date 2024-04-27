import React from "react";

import { DropDownModalButtonProps } from "../../interfaces/dropdown/DropDownModalButtonProps";

const DropDownModalButton: React.FC<DropDownModalButtonProps> = ({
  text,
  setSorting,
  setOpen,
}) => {
  return (
    <button
      className="text-gray-400 text-lg px-6 py-4 w-full text-left"
      onClick={() => {
        setSorting(text);
        setOpen(false);
      }}
    >
      {text}
    </button>
  );
};

export default DropDownModalButton;
