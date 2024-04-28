export interface SortingOptions {
  sorting: "top" | "best" | "new";
}

export interface SortingProps {
  sorting: SortingOptions;
  setSorting: (sorting: SortingOptions) => void;
}