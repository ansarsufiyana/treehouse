import React from "react";
import "./Navbar.css";
import Name from '../../img/name02.png'

function Navbar() {
  return (
    <div className="app__navbar-main">
      <div className="app__navbar-logo">
        <img src={Name} alt="Name" />
      </div>
      <div className="app__navbar-links">
        <a href="#home">Home</a>
        <a href="">View</a>
        <a href="">Menu</a>
        <a href="">Images</a>
        <a href="">Chef</a>
        <a href="">History</a>
        <a href="">Contact Us</a>
      </div>
    </div>
  );
}

export default Navbar;
