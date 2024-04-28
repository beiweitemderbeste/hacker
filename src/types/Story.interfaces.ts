export interface Story {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  title: string;
  type: "story";
  url: string;
}

export interface StoryID {
  storyID: number;
}

export interface StoryIDs {
  storyIDs: number[]
}