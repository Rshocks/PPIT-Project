import React, { Component } from "react";
import axios from 'axios';
import Story  from './Story'

class Results extends Component
{

    state = {
        myStory: []            
    };
    
    constructor(){
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }

    //using axios to get info from my apistory in backend server, returns promise
    componentDidMount(){
        axios.get('http://localhost:4000/api/story')
        .then((response)=>{
            this.setState({myStory: response.data}) //update state with response from url
        })
        .catch((error)=>{
            console.log(error); // catching error if one happens
        });
    }

    ReloadData(){
        axios.get('http://localhost:4000/api/story')
        .then((response)=>{
            this.setState({myStory: response.data})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render(){
        return(
            <div>
                <h1>Results</h1>
                <Story ShortStories={this.state.myStory} ReloadData={this.ReloadData}></Story>
            </div>
        );
    }
}
export default Results;