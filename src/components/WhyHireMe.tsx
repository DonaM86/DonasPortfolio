import React from "react";
import { FaLightbulb, FaEye, FaBook, FaHands, FaUser } from "react-icons/fa";
import "../styles/whyhireme.css";

const WhyHireMe: React.FC = () => {
  return (
    <section id="whyhireme" className="why-hire-me-container">
      <div className="why-hire-me-content">
        <h2>Why Hire Me?</h2>
        <div className="why-hire-me-list">
          <div className="why-hire-me-item">
            <FaLightbulb className="why-hire-me-icon" />
            <h3>Creative Problem Solver</h3>
            <p>
              Whether it's beauty or code, I approach challenges with a
              creative, innovative mindset, always aiming to find the most
              elegant solution.
            </p>
          </div>
          <div className="why-hire-me-item">
            <FaEye className="why-hire-me-icon" />
            <h3>Detail-Oriented</h3>
            <p>
              From the smallest UI element to the overall user flow, I pay
              attention to every detail to ensure a seamless and engaging
              experience.
            </p>
          </div>
          <div className="why-hire-me-item">
            <FaBook className="why-hire-me-icon" />
            <h3>Passionate Learner</h3>
            <p>
              I’m committed to continuous learning and growth, always seeking to
              expand my knowledge and skills to stay at the forefront of
              industry trends and technologies.
            </p>
          </div>
          <div className="why-hire-me-item">
            <FaHands className="why-hire-me-icon" />
            <h3>Team Player</h3>
            <p>
              I thrive in collaborative environments and contribute positively
              to team dynamics, always ready to support and learn from others.
            </p>
          </div>
          <div className="why-hire-me-item">
            <FaUser className="why-hire-me-icon" />
            <h3>Client-Centric</h3>
            <p>
              My experience in client-facing roles has taught me the importance
              of understanding and addressing user needs and preferences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
