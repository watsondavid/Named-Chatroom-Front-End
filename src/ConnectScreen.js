import React from 'react';

class ConnetScreen extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = { name: "" }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.submit = props.submit
    }

    handleChange(event) {
        this.setState({name: event.target.value});
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.name);

        var conn = new WebSocket("ws://" + document.location.host + "/api/connect?name=" + this.state.name);
        this.submit(conn, this.state.name);
        event.preventDefault();
    }

    render() {
        return <div class="card bg-dark text-light">
            <h1>Welcome to Davies Chat Room.</h1>
            <p>Please enter your name:</p>
            <form onSubmit={this.handleSubmit}>
                <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    }
}

export default ConnetScreen;