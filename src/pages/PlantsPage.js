import React from "react";
import "../styles/Global.css";
import "../styles/Products.css";
import BeigeNav from "../components/BeigeNav";
import BeigeScroll from "../components/BeigeScroll";
import BeigeFooter from "../components/BeigeFooter";

const PlantsPage = () => {
  return (
    <div className="plantspage">
      <BeigeNav />
      <BeigeScroll />

      <div className="products-container">
        <div className="plants-topics">
          <h4 className="one">All Plants</h4>
          <h4 className="two">Beginner's Plants</h4>
          <h4 className="three">Pet-Friendly Plants</h4>
          <h4 className="four">Low-Light Plants</h4>
          <h4 className="five">Direct-Light Plants</h4>
        </div>
        <div className="plants-products">
          <div className="plant1">
            <img
              src="https://images.pexels.com/photos/4503271/pexels-photo-4503271.jpeg?cs=srgb&dl=pexels-cottonbro-4503271.jpg&fm=jpg"
              alt="Potted Plant - Credits: https://www.pexels.com/@cottonbro"
              className="product1"
            />
            <div className="plant">
              <h1 className="name">basil</h1>
              <h1 className="price">$10</h1>
            </div>
          </div>
          <div className="plant2">
            <img
              src="https://images.pexels.com/photos/4503747/pexels-photo-4503747.jpeg?cs=srgb&dl=pexels-cottonbro-4503747.jpg&fm=jpg"
              alt="Person Holding Potted Plant - Credits: https://www.pexels.com/@cottonbro"
              className="product2"
            />
            <div className="plant">
              <h1 className="name">oregano</h1>
              <h1 className="price">$15</h1>
            </div>
          </div>
          <div className="plant4">
            <img
              src="https://images.pexels.com/photos/4503751/pexels-photo-4503751.jpeg?cs=srgb&dl=pexels-cottonbro-4503751.jpg&fm=jpg"
              alt="Person Holding Green Plant in Brown Pot - Credits: https://www.pexels.com/@cottonbro"
              className="product3"
            />
            <div className="plant">
              <h1 className="name">mint</h1>
              <h1 className="price">$10</h1>
            </div>
          </div>
          <div className="plant4">
            <img
              src="https://images.pexels.com/photos/4503744/pexels-photo-4503744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Green Plant on White Ceramic Pot - Credits: https://www.pexels.com/@cottonbro"
              className="product4"
            />
            <div className="plant">
              <h1 className="name">zz plant</h1>
              <h1 className="price">$15</h1>
            </div>
          </div>
        </div>
      </div>

      <BeigeFooter />
    </div>
  );
};

export default PlantsPage;
