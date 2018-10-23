import React, { Component } from 'react';
import './App.css';
import Title from './Title';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';
import { ChatManager, TokenProvider } from '@pusher/chatkit';
import Footer from './Footer';

const instanceLocator = "v1:us1:d643a35e-fa70-42ba-8e2d-2b65eef45e6d";
const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/d643a35e-fa70-42ba-8e2d-2b65eef45e6d/token";
const username = "Jonathan";
const roomId = 19288602;

  

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            messages: []
        }
        this.sendMessage = this.sendMessage.bind(this)
    } 
    
    componentDidMount() {
        const chatManager = new ChatManager({
            instanceLocator: instanceLocator,
            userId: 'Jonathan',
            tokenProvider: new TokenProvider({
                url: testToken
            })
        })
        
        chatManager.connect()
        .then(currentUser => {
            this.currentUser = currentUser
            this.currentUser.subscribeToRoom({
            roomId: roomId,
            hooks: {
                onNewMessage: message => {

                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                }
            }
        })
      })
    }
    
    sendMessage(text) {
        this.currentUser.sendMessage({
            text,
            roomId: roomId
        })
    }
    
    render() {
        return (
            <div className="app">
              <Title />
              <MessageList 
                  roomId={this.state.roomId}
                  messages={this.state.messages} />
              <SendMessageForm
                  sendMessage={this.sendMessage} />
              <Footer />
            </div>
        );
    }
}

export default App;
