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
        poster="/lowres-thumbnail.jpg" // En lågupplöst bild medan videon laddas
        onCanPlayThrough={(e) => e.currentTarget.play()} // Starta videon så snart möjligt
      >
        <source src="polina.webm" type="video/webm" />
        <source src="/Videooo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>Liridona Myftari</h1>
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
