import React, { Component } from 'react';
import firebase from '../services/firebase';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (e)  => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSignin = (e) => {
    e.preventDefault();
    firebase.signin(this.state.email, this.state.password);
  }

  render() {
    return (
      <section className="signin">
        <h1>Inciar Sesión</h1>
        <form className="form-login">
          <div className="floating-label">
            <input id="email" className="input-login" type="email" name="email" placeholder="Correo" value={this.state.email} onChange={this.handleChange}/>
            <label htmlFor="email">Correo: </label>
          </div>
          <div className="floating-label">
            <input id="password" className="input-login" type="password" name="password" placeholder="Contraseña" value={this.state.password} onChange={this.handleChange}/>
            <label htmlFor="password">Contraseña: </label>
          </div>
          <button className="btn-login" type="submit" onClick={this.handleSignin}>Iniciar Sesión</button>
        </form>
      </section>
    )
  }
}

export default Signin;
