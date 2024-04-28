import React from "react";

import DropDownModalButton from "./DropDownModalButton";

import { DropDownModalProps } from "../../types/Dropdown.interfaces";

const DropDownModalBody: React.FC<DropDownModalProps> = ({
  setSorting,
  setOpen,
}) => {
  return (
    <div className="flex flex-col">
      <DropDownModalButton
        text="new"
        setSorting={setSorting}
        setOpen={setOpen}
      />
      <DropDownModalButton
        text="top"
        setSorting={setSorting}
        setOpen={setOpen}
      />
      <DropDownModalButton
        text="best"
        setSorting={setSorting}
        setOpen={setOpen}
      />
    </div>
  );
};

export default DropDownModalBody;
