import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        {/* <a href="/">Home</a>
        <a href="/about">About</a> */}
      </div>
      <div className="navbar__middle">
        <h1 className="navbar__title">Pincode Lookup App</h1>
      </div>
      <div className="navbar__right"></div>
    </nav>
  );
};

export default Navbar;
