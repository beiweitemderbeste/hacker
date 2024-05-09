const BASE_URL: string = "https://hacker-news.firebaseio.com/v0/";

export const fetchLast10StoryIDs = async (
  sorting: "top" | "best" | "new",
  setStoryIDs: Function
): Promise<void> => {
  const url = BASE_URL + `${sorting}` + "stories.json?print=pretty";
  try {
    const response = await fetch(url);
    const data: number[] = await response.json();
    const storyIDs = data.slice(0, 10);
    setStoryIDs(storyIDs);
  } catch (error) {
    console.error(`error fetching last ten ${sorting} stories: `, error);
  }
};

interface Story {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  time: number;
  title: string;
  type: "story";
  url: string;
}

export const fetchSingleStory = async (
  storyID: number,
  setStoryObject: Function
): Promise<void> => {
  const url = BASE_URL + `item/` + `${storyID}` + ".json?print=pretty";
  try {
    const response = await fetch(url);
    const data: Story = await response.json();
    setStoryObject(data);
  } catch (error) {
    console.error("Error fetching single story: ", error);
  }
};

interface Comment {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: "comment";
}

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

export const convertUnixTime = (timestamp: number) => {
  const date = timestamp;
  return date;
};

export const shortURL = (link: string) => {
  const url = new URL(link);
  return url.hostname;
};

export const decodeHTMLEntities = (html: string) => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = html;
  return textarea.value;
};
