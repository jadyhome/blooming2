import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

const BeigeNav = () => {
  return (
    <header className="beige-navbar">
      <nav className="beige-nav">
        <NavLink to="/plants" className="b-plant">
          Plants
        </NavLink>

        <NavLink
          to="/supplies"
          activeClassName="b-highlighted"
          className="b-supplies"
        >
          Supplies
        </NavLink>

        <NavLink to="/merch" className="b-merch">
          Merch
        </NavLink>

        <NavLink to="/" className="b-title">
          blooming
        </NavLink>

        <NavLink to="/blog" className="b-blog">
          Blog
        </NavLink>

        <NavLink to="/faq" activeClassName="b-highlighted" className="b-faq">
          FAQ
        </NavLink>

        <NavLink to="/cart" className="b-cart">
          Cart
        </NavLink>
      </nav>
    </header>
  );
};

export default BeigeNav;
