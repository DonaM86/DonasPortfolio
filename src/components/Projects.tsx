import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/Project.css";
import {
  FaReact,
  FaNode,
  FaVuejs,
  FaCss3,
  FaHtml5,
  FaJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiBootstrap,
  SiGatsby,
} from "react-icons/si";
import { IoLogoSass } from "react-icons/io";

const techIcons: { [key: string]: React.ReactElement } = {
  React: <FaReact title="React" />,
  "Node.js": <FaNode title="Node.js" />,
  "Vue.js": <FaVuejs title="Vue.js" />,
  Gatsby: <SiGatsby title="Gatsby" />,
  CSS: <FaCss3 title="CSS" />,
  HTML: <FaHtml5 title="HTML" />,
  JavaScript: <FaJs title="JavaScript" />,
  TypeScript: <SiTypescript title="TypeScript" />,
  "Tailwind CSS": <SiTailwindcss title="Tailwind CSS" />,
  Firebase: <SiFirebase title="Firebase" />,
  Bootstrap: <SiBootstrap title="Bootstrap" />,
  Sass: <IoLogoSass title="Sass" />,
};

interface ProjectData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  techStack: string[];
}

const projects: ProjectData[] = [
  {
    id: 1,
    title: "SportsPlanner",
    subtitle: "Web Application for Football Coaches",
    description: `SportsPlanner is designed to simplify training planning, player administration, and team communication. By digitalizing these processes, I created a tool that reduces manual work, allowing coaches to focus more on training.`,
    imageUrl: "/portfolio/sportsplanner.JPG",
    techStack: ["React", "Node.js", "Firebase", "TypeScript"],
  },
  {
    id: 2,
    title: "Recipe App",
    subtitle: "Interactive Recipe Web Application",
    description: `This web application displays recipes with an interactive and modern interface. Uses JavaScript modules and CSS for a responsive and sleek layout.`,
    imageUrl: "/portfolio/recepteen.JPG",
    techStack: ["React", "CSS", "HTML"],
  },
  {
    id: 3,
    title: "Weather App",
    subtitle: "Real-Time Weather Information",
    description: `This app provides real-time weather information for a selected city and updates the background image with a random sky photo from Unsplash every 15 seconds.`,
    imageUrl: "/portfolio/weather1.JPG",
    techStack: ["JavaScript", "CSS", "HTML"],
  },
  {
    id: 4,
    title: "Gatsby",
    subtitle: "Personal Portfolio Showcase",
    description: `This portfolio website highlights my work and skills, built using React and CSS with modern design features.`,
    imageUrl: "/portfolio/portfolio2.JPG",
    techStack: ["React", "CSS", "Gatsby", "Contentful"],
  },
  {
    id: 5,
    title: "Out On",
    subtitle: "Sunglasses E-commerce Platform",
    description: `Out On is a collaborative project with frontend and UX designers to create a sleek web experience for sunglasses.`,
    imageUrl: "/portfolio/outron.jpg",
    techStack: ["React", "TypeScript", "Bootstrap"],
  },
];

const Project = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    if (!showAllProjects) {
      const interval = setInterval(() => {
        setCurrentProject((prevProject) => (prevProject + 1) % projects.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [showAllProjects]);

  const handleCardClick = (id: number) => {
    const index = projects.findIndex((project) => project.id === id);
    if (index !== -1) {
      setCurrentProject(index);
      setShowAllProjects(false);
    }
  };

  const currentProjectData = projects[currentProject] || {
    title: "No Project",
    subtitle: "No Subtitle",
    description: "No description available.",
    imageUrl: "/placeholder.jpg",
    techStack: [],
  };

  return (
    <div className="project-background">
      <div className={`project-wrapper ${showAllProjects ? "show-all" : ""}`}>
        <button
          className="show-all-btn"
          onClick={() => setShowAllProjects((prev) => !prev)}
        >
          {showAllProjects ? "Show One Project at a Time" : "Show All Projects"}
        </button>

        {showAllProjects ? (
          <div className="all-projects-container">
            {projects.map((project) => (
              <motion.div
                className="project-card"
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                onClick={() => handleCardClick(project.id)}
              >
                <div className="project-image">
                  <img src={project.imageUrl} alt={project.title} />
                </div>
                <div className="project-title">{project.title}</div>
                <div className="project-tech-stack">
                  {project.techStack.map((tech) => {
                    const icon = techIcons[tech];
                    return (
                      <span key={tech}>
                        {icon ? (
                          React.cloneElement(icon, { key: tech })
                        ) : (
                          <span>{tech}</span>
                        )}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="project-container">
            <AnimatePresence mode="wait">
              <motion.div
                className="project-card"
                key={currentProjectData.id}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.7 }}
              >
                <div className="project-image">
                  <img
                    src={currentProjectData.imageUrl}
                    alt={currentProjectData.title}
                  />
                </div>
                <div className="project-info">
                  <h2>{currentProjectData.title}</h2>
                  <h3>{currentProjectData.subtitle}</h3>
                  <div className="project-description">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: currentProjectData.description,
                      }}
                    />
                  </div>
                  <div className="project-tech-stack">
                    {currentProjectData.techStack.map((tech) => {
                      const icon = techIcons[tech];
                      return (
                        <span key={tech}>
                          {icon ? (
                            React.cloneElement(icon, { key: tech })
                          ) : (
                            <span>{tech}</span>
                          )}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
