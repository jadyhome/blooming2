import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

const GreenNav = () => {
  return (
    <header className="green-navbar">
      <nav className="green-nav">
        <NavLink
          to="/plants"
          activeClassName="g-highlighted"
          className="g-plant"
        >
          Plants
        </NavLink>

        <NavLink to="/supplies" className="g-supplies">
          Supplies
        </NavLink>

        <NavLink
          to="/merch"
          activeClassName="g-highlighted"
          className="g-merch"
        >
          Merch
        </NavLink>

        <NavLink to="/" className="g-title">
          blooming
        </NavLink>

        <NavLink to="/blog" activeClassName="g-highlighted" className="g-blog">
          Blog
        </NavLink>

        <NavLink to="/faq" className="g-faq">
          FAQ
        </NavLink>

        <NavLink to="/cart" activeClassName="g-highlighted" className="g-cart">
          Cart
        </NavLink>
      </nav>
    </header>
  );
};

export default GreenNav;
