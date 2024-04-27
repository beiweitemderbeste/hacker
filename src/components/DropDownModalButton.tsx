import React from "react";

import { DropDownModalButtonProps } from "../interfaces/DropDownModalButtonProps";

const DropDownModalButton: React.FC<DropDownModalButtonProps> = ({ setSorting, setOpen }) => {
  return (
    <div className="flex flex-col">
      <button
        className="text-gray-400 text-lg px-6 py-4 w-full text-left"
        onClick={() => {
          setSorting("new");
          setOpen(false);
        }}
      >
        new
      </button>
      <button
        className="text-gray-400 text-lg px-6 py-4 w-full text-left"
        onClick={() => {
          setSorting("top");
          setOpen(false);
        }}
      >
        top
      </button>
      <button
        className="text-gray-400 text-lg px-6 py-4 w-full text-left"
        onClick={() => {
          setSorting("best");
          setOpen(false);
        }}
      >
        best
      </button>
    </div>
  );
};

export default DropDownModalButton;
