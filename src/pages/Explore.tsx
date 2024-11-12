import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Content from "../components/Content";
import SkillsSection from "../components/SkillsSection";
import AboutMe from "../pages/AboutMe";
import "../styles/Explore.css";

const Explore: React.FC = () => {
  const [, setActiveSection] = useState<string>("");

  const handleScroll = () => {
    const sections = ["explore", "content", "projects", "skills", "aboutme"];
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (
          scrollPosition > rect.top + window.scrollY &&
          scrollPosition < rect.bottom + window.scrollY
        ) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="explore-page">
      <div id="explore" className="section">
        <Header />
      </div>
      <div id="content" className="section content-wrapper">
        <Content />
      </div>
      <div id="projects" className="projects-wrapper section">
        <div className="projects-heading">
          <h2>My Projects</h2>
        </div>
        <div className="projects-container">
          <Projects />
        </div>
      </div>
      <div id="skills" className="section">
        <SkillsSection />
      </div>
      <div id="aboutme" className="section aboutme-wrapper">
        <AboutMe />
      </div>
    </div>
  );
};

export default Explore;
