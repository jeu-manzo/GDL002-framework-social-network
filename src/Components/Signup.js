import React, { Component } from 'react';


class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: 'Correo',
      password: 'Contraseña',
      user: "Nombre de Usuario"
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <section className="signup">
      <h1>Crear Cuenta</h1>
      <form className="form-login">
        <input className="input-login" type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
        <input className="input-login" type="text" name="user" value={this.state.user} onChange={this.handleChange}/>
        <select className="input-login select" name="status"  defaultValue={'default'} >
          <option className="select-option" value="default" disabled hidden>StatusVeg</option>
          <option className="select-option">Vegano</option>
          <option className="select-option">Vegetariano</option>
          <option className="select-option">En transición</option>
          <option className="select-option">Curioso</option>
          <option className="select-option">Anóninomo</option>
        </select>
        <input className="input-login" type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
        <button className="btn-login" type="submit">Crear Cuenta</button>
      </form>
      </section>
    )
  }
}

export default Signup;
