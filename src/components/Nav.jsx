// src/components/Nav.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import LibraryLogo from "../assets/Library.svg";

function Nav({ numberOfItems = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const firstMobileLinkRef = useRef(null);

  const openMenu = () => {
    document.body.classList.add("menu--open");
    setMenuOpen(true);
  };

  const closeMenu = () => {
    document.body.classList.remove("menu--open");
    setMenuOpen(false);
  };

  // Close on ESC and move focus to first item when opened
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    if (menuOpen) {
      document.addEventListener("keydown", onKeyDown);
      // focus first link in the mobile menu for a11y
      setTimeout(() => firstMobileLinkRef.current?.focus(), 0);
    }
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <nav className="nav" role="navigation" aria-label="Primary">
      <div className="nav__container">
        {/* Brand / Logo */}
        <Link to="/" className="brand" onClick={closeMenu} aria-label="Library Home">
          <img className="logo" src={LibraryLogo} alt="Library logo" />
        </Link>

        {/* Desktop links */}
        <ul className="nav__list">
          <li>
            <NavLink
              to="/"
              exact
              className="nav__link"
              activeClassName="nav__link--active"
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books"
              className="nav__link"
              activeClassName="nav__link--active"
              onClick={closeMenu}
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="nav__link"
              activeClassName="nav__link--active"
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
          <li className="nav__icon">
            <NavLink
              to="/cart"
              className="nav__link"
              activeClassName="nav__link--active"
              onClick={closeMenu}
              aria-label="Cart"
            >
              <FontAwesomeIcon icon={faShoppingCart} />
              {numberOfItems > 0 && (
                <span className="cart__length">{numberOfItems}</span>
              )}
            </NavLink>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="btn__menu"
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen ? "true" : "false"}
          aria-controls="mobile-nav"
          onClick={openMenu}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* Mobile full-screen overlay – only render when open */}
      {menuOpen && (
        <div className="menu__backdrop" role="dialog" aria-modal="true">
          <button
            className="btn__menu btn__menu--close"
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            ×
          </button>

          <ul id="mobile-nav" className="menu__links" aria-label="Mobile Navigation">
            <li className="menu__list">
              <NavLink
                to="/"
                exact
                className="menu__link"
                onClick={closeMenu}
                ref={firstMobileLinkRef}
              >
                Home
              </NavLink>
            </li>
            <li className="menu__list">
              <NavLink to="/books" className="menu__link" onClick={closeMenu}>
                Books
              </NavLink>
            </li>
            <li className="menu__list">
              <NavLink to="/cart" className="menu__link" onClick={closeMenu}>
                <FontAwesomeIcon icon={faShoppingCart} /> Cart
                {numberOfItems > 0 && (
                  <span className="cart__length" style={{ marginLeft: 8 }}>
                    {numberOfItems}
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
