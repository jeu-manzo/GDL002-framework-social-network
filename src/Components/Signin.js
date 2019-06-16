import React, { Component } from 'react';


class signIn extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: 'Correo',
      password: 'Contraseña'
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <section className="signin">
        <h1>Inciar Sesión</h1>
        <form className="form-login">
          <input className="input-login" type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
          <input className="input-login" type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
          <button className="btn-login" type="submit">Iniciar Sesión</button>
        </form>
      </section>
    )
  }
}

export default signIn;
