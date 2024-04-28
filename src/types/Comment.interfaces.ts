export interface Comment {
    by: string;
    id: number;
    kids: number[];
    parent: number;
    text: string;
    time: number;
    type: "comment";
}

export interface CommentID {
  commentID: number;
}

export interface CommentIDs {
  commentIDs: CommentID[];
}
