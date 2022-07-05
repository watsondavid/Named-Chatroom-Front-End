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
                let message = evt.data
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

    render(){
        /// TODO: Add bootstrap css
        let messages
        if (this.state.messages.length > 0) {
            messages = this.state.messages.map((message, idx) =>
                <div key={idx} class="card bg-secondary text-light">
                    {message}
                </div>
            )
        }
        return <>
            <div id="MessageLog" class="card bg-dark text-light border border-primary">
                {messages}
            </div>
        </>
    }
}

export default Log;