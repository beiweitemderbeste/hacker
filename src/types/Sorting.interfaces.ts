export interface SortingProps {
  sorting: "top" | "best" | "new";
  setSorting: (sorting: "top" | "best" | "new") => void;
}