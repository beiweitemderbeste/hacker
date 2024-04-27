export interface DropDownModalButtonProps {
  text: "top" | "best" | "new";
  setSorting: (sorting: "top" | "best" | "new") => void;
  setOpen: (open: boolean) => void;
}
