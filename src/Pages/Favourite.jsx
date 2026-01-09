import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../Context/FavoritesContext.jsx";
import { useCart } from "../Context/CartContext.jsx";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import "./Favourite.css";

const Favourite = () => {
  const { favorites, isFavorite, toggleFavorite } = useFavorites();
  const { addToCart, getCartItem, updateQuantity } = useCart();
  const [sortBy, setSortBy] = useState("relevance");

  // Sort favorites
  let sortedFavorites = [...favorites];
  if (sortBy === "price-low") {
    sortedFavorites = sortedFavorites.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    sortedFavorites = sortedFavorites.sort((a, b) => b.price - a.price);
  } else if (sortBy === "name") {
    sortedFavorites = sortedFavorites.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="favourite-page">
      <h1 className="favourite-title">Favorites</h1>

      {/* Breadcrumb and Sort */}
      <div className="favourite-header">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span> &gt; </span>
          <Link to="/shop">Shop</Link>
          <span> &gt; </span>
          <span className="breadcrumb-active">Favorites</span>
        </div>
        {favorites.length > 0 && (
          <div className="sort-by">
            <span>Sort by </span>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="relevance">Relevance</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
          </div>
        )}
      </div>

      {/* Content */}
      {favorites.length === 0 ? (
        <div className="favourite-empty">
          <p className="empty-message">Tap the heart on a product to save it here</p>
          <Link to="/shop" className="browse-shop-link">Browse Shop</Link>
        </div>
      ) : (
        <div className="favourite-content">
          <div className="products-grid">
            {sortedFavorites.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-image-wrapper">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <button
                    className="favorite-btn"
                    onClick={() => toggleFavorite(product)}
                    aria-label="Remove from favorites"
                  >
                    <IoHeart size={24} className="favorite-icon filled" />
                  </button>
                </div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.priceDisplay}</p>
                {getCartItem(product.id) ? (
                  <div className="product-quantity-selector">
                    <button
                      className="quantity-btn-decrease"
                      onClick={() => updateQuantity(product.id, getCartItem(product.id).quantity - 1)}
                    >
                      −
                    </button>
                    <span className="quantity-display">{getCartItem(product.id).quantity}</span>
                    <button
                      className="quantity-btn-increase"
                      onClick={() => updateQuantity(product.id, getCartItem(product.id).quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button className="product-btn" onClick={() => addToCart(product)}>Add to Cart</button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Favourite;
