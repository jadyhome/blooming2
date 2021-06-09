import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <header className="navbar">
      <nav className="nav">
        <NavLink to="/plants" className="plant">
          Plants
        </NavLink>

        <NavLink to="/supplies" className="supplies">
          Supplies
        </NavLink>

        <NavLink to="/merch" className="merch">
          Merch
        </NavLink>

        <NavLink to="/" className="title">
          blooming
        </NavLink>

        <NavLink to="/faq" className="faq">
          FAQ
        </NavLink>

        <NavLink to="/blog" className="blog">
          Blog
        </NavLink>

        <NavLink to="/cart" className="cart">
          Cart
        </NavLink>
      </nav>
    </header>
  );
};

export default Nav;
