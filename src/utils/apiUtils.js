export const fetchTop10TopStoryIDs = async () => {
  try {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    );
    const data = await response.json();
    const top10StoryIDs = data.slice(0, 10);
    return top10StoryIDs;
  } catch (error) {
    console.error("Error fetching top10 story ids: ", error);
  }
};

export const fetchTop100TopStoryIDs = async () => {
  try {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    );
    const data = await response.json();
    const top100StoryIDs = data.slice(0, 100);
    return top100StoryIDs;
  } catch (error) {
    console.error("Error fetching top100 stories: ", error);
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
