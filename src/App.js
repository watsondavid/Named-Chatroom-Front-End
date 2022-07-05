import './App.css';
import Log from './Log';
import MessageInput from './MessageInput';
import React from 'react';

/// TODO: move to a new file

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Davies Chat Room!</h1>
        <h3>Come say 'Hello'!</h3>
        <Log conn={props.conn}/>
        <MessageInput conn={props.conn}/>
      </header>
    </div>
  );
}

export default App;
