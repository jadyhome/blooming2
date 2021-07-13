import React from "react";
import "../styles/Global.css";
import "../styles/Cart.css";
import GreenNav from "../components/GreenNav";
import GreenFooter from "../components/GreenFooter";

const CartPage = () => {
  return (
    <div className="cartpage">
      <GreenNav />

      <div className="cart-container">
        <div className="cart-items">
          <div className="items">
            <div className="item-pic">
              <img
                src="https://images.pexels.com/photos/4503744/pexels-photo-4503744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Green Plant on White Ceramic Pot - Credits: https://www.pexels.com/@cottonbro"
                className="item1"
              />
            </div>
            <div className="items-info">
              <h2>zz plant</h2>
              <h4>
                <em>Zamioculcas Zamiifolia</em>
              </h4>
              <h2>Quantity</h2>
              <h3>x 2</h3>
              <br />
              <h2>Total</h2>
              <h3>$30.00</h3>
            </div>
          </div>
          <div className="items">
            <div className="item-pic">
              <img
                src="https://images.pexels.com/photos/6231714/pexels-photo-6231714.jpeg?cs=srgb&dl=pexels-gary-barnes-6231714.jpg&fm=jpg"
                alt="Gardening tools in pot near gloves - Credits: https://www.pexels.com/@gary-barnes"
                className="item2"
              />
            </div>
            <div className="items-info">
              <h2>beginner's set</h2>
              <h4>
                <em>
                  with a pair of gardening gloves
                  <br />
                  a medium size planter
                  <br />
                  a shovel
                  <br />
                  a pair of pruning shears
                  <br />a small rake
                </em>
              </h4>
              <h2>Quantity</h2>
              <h3>x 1</h3>
              <br />
              <h2>Total</h2>
              <h3>$50.00</h3>
            </div>
          </div>
          <div className="items">
            <div className="item-pic">
              <img
                src="https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="Person Holding White Tote Bag - Credits: https://www.pexels.com/@cottonbro"
                className="item3"
              />
            </div>
            <div className="items-info">
              <h2>canvas tote bag</h2>
              <h4>
                <em>
                  eco friendly canvas tote bag
                  <br />
                  made out of organic cotton
                </em>
              </h4>
              <h2>Quantity</h2>
              <h3>x 4</h3>
              <br />
              <h2>Total</h2>
              <h3>$40.00</h3>
            </div>
          </div>
        </div>
        <div className="cart-total"></div>
      </div>

      <GreenFooter />
    </div>
  );
};

export default CartPage;
