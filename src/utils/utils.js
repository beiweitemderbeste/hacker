const BASE_URL = "https://hacker-news.firebaseio.com/v0/";

export const fetchLast10StoryIDs = async (sorting, setStoryIDs) => {
  const url = BASE_URL + `${sorting}` + "stories.json?print=pretty";
  try {
    const response = await fetch(url);
    const data = await response.json();
    const storyIDs = data.slice(0, 10);
    setStoryIDs(storyIDs);
  } catch (error) {
    console.error(`error fetching last ten ${sorting} stories: `, error);
  }
};

export const fetchAllStoryIDs = async (sorting, setStoryIDs) => {
  const url = BASE_URL + `${sorting}` + "stories.json?print=pretty";
  try {
    const response = await fetch(url);
    const data = await response.json();
    setStoryIDs(data);
  } catch (error) {
    console.error(`error fetching ${sorting} stories: `, error);
  }
};

export const fetchSingleStory = async (storyID, setStoryObject) => {
  const url = BASE_URL + `item/` + `${storyID}` + ".json?print=pretty";
  try {
    const response = await fetch(url);
    const data = await response.json();
    setStoryObject(data);
  } catch (error) {
    console.error("Error fetching single story: ", error);
  }
};

export const fetchSingleComment = async (commentID, setCommentObject) => {
  const url = BASE_URL + `item/` + `${commentID}` + ".json?print=pretty";
  try {
    const response = await fetch(url);
    const data = await response.json();
    setCommentObject(data);
  } catch (error) {
    console.error("Error fetching single comment: ", error);
  }
};

export const convertUnixTime = (timestamp) => {
  const date = timestamp;
  return date;
};

export const shortURL = (link) => {
  const url = new URL(link);
  return url.hostname;
};

export const decodeHTMLEntities = (html) => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = html;
  return textarea.value;
};
