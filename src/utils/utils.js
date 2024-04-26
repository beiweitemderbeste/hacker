export const fetchTop10TopStoryIDs = async () => {
  try {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    );
    const data = await response.json();
    const top10StoryIDs = data.slice(0, 10);
    return top10StoryIDs;
  } catch (error) {
    console.error("Error fetching top10 topstory ids: ", error);
  }
};

export const fetchAllTopStoryIDs = async () => {
  try {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    );
    const data = await response.json();
    const allTopStoryIDs = data;
    return allTopStoryIDs;
  } catch (error) {
    console.error("Error fetchin all topstories: ", error);
  }
};

export const fetchTop10BestStoryIDs = async () => {
  try {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty"
    );
    const data = await response.json();
    const top10StoryIDs = data.slice(0, 10);
    return top10StoryIDs;
  } catch (error) {
    console.error("Error fetching top10 beststory ids: ", error);
  }
};

export const fetchAllBestStoryIDs = async () => {
  try {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty"
    );
    const data = await response.json();
    const allBestStoryIDs = data;
    return allBestStoryIDs;
  } catch (error) {
    console.error("Error fetchin all best stories: ", error);
  }
};

export const fetchTop10NewStoryIDs = async () => {
  try {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"
    );
    const data = await response.json();
    const top10StoryIDs = data.slice(0, 10);
    return top10StoryIDs;
  } catch (error) {
    console.error("Error fetching top10 newstory ids: ", error);
  }
};

export const fetchAllNewStoryIDs = async () => {
  try {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"
    );
    const data = await response.json();
    const allNewStoryIDs = data;
    return allNewStoryIDs;
  } catch (error) {
    console.error("Error fetchin all new stories: ", error);
  }
};

export const fetchSingleStory = async (storyID) => {
  try {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${storyID}.json?print=pretty`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching single story: ", error);
  }
};

export const fetchSingleComment = async (commentID) => {
  try {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${commentID}.json?print=pretty`
    );
    const data = await response.json();
    return data;
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
  const textarea = document.createElement('textarea');
  textarea.innerHTML = html;
  return textarea.value;
};
