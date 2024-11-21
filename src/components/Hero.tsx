import React from "react";
import { Typography, Button } from "antd";
import { theme } from "antd";
import { motion } from "framer-motion";
import { FaCode, FaLightbulb, FaUsers } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import "../styles/hero.css";

const { Title, Paragraph } = Typography;

const Hero: React.FC = () => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      style={{
        padding: "100px 20px",
        textAlign: "center",
        borderRadius: borderRadiusLG,
        maxWidth: "1200px",
        margin: "0 auto",
        marginBottom: "100px",
        marginTop: "100px",
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -200 }}
        animate={inView ? { opacity: 5, x: 2 } : {}}
        transition={{ duration: 0.9 }}
        className="hero-container"
      >
        {/* Background Animation */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            background: `url('your-background-image-url.jpg') no-repeat center center fixed`,
            backgroundSize: "cover",
            opacity: 0.8,
          }}
        >
          <motion.div
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 0.8 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>

        <Title level={1} className="hero-title">
          Why Work With Me?
        </Title>
        <Paragraph className="hero-paragraph">
          I bring a unique blend of creativity, technical expertise, and a
          passion for solving complex problems. Here's why collaborating with me
          will be a great decision:
        </Paragraph>

        <div className="hero-icons">
          <div className="hero-icon">
            <FaCode size={50} color="#134e13" />
            <Title level={4} className="hero-icon-title">
              Technical Excellence
            </Title>
            <Paragraph>
              Mastery of modern technologies and frameworks ensures that your
              project is built on a solid foundation.
            </Paragraph>
          </div>
          <div className="hero-icon">
            <FaLightbulb size={50} color="#134e13" />
            <Title level={4} className="hero-icon-title">
              Innovative Solutions
            </Title>
            <Paragraph>
              Creative problem-solving skills to deliver unique and effective
              solutions tailored to your needs.
            </Paragraph>
          </div>
          <div className="hero-icon">
            <FaUsers size={50} color="#134e13" />
            <Title level={4} className="hero-icon-title">
              Collaborative Spirit
            </Title>
            <Paragraph>
              Strong communication and teamwork abilities to ensure a smooth and
              successful project experience.
            </Paragraph>
          </div>
        </div>

        <Button className="link-button" size="large" href="#projects">
          View Projects
        </Button>
      </motion.div>
    </div>
  );
};

export default Hero;
