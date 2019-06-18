import React from 'react';
import firebase from '../config/firebase.js'

class Logout extends React.Component {
  logout = () => {
        firebase.auth().signOut();
    }

  render () {
    return (
      <a href="/home" onClick={this.logout}>Cerrar Sesión</a>
    )
  }
}


export default Logout
