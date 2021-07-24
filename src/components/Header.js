import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">storage</i></span>
    <ul className="main-nav">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/products">Products</NavLink></li>
      <li><NavLink to="/catalog">Catalog</NavLink></li>
      <li><NavLink to="/clients">Clients</NavLink></li>
    </ul>    
  </header>
);

export default Header;