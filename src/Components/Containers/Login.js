import React from 'react';
import firebase from '../../config/firebase.js'
import Home from './Home';
import FormLogin from '../FormLogin';



class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
   this.authListener();
 }

 authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
        console.log(user);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render () {
    return (
      <>
        {this.state.user ? (
            <Home/>
            ) :
            (
              <FormLogin />
            )}
        </>

    )
  }
}

export default Login
