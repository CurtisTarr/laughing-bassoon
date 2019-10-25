import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Spinner from 'react-bootstrap/Spinner'

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            posts: []
        };
    }

    componentDidMount() {
        const endpoint = process.env.REACT_APP_API_URL + '/posts'
        fetch(endpoint)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        posts: result.posts.reverse()
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, posts } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <div className="d-flex justify-content-center">
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
            );
        } else {
            return (
                <div>
                    <ul className="col justify-content-center">
                        {posts.map(post => (
                            <div style={{ padding: "10px" }}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{post.user}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{post.timestamp}</Card.Subtitle>
                                        <Card.Text>{post.message}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

export default Posts;