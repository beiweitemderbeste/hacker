interface Comment {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
}

const BASE_URL: string = "https://hacker-news.firebaseio.com/v0/";

export const fetchSingleComment = async (
  commentID: number,
  setCommentObject: Function
): Promise<void> => {
  const url = BASE_URL + `item/` + `${commentID}` + ".json?print=pretty";
  try {
    const response = await fetch(url);
    const data: Comment = await response.json();
    setCommentObject(data);
  } catch (error) {
    console.error("Error fetching single comment: ", error);
  }
};

export const decodeHTMLEntities = (html: string) => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = html;
  return textarea.value;
};
