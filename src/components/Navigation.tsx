import SortingMenu from "./Sorting/SortingMenu";

interface NavigationProps {
  sortingSelection: "top" | "best" | "new";
  setSortingSelection: Function;
}

const Navigation: React.FC<NavigationProps> = ({
  sortingSelection,
  setSortingSelection,
}) => {
  return (
    <nav className="bg-gray-800">
      <SortingMenu
        sortingSelection={sortingSelection}
        setSortingSelection={setSortingSelection}
      />
    </nav>
  );
};

export default Navigation;
