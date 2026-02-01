import React, { useState } from 'react'
import './Blog.css'
import Img1 from "../Images/pexels-beaudec-30350896-7317125.jpg"
import Img2 from "../Images/pexels-cottonbro-4612124.jpg"
import Img3 from "../Images/pexels-dmitriy-piskarev-11113112.jpg"
import Img4 from "../Images/pexels-n-voitkevich-7852731.jpg"
import Img5 from "../Images/pexels-olly-3764170.jpg"
import Img6 from "../Images/pexels-olly-3785806.jpg"
import Img7 from "../Images/poko-skincare-aagtJmT7-eo-unsplash.jpg"
import { NavLink } from 'react-router-dom'

const Blog = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const instaCards = [
    { src: Img1, alt: "Natural Glow" },
    { src: Img2, alt: "Fresh Start" },
    { src: Img3, alt: "Daily Ritual" },
    { src: Img4, alt: "Pure Essence" },
    { src: Img5, alt: "Mockup Free 1" },
    { src: Img6, alt: "Mockup Free 2" },
    { src: Img7, alt: "Poko Skincare" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };
  return (
    <>
    <h1>Blog</h1>

    <div class="blog-grid">


  <div class="blog-card">
    <img src={Img2} alt="" />

    <div class="card-content">
      <p class="category">Self-Care & Wellness</p>
      <h2 class="title">The Art of Relaxation: Skincare as Self-Care</h2>
      <NavLink to="/blog/The-art-of-relaxation" className="read">Read Article</NavLink>
    </div>
  </div>


  <div class="blog-card">
    <img src={Img1} alt="" />

    <div class="card-content">
      <p class="category">Sustainable Beauty</p>
      <h2 class="title">Nature’s Inspiration: Sustainable Skincare Rituals</h2>
      <NavLink to="/blog/Natures-inspiration" className="read">Read Article</NavLink>
    </div>
  </div>


  <div class="blog-card">
    <img src={Img5} alt="" />

    <div class="card-content">
      <p class="category">Sustainable Beauty</p>
      <h2 class="title">Hydration Secrets: How to Keep Your Skin Soft and Smooth</h2>
      <NavLink to="/blog/Hydration-secrets" className="read">Read Article</NavLink>
    </div>
  </div>


  <div class="blog-card">
    <img src={Img3} alt="" />

    <div class="card-content">
      <p class="category">Sustainable Beauty</p>
      <h2 class="title">Fresh Starts: Morning Skincare Tips for Radiant Skin</h2>
      <NavLink to="/blog/Fresh-starts" className="read">Read Article</NavLink>
    </div>
  </div>



  <div class="blog-card">
    <img src={Img6} alt="" />

    <div class="card-content">
      <p class="category">Self-Care & Wellness</p>
      <h2 class="title">Effortless Glow: Skincare Tips for Natural Beauty</h2>
      <NavLink to="/blog/Effortless-glow" className="read">Read Article</NavLink>
    </div>
  </div>



  <div class="blog-card">
    <img src={Img4} alt="" />

    <div class="card-content">
      <p class="category">Self-Care & Wellness</p>
      <h2 class="title">Your Daily Routine: Skincare Essentials for Every Skin Type</h2>
      <NavLink to="/blog/Your-daily-routine" className="read">Read Article</NavLink>
    </div>
  </div>
</div>

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
  

    </>
  )
}

export default Blog