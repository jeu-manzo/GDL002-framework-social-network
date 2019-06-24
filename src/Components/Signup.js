import React, { Component } from 'react';
import firebase from '../services/firebase';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      user: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }


  handleSubmit = (e) => {
    e.preventDefault()
    firebase.signup(this.state.email, this.state.password);
  }


  render() {
    return (
      <section className="signup">
      <h1>Crear Cuenta</h1>
      <form action="" className="form-login" autoComplete="off">
        <div className="floating-label">
          <input id="email" className="input-login" type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Correo"/>
          <label htmlFor="email">Correo: </label>
        </div>
        <div className="floating-label">
          <input id="user" className="input-login" type="text" name="user" value={this.state.user} onChange={this.handleChange} placeholder="Usuario"/>
          <label htmlFor="user">Usuario: </label>
        </div>
        <select className="input-login select" name="status"  defaultValue={'default'} >
          <option className="select-option" value="default" disabled hidden>StatusVeg</option>
          <option className="select-option">Vegano</option>
          <option className="select-option">Vegetariano</option>
          <option className="select-option">En transición</option>
          <option className="select-option">Curioso</option>
          <option className="select-option">Anóninomo</option>
        </select>
        <div className="floating-label">
          <input id="password" className="input-login" type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Contraseña"/>
          <label htmlFor="password">Contraseña: </label>
        </div>
        <button className="btn-login" type="submit" onClick={this.handleSubmit}>Crear Cuenta</button>
      </form>
      </section>
    )
  }
}

export default Signup;
