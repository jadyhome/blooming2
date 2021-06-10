import React from "react";
import "../styles/Main.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <h1 className="subscribe">Subscribe for our newsletter! 😊</h1>
        <div className="email">
          <input type="email" placeholder="enter email address" />
          <button type="submit">submit</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
