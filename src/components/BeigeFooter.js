import React from "react";
import "../styles/Main.css";

const BeigeFooter = () => {
  return (
    <div className="b-footer">
      <div className="b-footer-info">
        <h1 className="b-subscribe">Subscribe for our newsletter! 😊</h1>
        <div className="email">
          <input className="b-email" type="email" placeholder="enter email address" />
          <button className="b-submit" type="submit">submit</button>
        </div>
      </div>
    </div>
  );
};

export default BeigeFooter;
