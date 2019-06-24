import React, {Component} from 'react';
import Logout from './Logout';
import logo from '../images/logo-bco.png';
import { Link } from 'react-router-dom';
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
          <li><Link to="/home" >Foto</Link></li>
          <li><Link to="/profile" >Usuario</Link></li>
          <li><Link to="/home" >Inicio</Link></li>
          <li><Link to="/home" aria-haspopup="true">Productos</Link>
          <ul className="dropdown" aria-label="submenu">
            <li><Link to="/home" >Buscar Producto</Link></li>
            <li><Link to="/home" >Agregar Producto</Link></li>
            <li><Link to="/home" >Mis Listas</Link></li>
          </ul>
          </li>
          <li><Link to="/home" aria-haspopup="true"><FontAwesomeIcon icon={faCaretDown} /></Link>
            <ul className="dropdown" aria-label="submenu">
              <li><Link to="/home" >Ajustes</Link></li>
              <li><Logout/></li>
            </ul>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;
