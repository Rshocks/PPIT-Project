import React, { Component } from "react";
import axios from "axios";

export class Write extends Component {
    constructor() {
        super();
        //all event binded or error
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeStoryTitle = this.onChangeStoryTitle.bind(this);
        this.onChangeStoryAuthor = this.onChangeStoryAuthor.bind(this);
        this.onChangeStory = this.onChangeStory.bind(this);

        this.state = {
            Title: '',
            Author: '',
            Story: ''
        }
    }

    handleSubmit(event) {
        console.log("Name: " +this.state.Title+
        "Author: " + this.state.Author +
        "Story: " + this.state.Story);
        event.preventDefault();
        this.setState({
            Title:'',
            Author:'',
            Story:''
        });

        const newStory = {
            Title: this.state.Title,
            Author: this.state.Author,
            Story: this.state.Story 
        }
        axios.post('http://localhost:4000/api/story', newStory)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    //setstates holds data for
    onChangeStoryTitle(event) {
        this.setState({
            Title: event.target.value //pull value out of change title
        })
    }
    onChangeStoryAuthor(event){
        this.setState({
            Author: event.target.value
        })
    }
    onChangeStory(event) {
        this.setState({
            Story: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Here you may write your short story</h1>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>Team One</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeStoryTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Team Two</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Author}
                            onChange={this.onChangeStoryAuthor}
                        />
                    </div>
                    <div className="form-group">
                        <label>Results</label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.Story}
                            onChange={this.onChangeStory}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Publish Results"
                            className="btn"></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Write;