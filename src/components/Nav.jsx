import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import LibraryLogo from "../assets/Library.svg";

function Nav({ numberOfItems = 0 }) {
  function openMenu() {
    document.body.classList.add("menu--open");
  }
  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <nav className="nav">
      <div className="nav__container">
        {/* BRAND */}
        <Link to="/" className="brand" onClick={closeMenu} aria-label="Library Home">
          <img className="logo" src={LibraryLogo} alt="Library logo" />
          {/* Optional brand text if you want it later */}
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="nav__list">
          <li><NavLink to="/" className="nav__link">Home</NavLink></li>
          <li><NavLink to="/books" className="nav__link">Books</NavLink></li>
          <li className="nav__icon">
            <NavLink to="/cart" aria-label="Cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              {numberOfItems > 0 && <span className="cart__length">{numberOfItems}</span>}
            </NavLink>
          </li>
        </ul>

        {/* HAMBURGER (shown by your CSS below 550px) */}
        <button className="btn__menu" type="button" aria-label="Open menu" onClick={openMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* MOBILE OVERLAY (driven by .menu--open on <body>) */}
      <div className="menu__backdrop" role="dialog" aria-modal="true">
        <button
          className="btn__menu btn__menu--close"
          type="button"
          aria-label="Close menu"
          onClick={closeMenu}
        >
          ×
        </button>

        <ul className="menu__links">
          <li className="menu__list">
            <NavLink to="/" className="menu__link" onClick={closeMenu}>Home</NavLink>
          </li>
          <li className="menu__list">
            <NavLink to="/books" className="menu__link" onClick={closeMenu}>Books</NavLink>
          </li>
          <li className="menu__list">
            <NavLink to="/cart" className="menu__link" onClick={closeMenu}>
              <FontAwesomeIcon icon={faShoppingCart} /> Cart
              {numberOfItems > 0 && <span className="cart__length" style={{ marginLeft: 8 }}>{numberOfItems}</span>}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

