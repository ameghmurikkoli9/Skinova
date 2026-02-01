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
      <div className="h3-Poster">
        <div className="h3-poster-content">
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
      <div className="h3-Poster2">
        <div className="h3-Poster2-Heading">
          <h1>Why Your Skin</h1>
          <h1>
            <span>Deserves the Best</span>
          </h1>
        </div>

        <div className="h3-reviews">
          <p className="h3-stars">★★★★★</p>
          <p className="h3-numbers">4.7 (1,109 reviews)</p>
        </div>

        <div className="h3-poster2-content">
          <div className="h3-left">
            <video
              className="h3-left-content"
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
            />

            {/* OVERLAY CARD */}
            <div className="h3-left-overlay">
              <div className="h3-left-overlay-content">
                <div className="h3-icon-wrapper">
                  <img
                    src={checkmarkIcon}
                    alt="Checkmark"
                    className="h3-overlay-icon"
                  />
                </div>

                <h2 className="h3-effectiveness">Proven</h2>
                <h2 className="h3-effectiveness">Effectiveness</h2>

                <p>
                  Every product is carefully crafted to meet <br />
                  the highest quality standards.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="h3-right">
            <div className="h3-right-content1">
              <img src={RightImg} alt="Product preview" className="h3-right-img" />

              <div className="h3-recycle">
                <RiRecycleLine size={56} className="h3-recycle-icon" color="white"/>
              </div>

              <div className="h3-right-text">
                <h3 className="h3-right-text-title">Eco-Friendly</h3>
                <h4 className="h3-right-text-sub">Packaging</h4>
                <p className="h3-right-text-desc">
                  Eco-friendly materials designed to care for the planet as much
                  as your skin.
                </p>
              </div>
            </div>

            {/* ✅ ONLY CHANGE: text added inside right-content2 */}
            <div className="h3-right-content2">
              <img
                src={RightImg2}
                alt="Natural ingredients"
                className="h3-right-img"
              />

              <div className="h3-right-content2-text">
                <h2 className="100%">100% Natural</h2>
                <h2 className=" 100% you">100% You</h2>
                <div className="h3-icon-list">
                  <div className="h3-icon-row">
                    <HiEyeDropper size={32}  
                      color="white"
                    className="h3-icon" />
                    <span>No Harsh Chemicals</span>
                  </div>
                  <div className="h3-icon-row">
                    <LuLeaf size={32} 
                    color="white"
                    className="h3-icon" />
                    <span>Plant-Based Goodness</span>
                  </div>
                  <div className="h3-icon-row">
                    <FaHandHoldingHeart size={32} 
                    color="white"
                    className="h3-icon" />
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



