import React from 'react';
import Signup from '../Signup';
import Signin from '../Signin';
import firebase from '../../config/firebase.js'
import Home from './Home'

import logo from '../../images/logoVeganet.png'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.signinComponent = this.signinComponent.bind(this);
    this.signupComponent = this.signupComponent.bind(this);
    this.state = {
      component: <Signin/>,
      user: null
    };
  }

  componentDidMount() {
   this.authListener();
 }

 authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  signinComponent() {
    this.setState({ component: <Signin/> });
  }

  signupComponent() {
    this.setState({ component: <Signup/> });
  }

  render () {
    return (
      <>
        {this.state.user ? (
            <Home/>
            ) :
            (
              <div className='login'>
                <section className='left-login'>
                  <img src={logo} alt="Logo" />
                  <main className="buttons-login">
                    <button className="btn-login-left" onClick={this.signinComponent}>Iniciar Sesión</button>
                    <button className="btn-login-left" onClick={this.signupComponent}>Crear Cuenta</button>
                  </main>
                </section>

                <section className='right-login'>
                  {this.state.component}
                </section>
              </div>
          )}
        </>

    )
  }
}

export default Login
