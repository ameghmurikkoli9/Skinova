import React from 'react'
import "./BlogTemplate.css"
import { useState } from 'react';
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


const BlogTemplate2 = (props) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
    <div className="blog">
            <div className="top">
                <div className="date">
                    <h5>Date</h5>
                    <p className='top-date'>{props.date}</p>
                </div>
                <div className="blog-category">
                    <h5>Category</h5>
                    <p className='top-category'>{props.category}</p>
                </div>
                <div className="Reading-time">
                    <h5>Reading Time</h5>
                    <p className='top-time'>{props.time}</p>
                </div>
            </div>


            <div className="content">

                <h2>{props.h1}</h2>
                <p>{props.p1}</p>
                <p>{props.p2}</p>
                <p>{props.p3}</p>

                <h2>{props.h2}</h2>
                <p>{props.p4}</p>
                <p>{props.p5}</p>
                <p>{props.p6}</p>

                <h2>{props.h3}</h2>
                <p>{props.p7}</p>
                <p>{props.p8}</p>
                <p>{props.p9}</p>

            </div>
        </div>

            <div className="conclusion">
                <h2>Conclusion</h2>
                <p>{props.p10}</p>
                <h5>{props.author} <span>Author</span></h5>
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

export default BlogTemplate2