export interface DropDownModalProps {
  setSorting: (sorting: "top" | "best" | "new") => void;
  setOpen: (open: boolean) => void;
}

export interface DropDownModalButtonProps {
  text: "top" | "best" | "new";
  setSorting: (sorting: "top" | "best" | "new") => void;
  setOpen: (open: boolean) => void;
}

export interface DropDownModalHeadingProps {
  text: string;
}