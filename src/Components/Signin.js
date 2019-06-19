import React, { Component } from 'react';
import firebase from '../config/firebase.js';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.signin = this.signin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  signin(e) {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).catch((error) => {
      alert("Correo y/o Contraseña inválidos");
    });
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
          <button className="btn-login" type="submit" onClick={this.signin}>Iniciar Sesión</button>
        </form>
      </section>
    )
  }
}

export default Signin;
