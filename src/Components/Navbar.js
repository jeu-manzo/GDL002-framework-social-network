import React, {Component} from 'react';
import Logout from './Logout';
import logo from '../images/logo-bco.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
  render () {
    return (
      <nav className="navbar">
        <section className="section-navbar">
          <img src={logo} alt="Logo" className="logo" />
          <div className="searcher">
            <input type="search" placeholder="Buscar" className="search-input" />
            <button className="search-btn"><FontAwesomeIcon icon={faSearch} /></button>
          </div>
        </section>
        <ul>
          <li><a href="/home" >Foto</a></li>
          <li><a href="/home" >Usuario</a></li>
          <li><a href="/home" >Inicio</a></li>
          <li><a href="/home" aria-haspopup="true">Productos</a>
          <ul className="dropdown" aria-label="submenu">
            <li><a href="/home" >Buscar Producto</a></li>
            <li><a href="/home" >Agregar Producto</a></li>
            <li><a href="/home" >Mis Listas</a></li>
          </ul>
          </li>
          <li><a href="/home" aria-haspopup="true"><FontAwesomeIcon icon={faCaretDown} /></a>
            <ul className="dropdown" aria-label="submenu">
              <li><a href="/home" >Ajustes</a></li>
              <li><Logout/></li>
            </ul>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;
