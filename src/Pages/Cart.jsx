import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext.jsx";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const navigate = useNavigate();

  return (
    <div className="main-cart-cart-page">
      <h1 className="main-cart-cart-title">Shopping Cart</h1>

      <div className="main-cart-cart-breadcrumb">
        <Link to="/">Home</Link>
        <span> &gt; </span>
        <Link to="/shop">Shop</Link>
        <span> &gt; </span>
        <span className="main-cart-breadcrumb-active">Cart</span>
      </div>

      {cartItems.length === 0 ? (
        <div className="main-cart-cart-empty-state">
          <p className="main-cart-empty-message">Your cart is empty</p>
          <Link to="/shop" className="main-cart-browse-shop-btn">
            Browse Shop
          </Link>
        </div>
      ) : (
        <div className="main-cart-cart-content">
          <div className="main-cart-cart-items-section">
            <div className="main-cart-cart-items-header">
              <h2>Items ({cartItems.length})</h2>
              <button className="main-cart-clear-cart-btn" onClick={clearCart}>
                Clear Cart
              </button>
            </div>

            <div className="main-cart-cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="main-cart-cart-item-card">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="main-cart-cart-item-image"
                  />
                  <div className="main-cart-cart-item-info">
                    <h3 className="main-cart-cart-item-name">{item.name}</h3>
                    <p className="main-cart-cart-item-price">{item.priceDisplay}</p>
                    <div className="main-cart-cart-item-quantity">
                      <button
                        className="main-cart-quantity-btn .main-cart-quantity-btn-decrease"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        −
                      </button>
                      <span className="main-cart-quantity-value">{item.quantity}</span>
                      <button
                        className="main-cart-quantity-btn .main-cart-quantity-btn-increase"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="main-cart-cart-item-total">
                    <p className="main-cart-item-total-price">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </p>
                    <button
                      className="main-cart-remove-item-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="main-cart-cart-summary">
            <h2 className="main-cart-summary-title">Order Summary</h2>
            <div className="main-cart-summary-details">
              <div className="main-cart-summary-row">
                <span>Subtotal:</span>
                <span>₹{getTotalPrice().toLocaleString()}</span>
              </div>
              <div className="main-cart-summary-row">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="main-cart-summary-row main-cart-total-row">
                <span>Total:</span>
                <span>₹{getTotalPrice().toLocaleString()}</span>
              </div>
            </div>
            <button
              className="main-cart-checkout-btn"
              onClick={() => navigate("/opening-soon")}
            >
              Proceed to Pay
            </button>
            <Link to="/shop" className="main-cart-continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
