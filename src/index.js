import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const instanceLocator = "v1:us1:d643a35e-fa70-42ba-8e2d-2b65eef45e6d";
const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/d643a35e-fa70-42ba-8e2d-2b65eef45e6d/token";
const username = "Jonathan";
const roomId = 19288602;


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
