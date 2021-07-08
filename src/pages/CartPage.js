import React from "react";
import "../styles/Global.css";
import BeigeNav from "../components/BeigeNav";
import BeigeFooter from "../components/BeigeFooter";

const CartPage = () => {
  return (
    <div className="cartpage">
      <BeigeNav />

      <BeigeFooter />
    </div>
  );
};

export default CartPage;
