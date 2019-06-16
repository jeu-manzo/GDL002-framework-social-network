import React from 'react';
import Signup from '../Signup';
import Signin from '../Signin';

import logo from '../../images/logoVeganet.png'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
    this.signUp = this.signUp.bind(this);
    this.state = {
      component: <Signin/>
    };
  }

  signIn() {
    this.setState({ component: <Signin/> });
  }

  signUp() {
    this.setState({ component: <Signup/> });
  }

  render () {
    return (
      <div className='login'>
        <section className='left-login'>
          <img src={logo} alt="Logo" />
          <main className="buttons-login">
            <button className="btn-login-left" onClick={this.signIn}>Iniciar Sesión</button>
            <button className="btn-login-left" onClick={this.signUp}>Crear Cuenta</button>
          </main>
        </section>

        <section className='right-login'>
          {this.state.component}
        </section>
      </div>
    )
  }
}

export default Login
