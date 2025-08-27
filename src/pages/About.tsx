import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SkillCard from "../components/SkillCard";
import { FaCode, FaDatabase, FaLaptopCode, FaTools } from "react-icons/fa";

const AboutSection = styled.section`
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

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const AboutContent = styled(motion.div)``;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.colors.text};
`;

const AboutImage = styled(motion.div)`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
    display: block;
    filter: grayscale(100%);
    transition: filter 0.5s ease;

    &:hover {
      filter: grayscale(0);
    }
  }
`;

const SkillsSection = styled.section`
  padding: 5rem 0;
  background-color: ${(props) => props.theme.colors.light};
`;

const SkillsTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 3rem;
  text-align: center;
  position: relative;

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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const About: React.FC = () => {
  // Skills data
  const skillsData = [
    {
      title: "Languages",
      icon: <FaCode />,
      skills: ["Python", "TypeScript/JavaScript", "C#", "HTML & CSS"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <FaLaptopCode />,
      skills: ["React", "Django", "TensorFlow", "PyTorch", ".NET"],
    },
    {
      title: "Databases",
      icon: <FaDatabase />,
      skills: ["MySQL", "MongoDB", "PostgreSQL"],
    },
    {
      title: "Tools & Technologies",
      icon: <FaTools />,
      skills: ["Git", "Docker", "AWS", "CI/CD", "Agile Methodologies"],
    },
  ];

  return (
    <>
      <AboutSection id="about">
        <Container>
          <HeaderContainer>
            <Title
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </Title>
            <Subtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Get to know me better
            </Subtitle>
          </HeaderContainer>

          <ContentWrapper>
            <AboutContent
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <AboutText>
                I'm Shreyas Prabhakar, a software engineer focused on data
                visualization, full‑stack development, and DevOps. I build
                user‑centric systems that turn complex signals into clear,
                actionable visuals. I hold an M.S. in Computer Science from
                Texas Tech University.
              </AboutText>
              <AboutText>
                Recently at NERSC, I built a graphical interface for exploring
                performance data and shaped it into a portable, testable tool
                using containers and CI/CD. I work closely with domain experts
                to understand bottlenecks, design experiments, and translate
                results into intuitive dashboards and workflows. I use AI/ML
                pragmatically, where it improves UX or insight.
              </AboutText>
              <AboutText>
                My approach is end‑to‑end: from problem framing and prototyping
                to profiling, iteration, and production. Day‑to‑day, that means
                React/TypeScript for interfaces; Python for data work and
                automation; and modern tooling (CI/CD, Docker, cloud) to ship
                reliably. I value clarity, performance, and reproducibility.
              </AboutText>
              <AboutText>
                Outside of work, I like refining small tools, reading about
                systems and visualization, and sharing what I learn. I care
                about building things that are understandable, measurable, and
                genuinely useful in both academic and production settings.
              </AboutText>
            </AboutContent>

            <AboutImage
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/aboutprofile.jpg"}
                alt="About Shreyas Prabhakar"
              />
            </AboutImage>
          </ContentWrapper>
        </Container>
      </AboutSection>

      <SkillsSection id="skills">
        <Container>
          <SkillsTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Skills
          </SkillsTitle>

          <SkillsGrid>
            {skillsData.map((skill, index) => (
              <SkillCard
                key={index}
                title={skill.title}
                icon={skill.icon}
                skills={skill.skills}
                delay={index * 0.1}
              />
            ))}
          </SkillsGrid>
        </Container>
      </SkillsSection>
    </>
  );
};

export default About;
