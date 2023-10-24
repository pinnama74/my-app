
import React from 'react';
import logo from './images/easy.png';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img className="navbar__icon" src= {logo} alt="icon" />
        <span className="navbar__text"> iServe Service Management Platfrom </span>
      </div>
      <div className="navbar__right">
        <a className="navbar__link" href="/">Home</a>
        <a className="navbar__link" href="/Create">Create</a>
        <a className="navbar__link" href="/List">List</a>
      </div>
    </nav>
  );
}

export default Navbar;


