import React from 'react';
import dumbell from '../../assets/icon-dumbell.svg';
import bike from '../../assets/icon-bike.svg';
import meditation from '../../assets/icon-meditation.svg';
import swimming from '../../assets/icon-swimming.svg';
import { NavLink } from 'react-router-dom';

/**
 * Create the vertical Navbar
 *
 */
export function LeftNav() {
  return (
    <nav className="left-nav">
      <div className="container">
        <NavLink className="icons" to="#">
          <img src={meditation} alt="Meditation" />
        </NavLink>
        <NavLink className="icons" to="#">
          <img src={swimming} alt="Swimming" />
        </NavLink>
        <NavLink className="icons" to="#">
          <img src={bike} alt="Bike" />
        </NavLink>
        <NavLink className="icons" to="#">
          <img src={dumbell} alt="Dumbell" />
        </NavLink>
      </div>
      <span className="copyright">Copyright, SportSee 2020</span>
    </nav>
  );
}
