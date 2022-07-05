import React from 'react';
import './Log.css'

class Log extends React.Component
{
    constructor(props) {
        super(props)
        this.maxMessages = 64
        if (props.maxMessages) {
            this.maxMessages = props.maxMessages
        }

        this.conn = props.conn
        if (this.conn) {
            this.conn.onmessage = (evt) => {
                let message = JSON.parse(evt.data)
                this.AddMessage(message)
            };

            this.conn.onclose = (evt) => {
                var item = document.createElement("div");
                item.innerHTML = "<b>Connection closed.</b>";
                this.appendLog(item);

                // TODO: Make a new component show and disable the send button.
                this.AddMessage("Connection Closed!")
            };
        }

        this.state = { messages: [] }
    }

    AddMessage(message) {
        this.setState((state) => {
            let nextState = {
                messages: [...state.messages]
            }
            nextState.messages.push(message);
            return nextState;
        })
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
      
    componentDidMount() {
        this.scrollToBottom();
    }
    
    componentDidUpdate() {
        this.scrollToBottom();
    }

    render(){
        let messages
        if (this.state.messages.length > 0) {
            messages = this.state.messages.map((message, idx) =>
                <div key={idx} class="MessageCard card bg-secondary text-light">
                    <p><b>{message.Sender} @{message.Time}:</b> {message.Content}</p>
                </div>
            )
        }
        return <>
            <div class="MessageLog card bg-dark text-light border border-primary">
                {messages}
                <div style={{ float:"left", clear: "both" }}
                    ref={(el) => { this.messagesEnd = el; }}>
                </div>
            </div>
        </>
    }
}

export default Log;