import { useState, useEffect } from "react";

const Story = ({ storyID }) => {
  console.log(storyID);



  const fetchStory = async () => {
    try {
      const response = await fetch(
        "https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty"
      );
      const data = await response.json();
      const story = data;
      console.log(story);
      return story;
    } catch (error) {
      console.error("Error fetching top10 stories:", error);
    }
  };

useEffect(() => {
  const fetchData = async () => {
    try {
      const story = await fetchStory();
      setStory(Story);
    } catch (error) {
      console.error("Error fetching story:", error);
    }
  };

  fetchData();
}, []);

  return (
    <>
      <li>id: {story}</li>
    </>
  );
};

export default Story;
