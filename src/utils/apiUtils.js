export const fetchTop10TopStories = async () => {
  try {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    );
    const data = await response.json();
    const top10Stories = data.slice(0, 10);
    console.log(top10Stories);
    return top10Stories;
  } catch (error) {
    console.error("Error fetching top10 stories:", error);
  }
};

export const fetchTop100TopStories = async () => {
  try {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    );
    const data = await response.json();
    const top100Stories = data.slice(0, 100);
    return top100Stories;
  } catch (error) {
    console.error("Error fetching top100 stories:", error);
  }
};
