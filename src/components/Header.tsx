import React from "react";
import "../styles/header.css";

const Header: React.FC<{ className?: string }> = ({ className }) => (
  <header className={`explore-header ${className}`}>
    <div className="header-text">
      <h1>Welcome to My Portfolio</h1>
    </div>
    <div className="collage-container">
      <img
        src="/bild3.webp"
        alt="Profile 3"
        className="collage-image fly-in-top-left"
      />
      <img
        src="/bild2.webp"
        alt="Profile 1"
        className="collage-image fly-in-top-right"
      />
      <div className="middle-image-container">
        <img
          src="/bild1.webp"
          alt="Profile 2"
          className="collage-image fly-in-bottom-center"
        />
      </div>
    </div>
    <div className="header-text">
      <p className="intro-text">Crafting Meaningful Digital Experiences</p>
      <p>
        I’m all about creating web applications that are both beautiful and easy
        to use. With my skills in React, JavaScript, and UX design, I create
        user interfaces that delight and engage across all devices. I believe
        that every click and interaction should feel effortless and satisfying.
        Dive into my portfolio to discover how I bring creativity and technical
        expertise together to turn ideas into captivating digital experiences!
      </p>
      <p>
        <strong>
          If you’re interested in working together, I’d love to hear from you.
        </strong>
      </p>

      <div className="button-container">
        <a href="/portfolio/LiridonaCV.pdf" className="link-button" download>
          Download My Resume
        </a>
      </div>
    </div>
  </header>
);

export default Header;
