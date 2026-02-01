import "./About.css";
import heroImage from "../Images/pexels-dinh-dinh-344132797-14114702.jpg";
import leftImage from "../Images/pexels-sunny-skin-69421600-9496412.jpg";
import rightImage from "../Images/pexels-natalia-hawthorne-2149934-3785147.jpg";
import { HiEyeDropper } from "react-icons/hi2";
import { LuLeaf } from "react-icons/lu";
import { FaHandHoldingHeart } from "react-icons/fa";
import { PiDog } from "react-icons/pi";
import { PiPackage } from "react-icons/pi";
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



const About = () => {
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

  return (
    <div className="about-page">
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="about-hero__overlay">
          <div className="about-hero__content">
            <h1 className="about-hero__title">
              Redefining <span>Skincare</span>
            </h1>
            <p className="about-hero__subtitle">
              We blend nature and science to create skincare <br />
              that transforms, empowers, and respects the planet.
            </p>
          </div>
        </div>
      </section>

      <div className="about-info-box">
        <div className="about-info about-info-box-1">
          <h2>100%</h2>
          <h3>Natural Ingredients</h3>
          <p>
            Pure, safe, and sustainably <br /> sourced skincare.
          </p>
        </div>
        <div className="about-info about-info-box-2">
          <h2>97%</h2>
          <h3>Customer Satisfaction</h3>
          <p>
            Trusted by happy, glowing <br /> customers worldwide.
          </p>
        </div>
        <div className="about-info about-info-box-3">
          <h2>85%</h2>
          <h3>Less Packaging</h3>
          <p>Eco-friendly designs for a greener planet.</p>
        </div>
        <div className="about-info about-info-box-4">
          <h2>{"9/10"}</h2>
          <h3>Customer Satisfaction</h3>
          <p>
            Loved and recommended by <br /> our customers.
          </p>
        </div>
      </div>

      <div className="about-reviews">
        <h1>
          {" "}
          Crafted with Care
          <br />
          <span> Inspired by Nature</span>
        </h1>

        <p className="about-stars">
          ★★★★★ <br />
          <span className="about-ratings">4.7(1,109 reviews)</span>
        </p>
      </div>

      <div className="about-container">
        <div className="about-left">
          <div
            className="about-left-img"
            style={{ backgroundImage: `url(${leftImage})` }}
          ></div>
          <div className="about-left-content">
            <h5>Our Journey</h5>
            <h2>
              Why Your Skin <br />
              <span>Deserves the Best</span>
            </h2>
            <p>
              {" "}
              Skinva started with a simple idea: skincare that works in harmony{" "}
              <br /> with your skin and the planet. From humble beginnings to a
              trusted <br /> brand, we’ve stayed true to our mission of
              delivering natural, <br /> effective, and sustainable skincare
              solutions.
            </p>
            <div className="left-about-icon-list">
              <div className="about-icon-row about-icon-row2">
                <HiEyeDropper size={32} color="black" className="about-icon" />
                <span >
                Founded on Sustainability</span>
              </div>
              <div className="about-icon-row about-icon-row2">
                <LuLeaf size={32} color="black" className="about-icon" />
                <span>Powered by Natural Ingredients</span>
              </div>
              <div className="about-icon-row about-icon-row2">
                <FaHandHoldingHeart size={32} color="black" className="about-icon" />
                <span>Driven by Innovation</span>
              </div>
            </div>
          </div>
        </div>
        <div className="about-right">
          <div className="about-right-content">
            <h5>About Us</h5>
            <h2>
              Simple Rituals
              <br />
              <span>Powerful Results</span>
            </h2>
            <p>
              
              Skinova is built on the belief that skincare should enhance your
              <br />
              natural beauty without compromise. By combining the power of
              <br />
              nature with sustainable practices, we deliver effective products
              <br />
              that care for your skin and our planet.
            </p>
            <div className="about-icon-list">
              <div className="about-icon-row">
                <LuLeaf size={32} color="blackblack" className="about-icon" />
                <span>100% Natural Ingredients</span>
              </div>
              <div className="icon-row">
                <PiPackage size={32} color="blackblack" className="about-icon" />
                <span className="sustainable">Sustainable Packaging</span>
              </div>
              <div className="about-icon-row">
                <PiDog
                  size={32}
                  color="blackblack"
                  className="about-icon"
                />
                <span>Cruelty-Free Commitment</span>
              </div>
            </div>
          </div>
          <div
            className="about-right-image"
            style={{ backgroundImage: `url(${rightImage})` }}
          ></div>
        </div>
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
    </div>
  );
};

export default About;
