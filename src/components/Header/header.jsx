import React from 'react';
import logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';

/**
 * Create the header horizontal Navbar
 *
 * Using Navlink
 *
 */

export function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo SportSee" />
      <nav className="navbar">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="#">Profil</NavLink>
        <NavLink to="#">Réglage</NavLink>
        <NavLink to="#">Communauté</NavLink>
      </nav>
    </div>
  );
}
