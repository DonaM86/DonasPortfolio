import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [active, setActive] = useState<string>("explore");
  const [showSubmenu, setShowSubmenu] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Om skärmen är mindre än eller lika med 768px, sätt isMobile till true
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "explore",
        "content",
        "projects",
        "skills",
        "aboutme",
        "whyhireme",
      ];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const footer = document.getElementById("footer");
      const footerPosition = footer
        ? footer.offsetTop
        : document.body.scrollHeight;

      setShowSubmenu(
        window.scrollY >= 100 &&
          window.scrollY + window.innerHeight < footerPosition - 100
      );

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            scrollPosition > rect.top + window.scrollY &&
            scrollPosition < rect.bottom + window.scrollY
          ) {
            setActive(section);
          }
        }
      });

      if (window.scrollY + window.innerHeight >= footerPosition) {
        setActive("explore");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (section: string) => {
    setActive(section);
  };

  return (
    <nav className={`navbar ${className || ""}`}>
      <div className="navbar-content">
        {/* Här tas hamburgermenyn bort helt om vi är i mobilläge */}
        {!isMobile && (
          <ul className="navbar-links">
            <li className={active === "explore" ? "active explore" : "explore"}>
              <a href="#explore" onClick={() => handleLinkClick("explore")}>
                Explore
              </a>
            </li>
            {showSubmenu && (
              <>
                <li className={active === "content" ? "active" : ""}>
                  <a href="#content" onClick={() => handleLinkClick("content")}>
                    Technologies
                  </a>
                </li>
                <li className={active === "projects" ? "active" : ""}>
                  <a
                    href="#projects"
                    onClick={() => handleLinkClick("projects")}
                  >
                    Projects
                  </a>
                </li>
                <li className={active === "skills" ? "active" : ""}>
                  <a href="#skills" onClick={() => handleLinkClick("skills")}>
                    Skills
                  </a>
                </li>
                <li className={active === "aboutme" ? "active" : ""}>
                  <a href="#aboutme" onClick={() => handleLinkClick("aboutme")}>
                    About Me
                  </a>
                </li>
                <li className={active === "whyhireme" ? "active" : ""}>
                  <a
                    href="#whyhireme"
                    onClick={() => handleLinkClick("whyhireme")}
                  >
                    Why Hire Me
                  </a>
                </li>
              </>
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
