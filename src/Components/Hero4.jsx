import React, { useState } from 'react'
import "./Hero4.css"
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

const Hero4 = () => {
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
    // Reset the message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
  <>
    <div className='heading'>
        <h1>
            It feels <span>healthier, smoother & more <br /> radiant</span> than ever. I love knowing I’m <br /> using something natural and effective!
        </h1>
<br /><br />
        <div className='author'>
            <p className='star'>★★★★★</p>
            <p className='name'>Jennifer K. </p>
            <p className='verified'> Verified Buyer</p>

        </div>
              <br />
              <br />
        <div className='main-img'>
          <img src={MainImg} alt="Product mockup" className="main-img-img" />
        </div>
          
    </div>
<br /><br />
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

export default Hero4
