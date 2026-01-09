import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../Context/FavoritesContext.jsx";
import { useCart } from "../Context/CartContext.jsx";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import "./CategoryPage.css";

// Import images
import Img1 from "../Images/plantadea-Cv6nQEPFdD8-unsplash.jpg";
import Img2 from "../Images/nataliya-melnychuk-PdzMmdHqN2c-unsplash.jpg";
import Img3 from "../Images/pexels-arina-krasnikova-6663374.jpg";
import Img4 from "../Images/plantadea-Os-uMjAI8KQ-unsplash.jpg";
import Img5 from "../Images/mockup-free-cJw9Ax00tKM-unsplash.jpg";
import Img6 from "../Images/mockup-free-yG84n5PhASY-unsplash.jpg";
import Img7 from "../Images/poko-skincare-aagtJmT7-eo-unsplash.jpg";
import Img8 from "../Images/ela-de-pure-rqK_baq_XgI-unsplash.jpg";
import Img9 from "../Images/ela-de-pure-cp-2q8IXDmw-unsplash.jpg";
import Img10 from "../Images/dushawn-jovic-VSj1b6iU3BU-unsplash.jpg";
import Img11 from "../Images/mahbod-akhzami-GMfdQ4uICk8-unsplash.jpg";
import Img12 from "../Images/aleksandrs-karevs-4fz3fM8Pbnw-unsplash.jpg";
import Img13 from "../Images/lora-seis-hr0Mx4W5AkU-unsplash.jpg";
import LotionImg1 from "../Images/mahbod-akhzami-GMfdQ4uICk8-unsplash.jpg";

// Product data for lotions only
const lotionProducts = [
  {
    id: 7,
    name: "Pure Essence",
    price: 1099,
    priceDisplay: "₹1,099",
    image: Img8,
    category: "lotions",
    tags: ["allSkin", "detox"],
    size: "150ml",
    discount: 12,
  },
  {
    id: 9,
    name: "Glow Elixir",
    price: 1199,
    priceDisplay: "₹1,199",
    image: Img10,
    category: "lotions",
    tags: ["body", "daily"],
    size: "100ml",
    discount: 18,
  },
  {
    id: 10,
    name: "Hydrating Lotion",
    price: 949,
    priceDisplay: "₹949",
    image: Img11,
    category: "lotions",
    tags: ["body", "dry"],
    size: "150ml",
    discount: 0,
  },
];

