import React, { Component } from 'react';
import './App.css';
import Title from './Title';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';



const DUMMY_DATA= [
    {
    senderId: "perborgen",
    text: "who'll win?"
    },
    { 
    senderId: "Jonathan",
    text: "Whats up everyone?"
    }
  ];

class App extends Component {
  state = {
    messages: DUMMY_DATA
  }
  
  render() {
    return (
      <div className="App">
        <Title />
        <MessageList />
        <SendMessageForm messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
