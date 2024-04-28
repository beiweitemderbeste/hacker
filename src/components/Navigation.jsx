import SortingMenu from "./Sorting/SortingMenu";

const Navigation = ({ sorting, setSorting }) => {
  return (
    <nav className="bg-gray-800">
      <SortingMenu sorting={sorting} setSorting={setSorting} />
    </nav>
  );
};

export default Navigation;
