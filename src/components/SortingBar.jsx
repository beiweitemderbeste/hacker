import DropDownMenu from "./dropdown/DropDownMenu";

const SortingBar = ({ sorting, setSorting }) => {
  return (
    <div className="bg-gray-800 text-white">
      <DropDownMenu sorting={sorting} setSorting={setSorting} />
    </div>
  );
};

export default SortingBar;
