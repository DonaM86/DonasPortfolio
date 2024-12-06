import React, { useState } from "react";
import "../styles/MobileNavbar.css";

const MobileNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveLink(sectionId);
      closeMenu();
    }
  };

  return (
    <div className="mobile-navbar">
      <div
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <button
              className={activeLink === "explore" ? "active" : ""}
              onClick={() => scrollToSection("explore")}
            >
              Explore
            </button>
          </li>
          <li>
            <button
              className={activeLink === "projects" ? "active" : ""}
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className={activeLink === "skills" ? "active" : ""}
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              className={activeLink === "aboutme" ? "active" : ""}
              onClick={() => scrollToSection("aboutme")}
            >
              About Me
            </button>
          </li>
          <li>
            <button
              className={activeLink === "whyhireme" ? "active" : ""}
              onClick={() => scrollToSection("whyhireme")}
            >
              Why Hire Me
            </button>
          </li>
        </ul>

        <div className="close-button" onClick={closeMenu}>
          <span className="arrow"></span>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
