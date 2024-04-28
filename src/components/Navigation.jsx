import DropDownMenu from "./Dropdown/DropDownMenu";

const Navigation = ({ sorting, setSorting }) => {
  return (
    <nav className="bg-gray-800">
      <DropDownMenu sorting={sorting} setSorting={setSorting} />
    </nav>
  );
};

export default Navigation;
