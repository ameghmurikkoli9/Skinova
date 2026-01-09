import React from "react";
import "./Hero3.css";
import videoSrc from "../Images/5927789-hd_1080_1920_25fps.mp4";
import checkmarkIcon from "../Images/checkmark-badge-02-stroke-rounded.svg";
import RightImg from "../Images/lora-seis-hr0Mx4W5AkU-unsplash.jpg";
import RightImg2 from "../Images/pexels-iriser-1090977.jpg";
import { RiRecycleLine } from "react-icons/ri";
import { HiEyeDropper } from "react-icons/hi2";
import { LuLeaf } from "react-icons/lu";
import { FaHandHoldingHeart } from "react-icons/fa";




const Hero3 = () => {
  return (
    <>
      {/* POSTER 1 */}
      <div className="Poster">
        <div className="poster-content">
          <h1>
            Eco Friendly, <br /> <span>Skin Friendly</span>
          </h1>
          <p>
            100% natural means every ingredient is <br />
            carefully selected from nature to provide <br />
            safe, effective, and gentle care for your skin.
          </p>
        </div>
      </div>

      {/* POSTER 2 */}
      <div className="Poster2">
        <div className="Poster2-Heading">
          <h1>Why Your Skin</h1>
          <h1>
            <span>Deserves the Best</span>
          </h1>
        </div>

        <div className="reviews">
          <p className="stars">★★★★★</p>
          <p className="numbers">4.7 (1,109 reviews)</p>
        </div>

        <div className="poster2-content">
          <div className="left">
            <video
              className="left-content"
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
            />

            {/* OVERLAY CARD */}
            <div className="left-overlay">
              <div className="left-overlay-content">
                <div className="icon-wrapper">
                  <img
                    src={checkmarkIcon}
                    alt="Checkmark"
                    className="overlay-icon"
                  />
                </div>

                <h2>Proven</h2>
                <h2 className="effectiveness">Effectiveness</h2>

                <p>
                  Every product is carefully crafted to meet <br />
                  the highest quality standards.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="right">
            <div className="right-content1">
              <img src={RightImg} alt="Product preview" className="right-img" />

              <div className="recycle">
                <RiRecycleLine size={56} className="recycle-icon" color="white"/>
              </div>

              <div className="right-text">
                <h3 className="right-text-title">Eco-Friendly</h3>
                <h4 className="right-text-sub">Packaging</h4>
                <p className="right-text-desc">
                  Eco-friendly materials designed to care for the planet as much
                  as your skin.
                </p>
              </div>
            </div>

            {/* ✅ ONLY CHANGE: text added inside right-content2 */}
            <div className="right-content2">
              <img
                src={RightImg2}
                alt="Natural ingredients"
                className="right-img"
              />

              <div className="right-content2-text">
                <h2 className="100%">100% Natural</h2>
                <h2 className=" 100% you">100% You</h2>
                <div className="icon-list">
                  <div className="icon-row">
                    <HiEyeDropper size={32}  
                      color="white"
                    className="icon" />
                    <span>No Harsh Chemicals</span>
                  </div>
                  <div className="icon-row">
                    <LuLeaf size={32} 
                    color="white"
                    className="icon" />
                    <span>Plant-Based Goodness</span>
                  </div>
                  <div className="icon-row">
                    <FaHandHoldingHeart size={32} 
                    color="white"
                    className="icon" />
                    <span>Ethically Sourced</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Hero3;



