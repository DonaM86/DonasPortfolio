import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "../styles/LandingPage.css";

const LandingPage: React.FC = () => {
  const [isNavbarHidden, setIsNavbarHidden] = useState<boolean>(true);

  useEffect(() => {
    setIsNavbarHidden(true);
  }, []);

  const handleExploreClick = () => {
    window.location.href = "/explore";
  };

  return (
    <div className="landing-page">
      <Navbar className={isNavbarHidden ? "hidden" : ""} />

      <video
        playsInline
        autoPlay
        muted
        loop
        id="bgvid"
        preload="auto"
        poster="/lowres-thumbnail.jpg" // Lågupplöst bild för snabb laddning
        onCanPlayThrough={(e) => {
          const video = e.currentTarget;
          if (video.paused) {
            video.play(); // Försök att spela om videon är pausad
          }
        }}
      >
        {/* Använd olika videokällor baserat på enhet */}
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
