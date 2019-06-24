import React from 'react';
import firebase from '../services/firebase';
import {Link} from 'react-router-dom';

class Logout extends React.Component {

  handleLogout = (e) => {
    e.preventDefault();
    firebase.logout();
  }

  render () {
    return (
      <Link to="/login" onClick={this.handleLogout}>Cerrar Sesión</Link>
    )
  }
}


export default Logout
