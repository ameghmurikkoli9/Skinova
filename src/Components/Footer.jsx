import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About */}
        <div className="footer-col">
          <h2 className="footer-logo">About Skinova</h2>
          <p className="footer-text">
            Combining nature and science, we create skincare that nurtures
            your skin and respects the planet. Healthy, radiant skin starts here.
          </p>

          <div className="payment-icons">
            <span> Pay</span>
            <span>Stripe</span>
            <span>Visa</span>
            <span>GPay</span>
          </div>
        </div>

        {/* Pages */}
        <div className="footer-col">
          <h3>Pages</h3>
          <ul>
            <li>
              <NavLink to="/" className="footer-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="footer-link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" className="footer-link">
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="footer-link">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/licensing" className="footer-link">
                Licensing
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Categories</h3>
          <ul>
            <li>
              <NavLink to="/products" className="footer-link">
                All Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/category/cleansers" className="footer-link">
                Cleansers
              </NavLink>
            </li>
            <li>
              <NavLink to="/category/lotions" className="footer-link">
                Lotions
              </NavLink>
            </li>
            <li>
              <NavLink to="/category/moisturizers" className="footer-link">
                Moisturizers
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-col">
          <h3>Support</h3>
          <ul>
            <li>
              <NavLink to="/contact" className="footer-link">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/faqs" className="footer-link">
                FAQs
              </NavLink>
            </li>
            <li>
              <NavLink to="/shipping" className="footer-link">
                Shipping & Delivery
              </NavLink>
            </li>
            <li>
              <NavLink to="/returns" className="footer-link">
                Orders & Returns
              </NavLink>
            </li>
            <li>
              <NavLink to="/terms" className="footer-link">
                Terms & Conditions
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Account */}
        <div className="footer-col">
          <h3>Account</h3>
          <ul>
            <li>
              <NavLink to="/favorites" className="footer-link">
                Favorites
              </NavLink>
            </li>
            <li>
              <NavLink to="/account" className="footer-link">
                My Account
              </NavLink>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © Made by <span>Amegh</span>
      </div>
    </footer>
  );
};

export default Footer;



// Shop
// Blog
// Licensing