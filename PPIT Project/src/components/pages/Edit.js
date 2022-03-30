import React, { Component } from "react";
import axios from "axios";

export class Edit extends Component {
    constructor() {
        super();
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

        const EDITStory = {
            Title: this.state.Title,
            Author: this.state.Author,
            Story: this.state.Story,
            _id: this.state._id
        }

        axios.put('http://localhost:4000/api/story/'+this.state._id,EDITStory)
        .then(res =>{
            console.log(res.data)
        })
        .catch()
    }

    componentDidMount(){
        console.log(this.props.match.params.id);

        axios.get('https://localhost:4000/api/story/'+this.props.match.params.id)
        .then(response =>{
            this.setState({
                _id:response.data._id,
                Title:response.data.Title,
                Author:response.data.Author,
                Story:response.data.Story

            })
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    onChangeStoryTitle(event) {
        this.setState({
            Title: event.target.value
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
                <h1>Here you can edit your short story</h1>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>Edit Story Title</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeStoryTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit Author</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Story}
                            onChange={this.onChangeStory}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit Story</label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.Author}
                            onChange={this.onChangeStoryAuthor}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Edit Story"
                            className="btn"></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Edit;