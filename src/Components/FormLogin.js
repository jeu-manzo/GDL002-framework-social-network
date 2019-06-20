import React, {Component} from 'react';
import Signup from './Signup';
import Signin from './Signin';
import logo from '.././images/logoVeganet.png'

class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.signinComponent = this.signinComponent.bind(this);
    this.signupComponent = this.signupComponent.bind(this);
    this.state = {
      component: <Signin/>
    };
  }

  signinComponent() {
    this.setState({ component: <Signin/> });
  }

  signupComponent() {
    this.setState({ component: <Signup/> });
  }

  render () {
    return (
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
    )
  }
};

export default FormLogin
