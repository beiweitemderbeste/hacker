export interface SortingBarProps {
  sorting: "top" | "best" | "new";
  setSorting: (sorting: "top" | "best" | "new") => void;
}