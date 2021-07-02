import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

const BeigeNav = () => {
  return (
    <header className="beige-navbar">
      <nav className="beige-nav">
        <NavLink
          to="/plants"
          activeClassName="b-highlighted"
          className="b-plant"
        >
          Plants
        </NavLink>

        <NavLink to="/supplies" className="b-supplies">
          Supplies
        </NavLink>

        <NavLink
          to="/merch"
          activeClassName="b-highlighted"
          className="b-merch"
        >
          Merch
        </NavLink>

        <NavLink to="/" className="b-title">
          blooming
        </NavLink>

        <NavLink to="/blog" activeClassName="b-highlighted" className="b-blog">
          Blog
        </NavLink>

        <NavLink to="/faq" className="b-faq">
          FAQ
        </NavLink>

        <NavLink to="/cart" activeClassName="b-highlighted" className="b-cart">
          Cart
        </NavLink>
      </nav>
    </header>
  );
};

export default BeigeNav;
