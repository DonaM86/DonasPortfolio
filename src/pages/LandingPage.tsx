import React, { useState } from "react";
import "../styles/LandingPage.css";

const LandingPage: React.FC = () => {
  const [isExiting, setIsExiting] = useState(false);

  const handleExploreClick = () => {
    setIsExiting(true); // Trigger the exit animation
    setTimeout(() => {
      window.location.href = "/explore"; // Redirect after animation
    }, 1000); // Wait for the animation to complete before navigating
  };

  return (
    <div className={`landing-page ${isExiting ? "fade-out" : ""}`}>
      <video
        playsInline
        autoPlay
        muted
        loop
        id="bgvid"
        preload="auto"
        poster="/lowres-thumbnail.jpg"
        onCanPlayThrough={(e) => {
          const video = e.currentTarget;
          if (video.paused) {
            video.play(); // Play the video if paused
          }
        }}
      >
        <source
          src="/Videooo-720p.mp4"
          type="video/mp4"
          media="(max-width: 720px)"
        />
        <source src="/Videooo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay"></div>
      <div className="content">
        <h1>Dona Myftari</h1>
        <p>Frontend Developer</p>
        <p>React & UX Design Enthusiast</p>
        <p>Exploring Backend Development</p>

        <button className="explore-button" onClick={handleExploreClick}>
          Explore
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
