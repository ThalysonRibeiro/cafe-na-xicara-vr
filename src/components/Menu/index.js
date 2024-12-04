import React, { useState } from "react";
import "./menu.css";
import logo from "../../assets/img/cafe-logo.webp";
import { Link } from "react-router-dom";

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
      <div className={`menu-items ${isMenuOpen ? "show" : ""}`}>
        <Link className="menu__links" to="/">
          home
        </Link>
        <Link className="menu__links" to="/sobre">
          sobre
        </Link>
        <Link className="menu__links" to="/cafe">
          café
        </Link>
        <Link className="menu__links" to="/shop">
          shop
        </Link>
        <Link className="menu__links" to="/contato">
          contato
        </Link>
        <Link className="menu__links button" to="/signin">
          sign in
        </Link>
        <Link className="menu__links button" to="/signup">
          sign up
        </Link>
      </div>
    </nav>
  );
}

export default Menu;
