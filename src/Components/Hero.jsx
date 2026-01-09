// src/Components/Hero.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import videoSrc from "../Images/bg-video.mp4";
import "./Hero.css";

const SLIDE_COUNT = 3;

const Hero = () => {
  const navigate = useNavigate();
  
  // 0 = slide 1, 1 = slide 2, 2 = slide 3
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);

  const handleShopNow = () => {
    navigate("/shop");
  };

  const goToSlide = (index) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);

    // lock navigation during CSS transition (0.6s)
    setTimeout(() => {
      setIsAnimating(false);
    }, 650);
  };

  const handleNext = () => {
    if (activeIndex < SLIDE_COUNT - 1) {
      goToSlide(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      goToSlide(activeIndex - 1);
    }
  };

  // Touch swipe (mobile / trackpad treated as touch)
  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length > 0) {
      setTouchStartX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null || isAnimating) return;

    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - touchStartX;

    // Swipe threshold
    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) {
        // swipe left → next slide
        handleNext();
      } else {
        // swipe right → prev slide
        handlePrev();
      }
    }

    setTouchStartX(null);
  };

  // Trackpad 2-finger horizontal swipe (wheel event with deltaX)
  const handleWheel = (e) => {
    if (isAnimating) return;

    // Only react to horizontal scroll stronger than vertical
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
    if (Math.abs(e.deltaX) < 10) return; // ignore tiny movements

    if (e.deltaX > 0) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  return (
    <div
      className="home-hero"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Left & Right buttons */}
      <button
        className="scroll-btn left"
        onClick={handlePrev}
        disabled={activeIndex === 0}
      >
        &#8249;
      </button>

      <button
        className="scroll-btn right"
        onClick={handleNext}
        disabled={activeIndex === SLIDE_COUNT - 1}
      >
        &#8250;
      </button>

      {/* Horizontal track */}
      <div
        className="horizontal-track"
        style={{ transform: `translateX(-${activeIndex * 100}vw)` }}
      >
        {/* Slide 1: Video background */}
        {/* Slide 1: Video background */}
        <section className="slide slide-video">
          <video
            className="bg-video"
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
          />

          <div className="hero-text">
            <h1 className="hero-title">Natural</h1>
            <h2 className="hero-subtitle">Skincare</h2>
            <p className="hero-description">
              Start your day with gentle care and nourishing <br />
              ingredients designed to awaken your skin naturally.
            </p>
            <button className="hero-btn" onClick={handleShopNow}>Shop Now</button>
          </div>
        </section>

        {/* Slide 2: Image 1 */}
        <section className="slide slide-image2">
          <div className="slide-content2">
            <h1 className="hero-title2">Refresh</h1>
            <h2 className="hero-subtitle2">Your Skin</h2>
            <p className="hero-description2">
              Skincare stripped to the essentials — clean,
              <br /> effective, and made with nature in mind.
            </p>
            <button className="hero-btn2" onClick={handleShopNow}>Shop Now</button>
          </div>
        </section>

        {/* Slide 3: Image 2 */}
        <section className="slide slide-image-3">
          <div className="slide-content3">
            <h1 className="hero-title3">Daily</h1>
            <h2 className="hero-subtitle3">Rituals</h2>
            <p className="hero-description3">
              Elevate your routine with products <br />that care for your skin and the planet.
            </p>
            <button className="hero-btn3" onClick={handleShopNow}>Shop Now</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
