import React, { useState } from "react";
import "./menu.css";
import logo from "../../assets/img/cafe-logo.webp";

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="menu">
      <div className="logo">
        <img src={logo} alt="logo do site" />
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? "change" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "change" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "change" : ""}`}></div>
      </div>
      <ul className={`menu-items ${isMenuOpen ? "show" : ""}`}>
        <li className="menu__links">home</li>
        <li className="menu__links">sobre</li>
        <li className="menu__links">café</li>
        <li className="menu__links">shop</li>
        <li className="menu__links">contato</li>
        <li className="menu__links button">sign in</li>
        <li className="menu__links button">sign up</li>
      </ul>
    </nav>
  );
}

export default Menu;
