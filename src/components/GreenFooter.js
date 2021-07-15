import React from "react";
import "../styles/Main.css";

const GreenFooter = () => {
  return (
    <div className="footer">
      <div className="g-footer">
        <div className="g-footer-info">
          <h1 className="g-subscribe">Subscribe for our newsletter! 😊</h1>
          <div className="email">
            <input
              className="g-email"
              type="email"
              placeholder="enter email address"
            />
            <button className="g-submit" type="submit">
              submit
            </button>
          </div>
        </div>

        <div className="g-divider" />

        <div className="g-more-info">
          <div className="info-links">
            <a
              href="commonplantissues"
              className="g-links"
              rel="noopener noreferrer"
              target="_blank"
              alt="Common Plant Issues"
            >
              Common Plant Issues
            </a>
            <a
              href="shippingandreturns"
              className="g-links"
              rel="noopener noreferrer"
              target="_blank"
              alt="Shipping & Returns"
            >
              Shipping & Returns
            </a>

            <a
              href="aboutus"
              className="g-links"
              rel="noopener noreferrer"
              target="_blank"
              alt="About Us"
            >
              About Us
            </a>
            <a
              href="contactus"
              className="g-links"
              rel="noopener noreferrer"
              target="_blank"
              alt="Contact Us"
            >
              Contact Us
            </a>

            <a
              href="privacypolicy"
              className="g-links"
              rel="noopener noreferrer"
              target="_blank"
              alt="Privacy Policy"
            >
              Privacy Policy
            </a>
            <a
              href="termsofuse"
              className="g-links"
              rel="noopener noreferrer"
              target="_blank"
              alt="Terms of Use"
            >
              Terms of Use
            </a>
          </div>

          <div className="g-storeinfo">
            <h2 className="g-contactus">Email Us or Text Us</h2>
            <h3>
              hihello@blooming.com <br /> (718) 709-6281
            </h3>
            <br />
            <h3>MON - FRI: 11:00am - 7:00pm</h3>
            <h3>SAT: 12:00am - 8:00pm</h3>
            <h3>SUN: Closed</h3>
          </div>
        </div>

        <div className="g-divider" />

        <div className="g-end">
          <div className="g-cr">© blooming 2021</div>
          <div className="g-socials">
            <a
              href="https://www.instagram.com/"
              className="g-instagram"
              rel="noopener noreferrer"
              target="_blank"
              alt="instagram"
            >
              instagram
            </a>
            <a
              href="https://twitter.com/"
              className="g-twitter"
              rel="noopener noreferrer"
              target="_blank"
              alt="twitter"
            >
              twitter
            </a>
            <a
              href="https://www.youtube.com/"
              className="g-youtube"
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

export default GreenFooter;
