import React from "react";
import "../styles/Main.css";

const BeigeFooter = () => {
  return (
    <div className="footer">
      <div className="b-footer">
        <div className="b-footer-info">
          <h1 className="b-subscribe">Subscribe for our newsletter! 😊</h1>
          <div className="email">
            <input
              className="b-email"
              type="email"
              placeholder="enter email address"
            />
            <button className="b-submit" type="submit">
              submit
            </button>
          </div>
        </div>

        <div className="b-divider" />

        <div className="b-more-info">
          <div className="info-links">
            <a
              href="commonplantissues"
              className="b-links"
              rel="noopener noreferrer"
              target="_blank"
              alt="Common Plant Issues"
            >
              Common Plant Issues
            </a>
            <a
              href="shippingandreturns"
              className="b-links"
              rel="noopener noreferrer"
              target="_blank"
              alt="Shipping & Returns"
            >
              Shipping & Returns
            </a>

            <a
              href="aboutus"
              className="b-links"
              rel="noopener noreferrer"
              target="_blank"
              alt="About Us"
            >
              About Us
            </a>
            <a
              href="contactus"
              className="b-links"
              rel="noopener noreferrer"
              target="_blank"
              alt="Contact Us"
            >
              Contact Us
            </a>

            <a
              href="privacypolicy"
              className="b-links"
              rel="noopener noreferrer"
              target="_blank"
              alt="Privacy Policy"
            >
              Privacy Policy
            </a>
            <a
              href="termsofuse"
              className="b-links"
              rel="noopener noreferrer"
              target="_blank"
              alt="Terms of Use"
            >
              Terms of Use
            </a>
          </div>

          <div className="b-storeinfo">
            <h2 className="b-contactus">Email Us or Text Us</h2>
            <h3>
              hihello@blooming.com <br /> (718) 709-6281
            </h3>
            <br />
            <h3>MON - FRI: 11:00am - 7:00pm</h3>
            <h3>SAT: 12:00am - 8:00pm</h3>
            <h3>SUN: Closed</h3>
          </div>
        </div>

        <div className="b-divider" />

        <div className="b-end">
          <div className="b-cr">© blooming 2021</div>
          <div className="b-socials">
            <a
              href="https://www.instagram.com/"
              className="b-instagram"
              rel="noopener noreferrer"
              target="_blank"
              alt="instagram"
            >
              instagram
            </a>
            <a
              href="https://twitter.com/"
              className="b-twitter"
              rel="noopener noreferrer"
              target="_blank"
              alt="twitter"
            >
              twitter
            </a>
            <a
              href="https://www.youtube.com/"
              className="b-youtube"
              rel="noopener noreferrer"
              target="_blank"
              alt="youtube"
            >
              youtube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeigeFooter;
