export interface CommentBodyProps {
  comment: {
    by: string;
    id: number;
    kids: number[];
    parent: number;
    text: string;
    time: number;
    type: "comment";
  };
}
