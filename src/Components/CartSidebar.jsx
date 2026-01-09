import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext.jsx";
import { IoCloseOutline } from "react-icons/io5";
import "./CartSidebar.css";

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="cart-overlay" onClick={onClose}></div>

      {/* Sidebar */}
      <div className="cart-sidebar">
        <div className="cart-sidebar-header">
          <h2 className="cart-sidebar-title">Cart ({getTotalItems()})</h2>
          <button className="cart-close-btn" onClick={onClose}>
            <IoCloseOutline size={24} />
          </button>
        </div>

        <div className="cart-sidebar-content">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is empty</p>
              <Link to="/shop" className="browse-shop-btn" onClick={onClose}>
                Browse Shop
              </Link>
            </div>
          ) : (
            <>
              <div className="cart-items-list">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />
                    <div className="cart-item-info">
                      <div className="cart-item-header">
                        <h3 className="cart-item-name">{item.name}</h3>
                        <p className="cart-item-price">{item.priceDisplay}</p>
                      </div>
                      <p className="cart-item-size">Size: {item.size}</p>
                      <div className="cart-item-quantity">
                        <button
                          className="quantity-btn-decrease"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          −
                        </button>
                        <span className="quantity-value">{item.quantity}</span>
                        <button
                          className="quantity-btn-increase"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      className="cart-item-remove"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-sidebar-footer">
                <div className="cart-subtotal">
                  <span className="cart-subtotal-label">Subtotal</span>
                  <span className="cart-subtotal-price">
                    ₹{getTotalPrice().toLocaleString()}
                  </span>
                </div>
                <Link
                  to="/cart"
                  className="cart-checkout-btn"
                  onClick={onClose}
                >
                  Checkout
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
