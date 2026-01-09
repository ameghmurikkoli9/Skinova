import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext.jsx";
import "./Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();

  return (
    <div className="cart-page">
      <h1 className="cart-title">Shopping Cart</h1>

      <div className="cart-breadcrumb">
        <Link to="/">Home</Link>
        <span> &gt; </span>
        <Link to="/shop">Shop</Link>
        <span> &gt; </span>
        <span className="breadcrumb-active">Cart</span>
      </div>

      {cartItems.length === 0 ? (
        <div className="cart-empty-state">
          <p className="empty-message">Your cart is empty</p>
          <Link to="/shop" className="browse-shop-btn">
            Browse Shop
          </Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items-section">
            <div className="cart-items-header">
              <h2>Items ({cartItems.length})</h2>
              <button className="clear-cart-btn" onClick={clearCart}>
                Clear Cart
              </button>
            </div>

            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item-card">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-info">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-price">{item.priceDisplay}</p>
                    <div className="cart-item-quantity">
                      <button
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        −
                      </button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-total">
                    <p className="item-total-price">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </p>
                    <button
                      className="remove-item-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cart-summary">
            <h2 className="summary-title">Order Summary</h2>
            <div className="summary-details">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>₹{getTotalPrice().toLocaleString()}</span>
              </div>
              <div className="summary-row">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="summary-row total-row">
                <span>Total:</span>
                <span>₹{getTotalPrice().toLocaleString()}</span>
              </div>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
            <Link to="/shop" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
