import DropDownMenu from "./DropDownMenu";

const SortingBar = ({ sorting, setSorting }) => {
  return (
    <>
      <DropDownMenu sorting={sorting} setSorting={setSorting} />
    </>
  );
};

export default SortingBar;
