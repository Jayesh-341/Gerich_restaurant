import React from 'react';
import { GitHamburgerMenu } from 'react-icons/gi';
import { MidOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

//Using bem in styling 
const Navbar = () => (
  <nav className="app__navbar">
    <div className="app_navbar-logo">
      <img src={images.gericht} alt="app logo" />
    </div>
    <ul className="app__navbar-links">
      <li className="p-opensans"><a href="#home">Home</a></li>
      <li className="p-opensans"><a href="#about">About</a></li>
      <li className="p-opensans"><a href="#menu">Menu</a></li>
      <li className="p-opensans"><a href="#awards">Awards</a></li>
      <li className="p-opensans"><a href="#contact">Contact</a></li>

    </ul>
    Navbar
    </nav>
);

export default Navbar;
