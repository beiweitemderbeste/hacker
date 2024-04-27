import React from "react";

import { DropDownModalHeadingProps } from "../../interfaces/dropdown/DropDownModalHeadingProps";

const DropDownModalHeading: React.FC<DropDownModalHeadingProps> = ({ text }) => {
  return <p className="text-gray-400 text-lg px-4 p-2 ml-2">{text}</p>;
};

export default DropDownModalHeading;
