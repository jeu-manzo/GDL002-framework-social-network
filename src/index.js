import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
//styles:
//Containers:
import './styles/index.css';
import './styles/login.css';
import './styles/home.css';
import './styles/profile.css';
//Compoenents:
import './styles/navbar.css';
import './styles/friendsPost.css';
import './styles/userPost.css';
import './styles/createPost.css';



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
