import React, { useState } from "react";
import "./SearchBar.css";
import { NavLink } from "react-router-dom";

// Category images

import LotionImg1 from "../Images/mahbod-akhzami-GMfdQ4uICk8-unsplash.jpg";
import MoistImg1 from "../Images/ela-de-pure-rqK_baq_XgI-unsplash.jpg";

import MainImg from "../Images/mockup-free-cJw9Ax00tKM-unsplash.jpg";
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

// Product data (same as Shop)
const allProducts = [
  { id: 1, name: "Gentle Cleanser", price: 799, priceDisplay: "₹799", image: Img1, category: "cleansers", tags: ["body", "daily"], size: "100ml", discount: 0 },
  { id: 2, name: "Hydrating Serum", price: 1299, priceDisplay: "₹1,299", image: Img2, category: "moisturizers", tags: ["allSkin", "daily"], size: "50ml", discount: 15 },
  { id: 3, name: "Natural Moisturizer", price: 999, priceDisplay: "₹999", image: Img5, category: "moisturizers", tags: ["body", "dry"], size: "150ml", discount: 0 },
  { id: 4, name: "Face Oil", price: 1199, priceDisplay: "₹1,199", image: Img4, category: "moisturizers", tags: ["allSkin", "detox"], size: "50ml", discount: 0 },
  { id: 5, name: "Daily Cleanser", price: 899, priceDisplay: "₹899", image: Img6, category: "cleansers", tags: ["body", "daily"], size: "100ml", discount: 10 },
  { id: 6, name: "Nourishing Cream", price: 1399, priceDisplay: "₹1,399", image: Img7, category: "moisturizers", tags: ["body", "dry"], size: "250ml", discount: 0 },
  { id: 7, name: "Pure Essence", price: 1099, priceDisplay: "₹1,099", image: Img8, category: "lotions", tags: ["allSkin", "detox"], size: "150ml", discount: 12 },
  { id: 8, name: "Revitalizing Serum", price: 1499, priceDisplay: "₹1,499", image: Img9, category: "moisturizers", tags: ["allSkin", "daily"], size: "50ml", discount: 0 },
  { id: 9, name: "Glow Elixir", price: 1199, priceDisplay: "₹1,199", image: Img10, category: "lotions", tags: ["body", "daily"], size: "100ml", discount: 18 },
  { id: 10, name: "Hydrating Lotion", price: 949, priceDisplay: "₹949", image: Img11, category: "lotions", tags: ["body", "dry"], size: "150ml", discount: 0 },
  { id: 11, name: "Natural Glow", price: 1299, priceDisplay: "₹1,299", image: Img12, category: "cleansers", tags: ["allSkin", "detox"], size: "100ml", discount: 0 },
  { id: 12, name: "Radiant Skin", price: 1599, priceDisplay: "₹1,599", image: Img13, category: "moisturizers", tags: ["body", "afterSun"], size: "250ml", discount: 0 },
];

const Searchbar = ({ open, onClose }) => {
  const [query, setQuery] = useState("");

  if (!open) return null;

  const filtered = allProducts.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="search-header">
          {/* <h2 className="search-title">Search</h2> */}

          <div className="search-input-wrap">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
            {query && (
              <button className="clear-btn" onClick={() => setQuery("")}>×</button>
            )}
          </div>
        </div>

        {query && (
          <NavLink to="/shop"  className="see-all" onClick={onClose}>See all results</NavLink>
        )}

        <div className="search-results">
          {filtered.map((item) => (
            <NavLink
              key={item.id}
              to={`/shop?focus=${item.id}`}
              className="search-item"
              onClick={onClose}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="search-img">
                {item.discount > 0 && (
                  <span className="off-badge">{item.discount}% OFF</span>
                )}
                <img src={item.image} alt={item.name} />
              </div>

              <div className="search-info">
                <h4>{item.name}</h4>
                <p>{item.priceDisplay}</p>
              </div>
            </NavLink>
          ))}

          {query && filtered.length === 0 && (
            <p className="no-result">No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Searchbar;