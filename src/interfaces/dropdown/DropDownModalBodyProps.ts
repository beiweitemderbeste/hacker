export interface DropDownModalBodyProps {
  text: "top" | "best" | "new";
  setSorting: (sorting: "top" | "best" | "new") => void;
  setOpen: (open: boolean) => void;
}
