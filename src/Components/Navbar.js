import React, {Component} from 'react';
import Logout from './Logout';
import logo from '../images/logo-bco.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
  render () {
    return (
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <ul>
          <li><a href="#">Foto</a></li>
          <li><a href="#">Usuario</a></li>
          <li><a href="#">Muro</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#" aria-haspopup="true"><FontAwesomeIcon icon={faCaretDown} /></a>
            <ul className="dropdown" aria-label="submenu">
              <li><a href="#">Ajustes</a></li>
              <li><a href="#"><Logout/></a></li>
            </ul>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;
