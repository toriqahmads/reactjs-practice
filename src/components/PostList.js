import React, { Component } from 'react';
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             errorMsg: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(posts => {
            this.setState({
                posts: posts.data
            })
            console.log(posts)
        })
        .catch(error => {
            console.log(error)
            this.setState({
                errorMsg: "Error while retreiving data"
            })
        })
    }
    
    render() {
        return (
            <div>
                List of Post
                <ol>
                {
                    this.state.posts.length ? 
                    this.state.posts.map(post => <li key={post.id}>{post.title}</li>) : 
                    <p>{this.state.errorMsg}</p>
                }
                </ol>
            </div>
        );
    }
}

export default PostList;