import React from "react";
import "../styles/Global.css";
import "../styles/Products.css";
import BeigeNav from "../components/BeigeNav";
import BeigeFooter from "../components/BeigeFooter";

const MerchPage = () => {
  return (
    <div className="merchpage">
      <BeigeNav />

      <div className="products-container">
        <div className="merch-topics">
          <h4 className="one">T-Shirts</h4>
          <h4 className="two">Hats</h4>
          <h4 className="three">Bags</h4>
          <h4 className="four">Accessories</h4>
          <h4 className="five">Gift Cards</h4>
        </div>
        <div className="merch-products">
          <div className="merch1">
            <img
              src="https://images.pexels.com/photos/4066293/pexels-photo-4066293.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt="Person in Black Crew Neck T-shirt and Blue Denim Jeans - Credits: https://www.pexels.com/@cottonbro"
              className="product1"
            />
            <div className="merch">
              <h1 className="name">t-shirt</h1>
              <h1 className="price">$25</h1>
            </div>
          </div>
          <div className="merch2">
            <img
              src="https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt="Person Holding White Tote Bag - Credits: https://www.pexels.com/@cottonbro"
              className="product2"
            />
            <div className="merch">
              <h1 className="name">canvas tote bag</h1>
              <h1 className="price">$10</h1>
            </div>
          </div>
          <div className="merch3">
            <img
              src="https://images.pexels.com/photos/3738066/pexels-photo-3738066.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt="Person in Black Denim Pants With Gray Plastic Bottle - Credits: https://www.pexels.com/@cottonbro"
              className="product3"
            />
            <div className="merch">
              <h1 className="name">tumbler</h1>
              <h1 className="price">$20</h1>
            </div>
          </div>
          <div className="merch4">
            <img
              src="https://images.pexels.com/photos/3738029/pexels-photo-3738029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Woman In Black Pants Holding Net Bag - Credits: https://www.pexels.com/@cottonbro"
              className="product4"
            />
            <div className="merch">
              <h1 className="name">mesh tote bag</h1>
              <h1 className="price">$15</h1>
            </div>
          </div>
        </div>
      </div>

      <BeigeFooter />
    </div>
  );
};

export default MerchPage;
