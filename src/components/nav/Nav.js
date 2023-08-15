import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/LOGO.png';
import './nav.scss';
const Nav = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img className='logo' src={logo} alt="logo de l'agence kasa" />
      </div>
      <div className='navbar-link'>
        <NavLink to='/'>Accueil</NavLink>
        <NavLink to='/about'>A Propos</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
