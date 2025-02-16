import React from "react";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import "../styles/footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/liridona-myftari/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/dona86m/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:dona.1986@hotmail.com?subject=To%20Dona%20Myftari&body=Hi%20Dona%2C"
            aria-label="Email Dona Myftari"
          >
            <FaEnvelope />
          </a>
        </div>
        <p className="footer-text">
          Frontend Developer | Based in Gothenburg, Sweden
        </p>
        <p className="footer-contact">
          Contact me:{" "}
          <a href="mailto:dona.1986@hotmail.com?subject=To%20Dona%20Myftari&body=Hi%20Dona%2C">
            Dona.1986@hotmail.com
          </a>
        </p>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
