import SortingMenu from "./Sorting/SortingMenu";

const Navigation = ({ sortingSelection, setSortingSelection }) => {
  return (
    <nav className="bg-gray-800">
      <SortingMenu sortingSelection={sortingSelection} setSortingSelection={setSortingSelection} />
    </nav>
  );
};

export default Navigation;
