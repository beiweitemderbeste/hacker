export const fetchTop10TopStoryIDs = async (): Promise<number[]> => {
  try {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    );
    const data: number[] = await response.json();
    const top10StoryIDs: number[] = data.slice(0, 10);
    return top10StoryIDs;
  } catch (error) {
    console.error("Error fetching top10 topstory ids: ", error);
    throw error;
  }
};

export const fetchAllTopStoryIDs = async (): Promise<number[]> => {
  try {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    );
    const data: number[] = await response.json();
    const allTopStoryIDs: number[] = data;
    return allTopStoryIDs;
  } catch (error) {
    console.error("Error fetchin all topstories: ", error);
    throw error;
  }
};

export const fetchTop10BestStoryIDs = async (): Promise<number[]> => {
  try {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty"
    );
    const data: number[] = await response.json();
    const top10StoryIDs: number[] = data.slice(0, 10);
    return top10StoryIDs;
  } catch (error) {
    console.error("Error fetching top10 beststory ids: ", error);
    throw error;
  }
};

export const fetchAllBestStoryIDs = async (): Promise<number[]> => {
  try {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty"
    );
    const data: number[] = await response.json();
    const allBestStoryIDs: number[] = data;
    return allBestStoryIDs;
  } catch (error) {
    console.error("Error fetchin all best stories: ", error);
    throw error;
  }
};

export const fetchTop10NewStoryIDs = async (): Promise<number[]> => {
  try {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"
    );
    const data: number[] = await response.json();
    const top10StoryIDs: number[] = data.slice(0, 10);
    return top10StoryIDs;
  } catch (error) {
    console.error("Error fetching top10 newstory ids: ", error);
    throw error;
  }
};

export const fetchAllNewStoryIDs = async (): Promise<number[]> => {
  try {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"
    );
    const data: number[] = await response.json();
    const allNewStoryIDs: number[] = data;
    return allNewStoryIDs;
  } catch (error) {
    console.error("Error fetchin all new stories: ", error);
    throw error;
  }
};

export const fetchSingleStory = async (storyID: number): Promise<number> => {
  try {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${storyID}.json?print=pretty`
    );
    const data: number = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching single story: ", error);
    throw error;
  }
};

export const fetchSingleComment = async (commentID: number): Promise<number> => {
  try {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${commentID}.json?print=pretty`
    );
    const data: number = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching single comment: ", error);
    throw error
  }
};

export const convertUnixTime = (timestamp: number) => {
  const date: number = timestamp;
  return date;
};

export const shortURL = (link: string) => {
  const url: URL = new URL(link);
  return url.hostname;
};

export const decodeHTMLEntities = (html: string): string => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = html;
  return textarea.value;
};
