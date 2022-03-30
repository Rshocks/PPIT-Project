import React, { Component } from "react";
import StoryItem from './StoryItem';

class Story extends Component
{
    render(){
        return this.props.ShortStories.map((ShortStory)=>{
            return <StoryItem story={ShortStory} key={ShortStory._id} ReloadData={this.props.ReloadData}></StoryItem>
        })
    }
}
export default Story;