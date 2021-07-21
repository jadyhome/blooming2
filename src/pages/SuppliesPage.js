import React from "react";
import "../styles/Global.css";
import "../styles/Products.css";
import GreenNav from "../components/GreenNav";
import GreenScroll from "../components/GreenScroll";
import GreenFooter from "../components/GreenFooter";

const SuppliesPage = () => {
  return (
    <div className="suppliespage">
      <GreenNav />
      <GreenScroll />

      <div className="products-container">
        <div className="supplies-topics">
          <h4 className="one">Potting Mix</h4>
          <h4 className="two">Pest Control</h4>
          <h4 className="three">Plant Food</h4>
          <h4 className="four">Fertilizer</h4>
          <h4 className="five">Planters</h4>
          <h4 className="six">Gardening Tools</h4>
        </div>
        <div className="supplies-products">
          <div className="prod1">
            <img
              src="https://images.pexels.com/photos/6231990/pexels-photo-6231990.jpeg?cs=srgb&dl=pexels-gary-barnes-6231990.jpg&fm=jpg"
              alt="Table with various gardening equipment - Credits: https://www.pexels.com/@gary-barnes"
              className="product1"
            />
            <div className="supply">
              <h1 className="name">watering can</h1>
              <h1 className="price">$20</h1>
            </div>
          </div>
          <div className="prod2">
            <img
              src="https://images.pexels.com/photos/6231726/pexels-photo-6231726.jpeg?cs=srgb&dl=pexels-gary-barnes-6231726.jpg&fm=jpg"
              alt="Gardening tools on wooden bench in yard - Credits: https://www.pexels.com/@gary-barnes"
              className="product2"
            />
            <div className="supply">
              <h1 className="name">gardening tools</h1>
              <h1 className="price">$40</h1>
            </div>
          </div>
          <div className="prod3">
            <img
              src="https://images.pexels.com/photos/6231714/pexels-photo-6231714.jpeg?cs=srgb&dl=pexels-gary-barnes-6231714.jpg&fm=jpg"
              alt="Gardening tools in pot near gloves - Credits: https://www.pexels.com/@gary-barnes"
              className="product3"
            />
            <div className="supply">
              <h1 className="name">beginner's set</h1>
              <h1 className="price">$50</h1>
            </div>
          </div>
          <div className="prod4">
            <img
              src="https://images.pexels.com/photos/6231723/pexels-photo-6231723.jpeg?cs=srgb&dl=pexels-gary-barnes-6231723.jpg&fm=jpg"
              alt="Gardening tools with potted blooming succulent - Credits: https://www.pexels.com/@gary-barnes"
              className="product4"
            />
            <div className="supply">
              <h1 className="name">planter set</h1>
              <h1 className="price">$25</h1>
            </div>
          </div>
        </div>
      </div>

      <GreenFooter />
    </div>
  );
};

export default SuppliesPage;