const Lotion = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const instaCards = [
    { src: Img1, alt: "Natural Glow" },
    { src: Img2, alt: "Fresh Start" },
    { src: Img3, alt: "Daily Ritual" },
    { src: Img4, alt: "Pure Essence" },
    { src: Img5, alt: "Mockup Free 1" },
    { src: Img6, alt: "Mockup Free 2" },
    { src: Img7, alt: "Poko Skincare" },
    { src: Img8, alt: "Ela de Pure 1" },
    { src: Img9, alt: "Ela de Pure 2" },
    { src: Img10, alt: "Dushawn Jovic" },
    { src: Img11, alt: "Mahbod Akhzami" },
    { src: Img12, alt: "Aleksandrs Karevs" },
    { src: Img13, alt: "Lora Seis" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const handleExploreCollection = () => {
    const productsSection = document.querySelector('.category-content');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [filters, setFilters] = useState({
    tags: {
      body: false,
      afterSun: false,
      allSkin: false,
      daily: false,
      detox: false,
      dry: false,
    },
    size: {
      "50ml": false,
      "100ml": false,
      "150ml": false,
      "250ml": false,
    },
    price: {
      under1000: false,
      over1000: false,
    },
    discount: {
      "10-20": false,
      "20-50": false,
    },
  });

  const { isFavorite, toggleFavorite } = useFavorites();
  const { addToCart, getCartItem, updateQuantity } = useCart();
  const [sortBy, setSortBy] = useState("relevance");

  const handleFilterChange = (section, key) => {
    setFilters((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: !prev[section][key],
      },
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      tags: {
        body: false,
        afterSun: false,
        allSkin: false,
        daily: false,
        detox: false,
        dry: false,
      },
      size: {
        "50ml": false,
        "100ml": false,
        "150ml": false,
        "250ml": false,
      },
      price: {
        under1000: false,
        over1000: false,
      },
      discount: {
        "10-20": false,
        "20-50": false,
      },
    });
  };

  const getActiveCount = (section) => {
    return Object.values(filters[section]).filter(Boolean).length;
  };

  // Filter products
  let filteredProducts = lotionProducts.filter((product) => {
    const activeTags = Object.entries(filters.tags)
      .filter(([_, isActive]) => isActive)
      .map(([tag]) => tag);
    if (
      activeTags.length > 0 &&
      !activeTags.some((tag) => product.tags.includes(tag))
    ) {
      return false;
    }

    const activeSizes = Object.entries(filters.size)
      .filter(([_, isActive]) => isActive)
      .map(([size]) => size);
    if (activeSizes.length > 0 && !activeSizes.includes(product.size)) {
      return false;
    }

    if (filters.price.under1000 && product.price >= 1000) {
      return false;
    }
    if (filters.price.over1000 && product.price < 1000) {
      return false;
    }

    if (
      filters.discount["10-20"] &&
      (product.discount < 10 || product.discount > 20)
    ) {
      return false;
    }
    if (
      filters.discount["20-50"] &&
      (product.discount < 20 || product.discount > 50)
    ) {
      return false;
    }

    return true;
  });

  // Sort products
  if (sortBy === "price-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "name") {
    filteredProducts = [...filteredProducts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  return (
    <div className="category-page">
      {/* Hero Section */}
      <div className="category-hero">
        <div className="category-hero-content">
          <h1 className="category-hero-title">Lotions</h1>
          <p className="category-hero-description">
            Lightweight hydration for everyday use. Smooth, non-greasy formulas
            that absorb quickly and leave your skin feeling soft and refreshed.
          </p>
          <button className="explore-btn" onClick={handleExploreCollection}>Explore Collection ↓</button>
        </div>
        <div className="category-hero-image">
          <img src={LotionImg1} alt="Lotions" />
        </div>
      </div>

      {/* Breadcrumb and Sort */}
      <div className="category-header">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span> &gt; </span>
          <Link to="/shop">Shop</Link>
          <span> &gt; </span>
          <span className="breadcrumb-active">Lotions</span>
        </div>
        <div className="sort-by">
          <span>Sort by </span>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="relevance">Relevance</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      {/* Main Content */}
      <div className="category-content">
        {/* Filter Sidebar */}
        <div className="filters-sidebar">
          <div className="filters-header">
            <h2 className="filters-title">Filters</h2>
            <button className="clear-all-btn" onClick={clearAllFilters}>
              Clear all
            </button>
          </div>

          {/* Tags */}
          <div className="filter-section">
            <h3 className="filter-section-title">
              Tags ({getActiveCount("tags")})
            </h3>
            <div className="filter-options">
              <label className="filter-checkbox">
                <input
                  type="checkbox"
                  checked={filters.tags.afterSun}
                  onChange={() => handleFilterChange("tags", "afterSun")}
                />
                <span>After Sun</span>
              </label>
              <label className="filter-checkbox">
                <input
                  type="checkbox"
                  checked={filters.tags.allSkin}
                  onChange={() => handleFilterChange("tags", "allSkin")}
                />
                <span>All Skin</span>
              </label>
              <label className="filter-checkbox">
                <input
                  type="checkbox"
                  checked={filters.tags.body}
                  onChange={() => handleFilterChange("tags", "body")}
                />
                <span>Body</span>
              </label>
              <label className="filter-checkbox">
                <input
                  type="checkbox"
                  checked={filters.tags.daily}
                  onChange={() => handleFilterChange("tags", "daily")}
                />
                <span>Daily</span>
              </label>
              <label className="filter-checkbox">
                <input
                  type="checkbox"
                  checked={filters.tags.detox}
                  onChange={() => handleFilterChange("tags", "detox")}
                />
                <span>Detox</span>
              </label>
              <label className="filter-checkbox">
                <input
                  type="checkbox"
                  checked={filters.tags.dry}
                  onChange={() => handleFilterChange("tags", "dry")}
                />
                <span>Dry</span>
              </label>
            </div>
          </div>

          {/* Size */}
          <div className="filter-section">
            <h3 className="filter-section-title">
              Size ({getActiveCount("size")})
            </h3>
            <div className="filter-buttons">
              <button
                className={`size-btn ${filters.size["50ml"] ? "active" : ""}`}
                onClick={() => handleFilterChange("size", "50ml")}
              >
                50ml
              </button>
              <button
                className={`size-btn ${filters.size["100ml"] ? "active" : ""}`}
                onClick={() => handleFilterChange("size", "100ml")}
              >
                100ml
              </button>
              <button
                className={`size-btn ${filters.size["150ml"] ? "active" : ""}`}
                onClick={() => handleFilterChange("size", "150ml")}
              >
                150ml
              </button>
              <button
                className={`size-btn ${filters.size["250ml"] ? "active" : ""}`}
                onClick={() => handleFilterChange("size", "250ml")}
              >
                250ml
              </button>
            </div>
          </div>

          {/* Price */}
          <div className="filter-section">
            <h3 className="filter-section-title">
              Price ({getActiveCount("price")})
            </h3>
            <div className="filter-options">
              <label className="filter-checkbox">
                <input
                  type="checkbox"
                  checked={filters.price.under1000}
                  onChange={() => handleFilterChange("price", "under1000")}
                />
                <span>Under ₹1000</span>
              </label>
              <label className="filter-checkbox">
                <input
                  type="checkbox"
                  checked={filters.price.over1000}
                  onChange={() => handleFilterChange("price", "over1000")}
                />
                <span>Over ₹1000</span>
              </label>
            </div>
          </div>

          {/* Discount */}
          <div className="filter-section">
            <h3 className="filter-section-title">
              Discount ({getActiveCount("discount")})
            </h3>
            <div className="filter-options">
              <label className="filter-checkbox">
                <input
                  type="checkbox"
                  checked={filters.discount["10-20"]}
                  onChange={() => handleFilterChange("discount", "10-20")}
                />
                <span>10% - 20%</span>
              </label>
              <label className="filter-checkbox">
                <input
                  type="checkbox"
                  checked={filters.discount["20-50"]}
                  onChange={() => handleFilterChange("discount", "20-50")}
                />
                <span>20% - 50%</span>
              </label>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="products-container">
          <div className="products-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
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
                      aria-label={isFavorite(product.id) ? "Remove from favorites" : "Add to favorites"}
                    >
                      {isFavorite(product.id) ? (
                        <IoHeart size={24} className="favorite-icon filled" />
                      ) : (
                        <IoHeartOutline size={24} className="favorite-icon" />
                      )}
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
              ))
            ) : (
              <div className="no-products">
                <p>No products found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* STAY UPDATED SECTION */}
      <div className="stay-updated">
        <h2>Stay Updated! <br />
          <span>Stay Radiant</span>
        </h2>

        <p>
          Be the first to know about new <br /> products, offers, and skincare tips.
        </p>

        <form className="email-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your Email"
            required
          />
          <button type="submit">Subscribe</button>
          {isSubmitted && (
            <div className="submit-success">
              Submitted successfully!
            </div>
          )}
        </form>
      </div>

      {/* INSTAGRAM SECTION */}
      <div className="instagram">
        <div className="insta-heading-row">
          <span className="insta-heading-text">Follow On</span>
          <span className="insta-heading-images">
            <img src={Img7} alt="Product 1" className="insta-heading-img img-1" />
            <img src={Img5} alt="Product 2" className="insta-heading-img img-2" />
          </span>
          <span className="insta-heading-text">Instagram</span>
        </div>
        <div className="insta-viewport">
          <div className="insta-track">
            {[...instaCards, ...instaCards].map((item, idx) => (
              <a className="insta-card" href="#" key={idx} aria-label={item.alt}>
                <img src={item.src} alt={item.alt} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lotion;
