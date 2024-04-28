export interface SortingOptions {
  sorting: "top" | "best" | "new";
}

export interface SortingState {
  sorting: SortingOptions;
  setSorting: (sorting: SortingOptions) => void;
}

export interface SortingProps {
  sorting: SortingOptions;
  setSorting: (sorting: SortingOptions) => void;
}