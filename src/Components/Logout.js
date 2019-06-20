import React from 'react';
import firebase from '../config/firebase.js'
import {Link} from 'react-router-dom'

class Logout extends React.Component {
  logout = () => {
        firebase.auth().signOut();
    }

  render () {
    return (
      <Link to="/Login" onClick={this.logout}>Cerrar Sesión</Link>
    )
  }
}


export default Logout
