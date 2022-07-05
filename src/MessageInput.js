import React from 'react';
import './MessageInput.css';

class MessageInput extends React.Component
{
  constructor(props) {
    super(props)
    this.conn = props.conn

    this.state = {pendingMessage: ""}
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({pendingMessage: event.target.value});
  }

  handleSubmit(event) {
    if (this.conn) {
      this.conn.send(this.state.pendingMessage);
    }
    this.setState({pendingMessage: ""})
    event.preventDefault()
  }

  render(){
    const hasMessage = this.state.pendingMessage.length > 0;
    let submit
    if(hasMessage) {
      submit = <input type='submit' class="bg-dark text-light" value='send' />
    } else {
      submit = <input type='submit' class="bg-dark text-light" value='send' disabled/>
    }
    return <div id="MessageInput" class="card"> 
        <form onSubmit={this.handleSubmit}>
        <input type='text' class="bg-dark text-light" value={this.state.pendingMessage} onChange={this.handleChange} placeholder="Enter Message..."/>
        {submit}
        </form>
    </div>
  }
}

export default MessageInput;