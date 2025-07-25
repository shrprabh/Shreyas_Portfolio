import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const ProjectsSection = styled.section`
  padding: 8rem 0 5rem;
  background-color: ${(props) => props.theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.secondary};
  max-width: 700px;
  margin: 0 auto;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const GithubLink = styled(motion.a)`
  display: block;
  margin: 3rem auto 0;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: underline;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const Projects: React.FC = () => {
  // Project data - based on GitHub repositories
  const projectsData = [
    {
      title: "Canvas Shield Chrome Extension",
      description:
        "A privacy-focused Chrome extension that detects and blocks canvas fingerprinting techniques used by websites to track users across the web without consent.",
      image: `${process.env.PUBLIC_URL}/images/project1.jpg`,
      technologies: [
        "JavaScript",
        "Chrome Extensions",
        "Privacy",
        "Web Security",
      ],
      github: "https://github.com/shrprabh/CanvasShield",
      demo: "https://chromewebstore.google.com/detail/canvas-fingerprint-detect/lnmplbdpfpnkikhdhcaonccbjgafahlj",
    },
    {
      title: "BraTS-PolypSegmentation",
      description:
        "Implementation of advanced segmentation methods for brain tumor (BraTS) and polyp identification using deep learning techniques with a focus on medical image analysis.",
      image: `${process.env.PUBLIC_URL}/images/project2.jpg`,
      technologies: ["Python", "PyTorch", "Deep Learning", "Medical Imaging"],
      github: "https://github.com/shrprabh/BraTS-PolypSegmentation",
    },
    {
      title: "HackWES-PDFChatGenius",
      description:
        "An innovative project that transforms the way you interact with PDF documents. Upload your PDF and chat with it, leveraging AI to extract and analyze information from your documents.",
      image: `${process.env.PUBLIC_URL}/images/project3.jpg`,
      technologies: ["TypeScript", "React", "AI", "PDF Processing"],
      github: "https://github.com/shrprabh/HackWES-PDFChatGenius",
      demo: "https://shrprabh.github.io/pdf-chat-genius/",
    },
    {
      title: "Credence",
      description:
        "A TypeScript-based application with a focus on secure and efficient data handling, implementing best practices in software development.",
      image: `${process.env.PUBLIC_URL}/images/project4.svg`,
      technologies: [
        "TypeScript",
        "Node.js",
        "Security",
        "Model Context Protocol",
        "AI",
        "Web 3",
        "Blockchain",
        "NFT",
      ],
      github: "https://github.com/shrprabh/Credence",
      demo: "https://www.youtube.com/watch?v=mIjxIVNl6QA",
    },
    {
      title: "GitLab CI/CD WiFi Speed Tester",
      description:
        "A lightweight Python package demonstrating GitLab CI/CD capabilities with an interactive WiFi Speed Test dashboard for Jupyter notebooks, featuring real-time metrics visualization and system information display.",
      image: `${process.env.PUBLIC_URL}/images/project5.jpg`,
      technologies: ["Python", "GitLab CI/CD", "PyPI", "Jupyter", "Plotly"],
      github: "",
      demo: "https://pypi.org/project/gitlab-cicd-project/",
    },
    {
      title: "Breast Cancer Prediction System",
      description:
        "A machine learning based system for predicting breast cancer utilizing various ML algorithms for early diagnosis and improved accuracy.",
      image: `${process.env.PUBLIC_URL}/images/project6.png`,
      technologies: [
        "Python",
        "Machine Learning",
        "Jupyter Notebook",
        "Healthcare",
      ],
      github:
        "https://github.com/shrprabh/Breast-Cancer-Prediction-System-Utilizing-Machine-Learning-Algorithms-Group-15",
    },
  ];

  return (
    <ProjectsSection id="projects">
      <Container>
        <HeaderContainer>
          <Title
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Check out some of my recent work
          </Subtitle>
        </HeaderContainer>

        <ProjectsGrid>
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
              delay={index * 0.1}
            />
          ))}
        </ProjectsGrid>

        <GithubLink
          href="https://github.com/shrprabh?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          View more projects on GitHub
        </GithubLink>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
