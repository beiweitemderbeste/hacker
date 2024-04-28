export interface Story {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  title: string;
  type: "story";
  url: string;
  time: number;
}

export interface StoryProps {
  storyID: number;
  setShowStoryDetails: Story;
}

export interface StoryHeaderProps {
  story: Story;
}

export interface StoryID {
  storyID: number;
}

export interface StoryIDs {
  storyIDs: StoryID[];
}

export interface StoryListProps {
  fetchingFunction: ;
  setShowStoryDetails: ;
}

export interface StoryDetailsProps {
  showStoryDetails: S;
  setShowStoryDetails: ;
}