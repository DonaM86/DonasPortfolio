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
        <h1>Hi, I'm Dona Myftari</h1>
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
      {/* Experience Section */}
      <section
        className={`experience fade-in ${
          visibleSections.experience ? "visible" : ""
        }`}
        style={{ marginBottom: "40px" }}
      >
        <h2 className="section-title">My Experience</h2>

        {/* Experience Cards */}
        <div className="experience-grid">
          {/* Frontend Developer Card */}
          <div className="experience-card">
            <h3 className="card-title">Frontend Developer – Systra</h3>
            <p className="card-description">
              During my time at Systra, I have honed my skills in creating
              intuitive and engaging user experiences while contributing to
              innovative projects in a dynamic team environment. As the sole
              Frontend Developer during a company transition, I managed multiple
              projects and played a key role in enhancing data visualization and
              user interaction.
            </p>

            <h4>Key Achievements:</h4>
            <ul className="achievements-list">
              <li>
                <strong>Project Leadership:</strong> Led frontend development
                during a company transition, successfully adapting to a changing
                team structure and delivering critical projects.
              </li>
              <li>
                <strong>React Migration:</strong> Developed React components
                (graphs, Gantt charts) to replace Tableau, significantly
                improving data visualization and user experience.
              </li>
              <li>
                <strong>Interactive Frontend Development:</strong> Built the
                frontend for Maintenance Optimizer, which was nominated in
                Systra's innovation program Spark.
              </li>
            </ul>

            <h4>Technologies & Tools:</h4>
            <ul className="tech-list">
              {[
                "React",
                "Material-UI",
                "DHTMLX Gantt",
                "Git",
                "DevOps Azure",
                "Python",
                "Figma",
                "Scrum",
                "UX & UI",
              ].map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            <h4>Project Management Skills:</h4>
            <ul className="skills-list">
              <li>Implementing Agile methodologies (Scrum, Kanban)</li>
              <li>Version control and collaboration with Git</li>
              <li>Team collaboration and stakeholder communication</li>
              <li>Utilizing project management tools (JIRA, Trello)</li>
            </ul>
          </div>

          {/* Beauty Consultant Card */}
          <div className="experience-card">
            <h3 className="card-title">Beauty Consultant – Åhléns</h3>
            <p className="card-description">
              At Åhléns, I spent over a decade as a Beauty Consultant,
              developing expertise in fragrance selection, skincare, and visual
              merchandising. I excelled in client consultations, guiding
              customers to discover products that enhanced their natural beauty
              and individual needs. This experience refined my attention to
              detail, deepened my understanding of aesthetics, and highlighted
              the importance of creating memorable customer experiences.
            </p>

            <h4>Core Skills:</h4>
            <ul className="skills-list">
              <li>Client Consultation</li>
              <li>Fragrance Selection</li>
              <li>Skincare Expertise</li>
              <li>Visual Merchandising</li>
              <li>Trend Analysis</li>
              <li>Effective Communication</li>
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
