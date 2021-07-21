import React from "react";
import "../styles/Global.css";
import "../styles/Cart.css";
import GreenNav from "../components/GreenNav";
import GreenScroll from "../components/GreenScroll";
import GreenFooter from "../components/GreenFooter";

const CartPage = () => {
  return (
    <div className="cartpage">
      <GreenNav />
      <GreenScroll />

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
            <div
              className="items-info"
              style={{ "justify-self": "start", "margin-left": "40px" }}
            >
              <h2>zz plant</h2>
              <h4>
                <em>Zamioculcas Zamiifolia</em>
              </h4>
              <h3>Quantity</h3>
              <h3>x 2</h3>
              <br />
              <h3>Total</h3>
              <h3>$ 30.00</h3>
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
            <div
              className="items-info"
              style={{ "justify-self": "start", "margin-left": "40px" }}
            >
              <h2>beginner's set</h2>
              <h4>
                <em>
                  with a pair of gardening gloves
                  <br />
                  a medium size planter
                  <br />
                  a shovel
                  <br />a pair of pruning shears
                </em>
              </h4>
              <h3>Quantity</h3>
              <h3>x 1</h3>
              <br />
              <h3>Total</h3>
              <h3>$ 50.00</h3>
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
            <div
              className="items-info"
              style={{ "justify-self": "start", "margin-left": "40px" }}
            >
              <h2>canvas tote bag</h2>
              <h4>
                <em>
                  eco friendly canvas tote bag
                  <br />
                  made out of organic cotton
                </em>
              </h4>
              <h3>Quantity</h3>
              <h3>x 4</h3>
              <br />
              <h3>Total</h3>
              <h3>$ 40.00</h3>
            </div>
          </div>
        </div>

        <div className="cart-total">
          <div className="cart-info">
            <h3>
              SHIPPING OPTION:
              <br />
              Standard Shipping
              <br />$ 0.00
            </h3>
            <br />
            <br />
            <br />
            <h3>CURRENCY: USD</h3>
            <br />
            <br />
            <h3>
              MERCHANDISE SUBTOTAL
              <br />$ 120.00
            </h3>
            <br />
            <br />
            <h3>
              SHIPPING & HANDLING
              <br />$ 0.00
            </h3>
            <br />
            <br />
            <h3>
              DISCOUNTS
              <br />$ 0.00
            </h3>
            <br />
            <br />
            <h3>
              SALES TAX (8.875%)
              <br />$ 10.65
            </h3>
            <br />
            <br />
            <br />
            <br />
            <h3>
              GRAND TOTAL
              <br />$ 130.65
            </h3>
            <button className="place-order">place order</button>
          </div>
        </div>
      </div>

      <GreenFooter />
    </div>
  );
};

export default CartPage;
