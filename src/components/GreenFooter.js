import React from "react";
import "../styles/Main.css";

const GreenFooter = () => {
  return (
    <div className="g-footer">
      <div className="g-footer-info">
        <h1 className="g-subscribe">Subscribe for our newsletter! 😊</h1>
        <div className="email">
          <input className="g-email" type="email" placeholder="enter email address" />
          <button className="g-submit" type="submit">submit</button>
        </div>
      </div>
    </div>
  );
};

export default GreenFooter;
