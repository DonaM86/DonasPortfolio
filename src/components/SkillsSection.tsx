import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useEffect } from "react";
import "../styles/SkillsSection.css";

const SkillsSection: React.FC<{ className?: string }> = ({ className }) => {
  useEffect(() => {
    const elementsToAnimate = document.querySelectorAll(
      ".skill, .experience, .education, .hobbies"
    );

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          if (element.classList.contains("skill")) {
            element.classList.add("slide-in-left");
          } else if (element.classList.contains("experience")) {
            element.classList.add("slide-in-bottom");
          } else if (element.classList.contains("education")) {
            element.classList.add("slide-in-bottom");
          } else if (element.classList.contains("hobbies")) {
            element.classList.add("slide-in-right");
          }
        } else {
          element.classList.remove(
            "slide-in-left",
            "slide-in-right",
            "slide-in-bottom"
          );
        }
      });
    }, observerOptions);

    elementsToAnimate.forEach((element) => {
      element.classList.add("hidden");
      observer.observe(element);
    });

    return () => {
      elementsToAnimate.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className={`skills-section ${className}`}>
      <div className="skills-card">
        <div className="skills-left">
          <h3>Software Skills</h3>
          <div className="skill">
            <label>HTML</label>
            <input type="range" defaultValue="98" readOnly disabled />
          </div>
          <div className="skill">
            <label>CSS</label>
            <input type="range" defaultValue="74" readOnly disabled />
          </div>
          <div className="skill">
            <label>Javascript</label>
            <input type="range" defaultValue="60" readOnly disabled />
          </div>
          <div className="skill">
            <label>React</label>
            <input type="range" defaultValue="78" readOnly disabled />
          </div>
          <div className="skill">
            <label>UX & UI</label>
            <input type="range" defaultValue="76" readOnly disabled />
          </div>
          <div className="skill">
            <label>CMS</label>
            <input type="range" defaultValue="70" readOnly disabled />
          </div>
          <h3>Design Skills</h3>
          <div className="skill">
            <label>Figma</label>
            <input type="range" defaultValue="70" readOnly disabled />
          </div>
          <div className="skill">
            <label>Adobe Photoshop</label>
            <input type="range" defaultValue="65" readOnly disabled />
          </div>
          <div className="skill">
            <label>Canva</label>
            <input type="range" defaultValue="85" readOnly disabled />
          </div>
          <h3>Languages</h3>
          <div className="skill">
            <label>Albanian (Native)</label>
            <input type="range" defaultValue="100" readOnly disabled />
          </div>
          <div className="skill">
            <label>Swedish (Fluent)</label>
            <input type="range" defaultValue="98" readOnly disabled />
          </div>
          <div className="skill">
            <label>English (Fluent)</label>
            <input type="range" defaultValue="90" readOnly disabled />
          </div>
        </div>

        <div className="skills-content">
          <div className="experience-education">
            <div className="experience">
              <h3>Work Experience</h3>
              <ul>
                <li>
                  <strong>November 2013 - Present:</strong> <br />
                  <span className="job-title">
                    Fragrance & Beauty Advisor at Åhlens City, Gothenburg
                  </span>
                  <p className="experience-description">
                    • Provided expert customer advice and service.
                    <br />
                    • Listened to and understood customer needs.
                    <br />
                    • Demonstrated product knowledge and made recommendations.
                    <br />
                    • Achieved sales targets and goals.
                    <br />• Built and maintained strong relationships with
                    customers.
                  </p>
                </li>
                <li>
                  <strong>2008 - 2009:</strong> <br />
                  <span className="job-title">
                    Warehouse Worker at Skogaholms Bakery, Gothenburg
                  </span>
                  <p className="experience-description">
                    • Efficiently picked orders for store shipments.
                  </p>
                </li>
              </ul>
            </div>

            <div className="education">
              <h3>Education</h3>
              <ul>
                <li>
                  <strong>Aug 2022 – June 2024:</strong> <br />
                  <span className="education-title">
                    Front-end Developer, IT-högskolan
                  </span>
                  <p className="education-description">
                    • Proficient in HTML & CSS, and JavaScript (native and with
                    frameworks).
                    <br />
                    • Experienced in UX/UI design and Agile Development.
                    <br />
                    • Knowledgeable in React and Full-stack Development.
                    <br />• Completed internships focusing on communication with
                    stakeholders, group dynamics, and project management.
                  </p>
                </li>
                <li>
                  <strong>2012 - 2013:</strong> <br />
                  <span className="education-title">
                    Financial Administration, Lernia
                  </span>
                  <p className="education-description">
                    • Expertise in accounting, accounts receivable, budgeting,
                    payments, and payroll administration.
                  </p>
                </li>
                <li>
                  <strong>2003 - 2006:</strong> <br />
                  <span className="education-title">
                    Business & Administration, Sannarpsgymnasiet
                  </span>
                  <p className="education-description">
                    • Completed a 3-year program with a focus on business
                    economics, marketing, and administration.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="hobbies">
          <h3>Hobbies</h3>
          <p className="hobbies-description">
            I make it a priority to spend quality time with my family,
            especially by getting involved in my kids' soccer activities. Being
            part of their lives and sharing in their love for the sport brings
            me so much joy. I'm also passionate about web development and
            design, and I’m always pushing myself to learn and improve in this
            area. I love staying on top of the latest technologies and tools. To
            keep a good balance, I make sure to focus on my health with regular
            exercise, which helps me stay energized and focused.
          </p>

          <div className="hobbies-icons">
            <div className="hobby">
              <i className="fas fa-futbol hobbies-icon" title="Soccer"></i>
              <p>Soccer</p>
            </div>
            <div className="hobby">
              <i
                className="fas fa-code hobbies-icon"
                title="Web Development"
              ></i>
              <p>Web Development</p>
            </div>
            <div className="hobby">
              <i className="fas fa-dumbbell hobbies-icon" title="Exercise"></i>
              <p>Exercise</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
