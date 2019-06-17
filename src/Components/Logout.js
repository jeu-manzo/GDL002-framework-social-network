import React from 'react';
import firebase from '../config/firebase.js'

class Logout extends React.Component {
  logout = () => {
        firebase.auth().signOut();
    }

  render () {
    return (
      <button onClick={this.logout}>Cerrar Sesión</button>
    )
  }
}


export default Logout
