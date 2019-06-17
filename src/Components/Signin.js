import React, { Component } from 'react';
import firebase from '../config/firebase.js';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.signin = this.signin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: 'Correo',
      password: 'Contraseña'
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  signin(e) {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <section className="signin">
        <h1>Inciar Sesión</h1>
        <form className="form-login">
          <input className="input-login" type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
          <input className="input-login" type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
          <button className="btn-login" type="submit" onClick={this.signin}>Iniciar Sesión</button>
        </form>
      </section>
    )
  }
}

export default Signin;
