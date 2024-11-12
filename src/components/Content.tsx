import React, { useEffect, useState } from "react";
import "../styles/Content.css";
import {
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiFirebase,
  SiGraphql,
  SiSqlite,
  SiDocker,
  SiWordpress,
  SiMysql,
} from "react-icons/si";
import { MdSchool } from "react-icons/md";
import { TbBrandTypescript } from "react-icons/tb";
import { AiFillDatabase } from "react-icons/ai";

const techs = [
  { name: "HTML & CSS", icon: <FaHtml5 size={40} /> },
  { name: "JavaScript", icon: <FaJsSquare size={40} /> },
  { name: "React", icon: <FaReact size={40} /> },
  { name: "TypeScript", icon: <TbBrandTypescript size={40} /> },
  { name: "Node.js", icon: <FaNodeJs size={40} /> },
  { name: "Firebase", icon: <SiFirebase size={40} /> },
  { name: "Express", icon: <FaNodeJs size={40} /> },
  { name: "GraphQL", icon: <SiGraphql size={40} /> },
  { name: "WordPress", icon: <SiWordpress size={40} /> },
  { name: "Git", icon: <FaGitAlt size={40} /> },
  { name: "MongoDB", icon: <AiFillDatabase size={40} /> },
  { name: "Docker", icon: <SiDocker size={40} /> },
  { name: "MySQL", icon: <SiMysql size={40} /> },
  { name: "SQLite", icon: <SiSqlite size={40} /> },
];

const courses = [
  { name: "UX & UI Design", icon: <MdSchool size={40} /> },
  { name: "Agile Development", icon: <MdSchool size={40} /> },
  { name: "Thesis Project", icon: <MdSchool size={40} /> },
  { name: "AI Swedens Lecture", icon: <MdSchool size={40} /> },
  { name: "Internship 1 & 2", icon: <MdSchool size={40} /> },
  { name: "Communication with Stakeholders", icon: <MdSchool size={40} /> },
];

const Content: React.FC<{ className?: string }> = ({ className }) => {
  const [techsVisible, setTechsVisible] = useState(false);
  const [coursesVisible, setCoursesVisible] = useState(false);

  const handleScroll = () => {
    const techsSection = document.querySelector(".tech-icons-container");
    const coursesSection = document.querySelector(".course-icons-container");

    if (
      techsSection &&
      techsSection.getBoundingClientRect().top < window.innerHeight * 0.75
    ) {
      setTechsVisible(true);
    } else {
      setTechsVisible(false);
    }

    if (
      coursesSection &&
      coursesSection.getBoundingClientRect().top < window.innerHeight * 0.75
    ) {
      setCoursesVisible(true);
    } else {
      setCoursesVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`content-container ${className}`}>
      <div className="heading-container">
        <h2>Technologies</h2>
      </div>
      <div className={`tech-icons-container ${techsVisible ? "visible" : ""}`}>
        {techs.map((tech) => (
          <div key={tech.name} className="tech-icon-container">
            {tech.icon}
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
      <div className="heading-container">
        <h2>Courses</h2>
      </div>
      <div
        className={`course-icons-container ${coursesVisible ? "visible" : ""}`}
      >
        {courses.map((course) => (
          <div key={course.name} className="course-icon-container">
            {course.icon}
            <span>{course.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
