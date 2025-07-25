import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.light};
    z-index: -1;

    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      width: 100%;
      opacity: 0.5;
    }
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column-reverse;
    text-align: center;
    padding-top: 2rem;
  }
`;

const HeroText = styled.div`
  flex: 1;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: 2rem;
  }
`;

const Greeting = styled(motion.p)`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 1rem;
`;

const Name = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const Role = styled(motion.h2)`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 1.5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.text};
  max-width: 600px;
  margin-bottom: 2rem;
  line-height: 1.8;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 0 auto 2rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    justify-content: center;
  }
`;

const HeroImage = styled(motion.div)`
  flex: 1;
  max-width: 400px;
  height: 400px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid ${(props) => props.theme.colors.light};
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(80%);
    transition: all 0.5s ease;

    &:hover {
      filter: grayscale(0);
      transform: scale(1.03);
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 280px;
    height: 280px;
  }
`;

const Home: React.FC = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroText>
          <Greeting
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello, I'm
          </Greeting>

          <Name
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Shreyas Prabhakar
          </Name>

          <Role
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Software Engineer & ML Enthusiast
          </Role>

          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Passionate about growth and always learning. I specialize in
            building exceptional applications, focused on machine learning and
            software development with a particular interest in AI/ML
            applications.
          </Description>

          <ButtonGroup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/projects">
              <Button primary>View Projects</Button>
            </Link>
            <Link to="/experience">
              <Button>My Experience</Button>
            </Link>
            <Link to="/contact">
              <Button>Get in Touch</Button>
            </Link>
          </ButtonGroup>
        </HeroText>

        <HeroImage
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
            alt="Shreyas Prabhakar"
          />
        </HeroImage>
      </HeroContent>
    </HeroSection>
  );
};

export default Home;
