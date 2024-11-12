import React, { useEffect, useState } from "react";
import "../styles/aboutme.css";
import WhyHireMe from "../components/WhyHireMe";

const AboutMe: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState({
    journey: false,
    vision: false,
    experience: false,
    hireMe: false,
  });

  const handleScroll = () => {
    const sections = {
      journey: document.querySelector(".my-journey"),
      vision: document.querySelector(".vision"),
      experience: document.querySelector(".experience"),
      hireMe: document.querySelector(".why-hire-me"),
    };

    const windowHeight = window.innerHeight;

    Object.keys(sections).forEach((key) => {
      const section = sections[key as keyof typeof sections];
      if (section) {
        const top = section.getBoundingClientRect().top;
        if (top < windowHeight * 0.8) {
          setVisibleSections((prev) => ({ ...prev, [key]: true }));
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check to set the visibility
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="about-me">
      <header>
        <h1>Hi, I'm Liridona Myftari</h1>
        <p>
          From the world of beauty to the realm of frontend development, I've
          always had one goal: to create visually stunning and highly functional
          experiences.
        </p>
      </header>

      {/* Journey Section */}
      <section
        className={`my-journey fade-in ${
          visibleSections.journey ? "visible" : ""
        }`}
        style={{ display: "flex", alignItems: "center", marginBottom: "40px" }}
      >
        <div style={{ flex: "1", padding: "20px" }}>
          <img src="/portfolio/donaå1.jpeg" alt="Journey" />
        </div>
        <div style={{ flex: "2", padding: "20px" }}>
          <h2>My Journey: From Beauty to Code</h2>
          <p>
            For over a decade, I thrived in the beauty industry, specializing in
            perfume, makeup artistry, and skincare consulting. This journey has
            fostered a deep appreciation for aesthetics, precision, and helping
            people feel their best. As time went on, I felt the urge to channel
            my creative energy in new directions, leading me to take the bold
            leap into frontend development.
          </p>
          <p>
            Now, I bring the same passion for beauty into my code, crafting web
            experiences that are not only functional but visually captivating.
            For me, it’s about merging form and function—because a beautiful
            interface can elevate the user experience and keep people coming
            back.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section
        className={`vision fade-in ${visibleSections.vision ? "visible" : ""}`}
        style={{ display: "flex", alignItems: "center", marginBottom: "40px" }}
      >
        <div style={{ flex: "2", padding: "20px" }}>
          <h2>My Vision: Technology Meets Beauty</h2>
          <p>
            I believe that technology should be as beautiful as it is
            functional. My goal is to merge the artistry of the beauty industry
            with the precision of modern web development. Every website and
            application I create is not just about flawless performance but also
            about crafting an experience that feels like a piece of art.
          </p>
          <p>
            With a keen eye for design and a solid technical foundation, I am
            dedicated to creating digital spaces that are not only engaging but
            also highly efficient. To me, technology is more than just a
            tool—it’s an opportunity to inspire and captivate users with every
            interaction.
          </p>
        </div>
        <div style={{ flex: "1", padding: "20px" }}>
          <video
            src="/portfolio/donavid.mp4"
            controls
            autoPlay
            loop
            muted
            style={{
              marginTop: "50%",
              width: "320px",
              height: "350px",
              borderRadius: "50%",
              objectFit: "cover",
              display: "block",
              margin: "0 auto",
              position: "relative",
              top: "-20px",
            }}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Experience Section */}
      <section
        className={`experience fade-in ${
          visibleSections.experience ? "visible" : ""
        }`}
        style={{ marginBottom: "40px" }}
      >
        <h2>Experience</h2>
        <div className="experience-container">
          <div className="experience-item">
            <h3>Frontend Developer</h3>
            <p>
              I am a passionate Frontend Developer dedicated to crafting
              seamless user experiences and delivering visually engaging
              designs. My journey into the world of technology began with a
              deep-seated love for creating and problem-solving, which naturally
              led me to embrace web development. I thrive on the challenge of
              turning complex ideas into simple, beautiful interfaces that
              delight users and enhance their interaction with the digital
              world.
            </p>

            <h4>Technologies & Skills:</h4>
            <div className="tech-container">
              <div className="tech-item">HTML</div>
              <div className="tech-item">CSS</div>
              <div className="tech-item">JavaScript</div>
              <div className="tech-item">React</div>
              <div className="tech-item">TypeScript</div>
              <div className="tech-item">Git</div>
              <div className="tech-item">Responsive Design</div>
              <div className="tech-item">UI/UX</div>
              <div className="tech-item">WordPress</div>
              <div className="tech-item">Drupal</div>
              <div className="tech-item">PHP</div>
              <div className="tech-item">Headless CMS</div>
              <div className="tech-item">MongoDB</div>
              <div className="tech-item">Node.js</div>
              <div className="tech-item">Vue.js</div>
              <div className="tech-item">Express</div>
              <div className="tech-item">SQLite</div>
              <div className="tech-item">PostCSS</div>
              <div className="tech-item">SASS</div>
            </div>

            <div className="skills-section">
              <h4>Project Management Skills:</h4>
              <ul>
                <li>Implementing Agile methodologies (Scrum and Kanban)</li>
                <li>Using project management tools (JIRA, Trello)</li>
                <li>Version control with Git</li>
                <li>
                  Understanding group dynamics and effective team collaboration
                </li>
                <li>
                  Facilitating communication with stakeholders and requirements
                  gathering
                </li>
                <li>
                  Applying project management models and ensuring quality
                  assurance
                </li>
              </ul>
            </div>
          </div>

          <div className="experience-item">
            <h3>Beauty Consultant</h3>
            <p>
              With a decade of experience in the beauty industry, I have
              developed extensive knowledge in fragrance and skincare through
              various courses and hands-on experience. My role as a beauty
              consultant has allowed me to work closely with clients, helping
              them discover products that enhance their natural beauty and fit
              their individual needs. This journey has deepened my appreciation
              for the importance of detail and the impact of visual aesthetics
              in the beauty realm.
            </p>

            <h4>Core Skills:</h4>
            <ul className="tech-list">
              <li>
                <strong>Creative Direction</strong>
              </li>
              <li>
                <strong>Client Consultation</strong>
              </li>
              <li>
                <strong>Product Knowledge</strong>
              </li>
              <li>
                <strong>Fragrance Selection</strong>
              </li>
              <li>
                <strong>Skincare Expertise</strong>
              </li>
              <li>
                <strong>Trend Analysis</strong>
              </li>
              <li>
                <strong>Visual Merchandising</strong>
              </li>
              <li>
                <strong>Effective Communication</strong>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Hire Me Section */}
      <section
        className={`why-hire-me fade-in ${
          visibleSections.hireMe ? "visible" : ""
        }`}
      >
        <WhyHireMe />
      </section>
    </div>
  );
};

export default AboutMe;
