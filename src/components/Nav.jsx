import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import LibraryLogo from "../assets/Library.svg";

function Nav({ numberOfItems = 0 }) {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="nav">
      <div className="nav__container">
        {/* BRAND */}
        <Link to="/" className="brand" onClick={closeMenu} aria-label="Library Home">
          <img className="logo" src={LibraryLogo} alt="Library logo" />
          {/* brand__text intentionally empty per your choice */}
        </Link>

        {/* Hamburger */}
        <button
          className="nav__toggle icon-btn"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen(!open)}
        >
          <FontAwesomeIcon icon={faBars} />
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
            <NavLink to="/cart" className="nav__link" onClick={closeMenu} aria-label="Cart">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              {numberOfItems > 0 && <span className="cart__length">{numberOfItems}</span>}
            </NavLink>
          </li>

          {/* Close button (mobile) – wrap in li for valid markup */}
          <li className="nav__item">
            <button className="nav__close" aria-label="Close menu" onClick={closeMenu}>×</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
