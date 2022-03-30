import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

class StoryItem extends Component {

    constructor(){
        super();

        this.DeleteStory = this.DeleteStory.bind(this);
    }

    DeleteStory(){
        console.log('Delete: '+this.props.story._id);

        axios.delete("http://localhost:4000/api/story/"+this.props.story._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();
    }


    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.story.Title}</Card.Header>
                    <Card.Body>
                        <blockquote>
                            <footer>
                                {this.props.story.Story}
                            </footer>
                        </blockquote>
                        <Card.Header>{this.props.story.Author}</Card.Header>
                    </Card.Body>
                    <Link to={"/edit/"+ this.props.story._id} className="btn">Edit Results</Link>
                    <br />
                    <Button className="btn" onClick={this.DeleteStory}>Delete Results</Button>
                </Card>
            </div>
        );
    }
}
export default StoryItem;