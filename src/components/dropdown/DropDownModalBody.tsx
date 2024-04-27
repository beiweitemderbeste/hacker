import React from "react";

import DropDownModalButton from "./DropDownModalButton";

import { DropDownModalButtonProps } from "../../interfaces/dropdown/DropDownModalButtonProps";

const DropDownModalBody: React.FC<DropDownModalButtonProps>= ({ setSorting, setOpen }) => {
  return (
    <div className="flex flex-col">
      <DropDownModalButton text="new" setSorting={setSorting} setOpen={setOpen} />
      <DropDownModalButton text="top" setSorting={setSorting} setOpen={setOpen} />
      <DropDownModalButton text="best" setSorting={setSorting} setOpen={setOpen} />
    </div>
  );
};

export default DropDownModalBody;
