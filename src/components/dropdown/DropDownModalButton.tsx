import React from "react";

import { DropDownModalBodyProps } from "../../interfaces/dropdown/DropDownModalBodyProps";

const DropDownModalButton: React.FC<DropDownModalBodyProps> = ({
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
