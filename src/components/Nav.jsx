import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; // cart icon
import LibraryLogo from "../assets/Library.svg"; // your logo

function Nav() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="nav">
      <div className="nav__container">
        {/* BRAND */}
        <Link to="/" className="brand" onClick={closeMenu} aria-label="Library Home">
          <img className="logo" src={LibraryLogo} alt="Library logo" />
          <div className="brand__text">
            <p className="brand__title">Library</p>
            <p className="brand__subtitle">Books for everyone</p>
          </div>
        </Link>

        {/* Hamburger */}
        <button
          className="nav__toggle icon-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen(!open)}
        >
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
        </button>

        {/* Links */}
        <ul id="nav-menu" className={`nav__links ${open ? "open" : ""}`}>
          <li className="nav__item">
            <NavLink to="/" className="nav__link" onClick={closeMenu}>Home</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/books" className="nav__link" onClick={closeMenu}>Books</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/contact" className="nav__link" onClick={closeMenu}>Contact</NavLink>
          </li>
          <li className="nav__item nav__icon">
            <NavLink to="/cart" className="nav__link" onClick={closeMenu}>
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              <span className="cart__length">0</span>
            </NavLink>
          </li>

          {/* Close button (mobile) */}
          <button className="nav__close" aria-label="Close menu" onClick={closeMenu}>×</button>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
