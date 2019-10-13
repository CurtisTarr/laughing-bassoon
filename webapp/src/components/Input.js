import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "Anon",
            message: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.updateMessage = this.updateMessage.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        const endpoint = process.env.REACT_APP_API_URL + '/posts'
        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: this.state.user,
                timestamp: new Date().toUTCString(),
                message: this.state.message
            })
        }).then(
            (result) => {
                window.location.reload();
            },
            (error) => {
                window.alert('Something went wrong sending your message!')
            }
        )
    }

    updateUser(event) {
        this.setState({ user: event.target.value })
    }

    updateMessage(event) {
        this.setState({ message: event.target.value })
    }

    render() {
        return (
            <div style={{ padding: "5px" }}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="exampleForm.user">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={this.state.user} onChange={this.updateUser} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="3" value={this.state.message} onChange={this.updateMessage} />
                    </Form.Group>
                    <div class="d-flex justify-content-end">
                        <Button variant="primary" type="submit">Submit</Button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default Input;
