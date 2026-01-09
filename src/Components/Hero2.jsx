// src/Components/Hero2.jsx
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero2.css";

import { PiPlant } from "react-icons/pi";
import { PiDog } from "react-icons/pi";
import { LiaShippingFastSolid } from "react-icons/lia";
import checkBadge from "../Images/checkmark-badge-02-stroke-rounded.svg";

// Cleanser images
import CleanserImg1 from "../Images/aleksandrs-karevs-4fz3fM8Pbnw-unsplash.jpg";
import CleanserImg2 from "../Images/ela-de-pure-cp-2q8IXDmw-unsplash.jpg";
import CleanserImg3 from "../Images/plantadea-Os-uMjAI8KQ-unsplash.jpg";

// Lotion images
import LotionImg1 from "../Images/mahbod-akhzami-GMfdQ4uICk8-unsplash.jpg";
import LotionImg2 from "../Images/nataliya-melnychuk-PdzMmdHqN2c-unsplash.jpg";
import LotionImg3 from "../Images/dushawn-jovic-VSj1b6iU3BU-unsplash.jpg";

// Moisturizer images (new)
import MoistImg1 from "../Images/ela-de-pure-rqK_baq_XgI-unsplash.jpg";
import MoistImg2 from "../Images/mockup-free-yG84n5PhASY-unsplash.jpg";
import MoistImg3 from "../Images/plantadea-Cv6nQEPFdD8-unsplash.jpg";

const PRODUCTS = [
  { key: "cleanser", label: "Cleanser" },
  { key: "lotion", label: "Lotion" },
  { key: "moisturizer", label: "Moisturizer" },
];

const DESCRIPTIONS = [
  "Deep cleanse, removes impurities.",
  "Lightweight hydration for everyday use.",
  "Rich nourishment to restore glow.",
];

const Hero2 = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProduct = PRODUCTS[activeIndex];
  const activeDescription = DESCRIPTIONS[activeIndex];

  const handleShopCategory = () => {
    const categoryMap = {
      cleanser: "/category/cleansers",
      lotion: "/category/lotions",
      moisturizer: "/category/moisturizers"
    };
    navigate(categoryMap[activeProduct.key]);
  };

  const cleanserImages = [CleanserImg1, CleanserImg2, CleanserImg3];
  const lotionImages = [LotionImg1, LotionImg2, LotionImg3];
  const moisturizerImages = [MoistImg1, MoistImg2, MoistImg3];

  return (
    <>
      <div className="approved">
        <div className="card card1 scroll-animate">
          <PiPlant size={45} />
          <h2>Natural Formula</h2>
          <p>
            Crafted with pure, skin-loving <br /> ingredients for ultimate care.
          </p>
        </div>

        <div className="card card2 scroll-animate">
          <PiDog size={45} />
          <h2>Cruelty-Free</h2>
          <p>
            Our products are never tested <br /> on animals, guaranteed ethical.
          </p>
        </div>

        <div className="card card3 scroll-animate">
          <img src={checkBadge} alt="Check Icon" className="card3-icon" />
          <h2>Expert Approved</h2>
          <p>
            Carefully tested to ensure <br /> safety and visible results.
          </p>
        </div>

        <div className="card card4 scroll-animate">
          <LiaShippingFastSolid size={45} />
          <h2>Free Shipping</h2>
          <p>
            Delivered to your doorstep <br /> with no extra costs worldwide.
          </p>
        </div>
      </div>

      <h1 className="approved-title">
        Refresh your skin, love yourself, <br /> renew your glow.
      </h1>

      {/* Buttons */}
      <div className="buttons" role="tablist" aria-label="Product selector">
        {PRODUCTS.map((p, idx) => (
          <button
            key={p.key}
            className={`btn ${activeIndex === idx ? "btn-active" : ""}`}
            onClick={() => setActiveIndex(idx)}
            type="button"
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Items: three panels that mirror the selected product */}
      <div className="items">
        {[0, 1, 2].map((n) => (
          <div key={n} className={`item item${n + 1}`}>
            {activeProduct.key === "cleanser" ? (
              <img
                src={cleanserImages[n]}
                alt={`Cleanser ${n + 1}`}
                className="item-image"
              />
            ) : activeProduct.key === "lotion" ? (
              <img
                src={lotionImages[n]}
                alt={`Lotion ${n + 1}`}
                className="item-image"
              />
            ) : activeProduct.key === "moisturizer" ? (
              <img
                src={moisturizerImages[n]}
                alt={`Moisturizer ${n + 1}`}
                className="item-image"
              />
            ) : (
              <>
                <h3>{activeProduct.label}</h3>
                <p>{activeDescription}</p>
              </>
            )}
          </div>
        ))}
      </div>

      <button className="shop-text" type="button" onClick={handleShopCategory}>Shop {activeProduct.label}</button>
    </>
  );
};

export default Hero2;
