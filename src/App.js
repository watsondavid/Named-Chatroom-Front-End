import './App.css';
import Log from './Log';
import MessageInput from './MessageInput';
import ConnectScreen from "./ConnectScreen"
import React from 'react';

/// TODO: move to a new file
class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state = {conn: undefined, name: undefined}

    this.onConnect = this.onConnect.bind(this);
  }

  onConnect(conn, name) {
    this.setState({conn: conn, name: name});
  }

  render() {
    let content
    if (this.state.conn === undefined || this.state.name === undefined) {
      content = <ConnectScreen submit={this.onConnect}/>
    } else {
      content = <>
        <h1>Davies Chat Room!</h1>
        <h3>Chatting as {this.state.name}</h3>
        <Log conn={this.state.conn}/>
        <MessageInput conn={this.state.conn}/>
      </>;
    }

    return <div className="App">
      <header className="App-header">
        {content}
      </header>
    </div>
  }
}

export default App;
