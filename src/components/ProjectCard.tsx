import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo?: string;
  delay?: number;
}

const Card = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.light};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease, filter 0.5s ease;
  filter: grayscale(100%);

  ${Card}:hover & {
    transform: scale(1.05);
    filter: grayscale(0%);
  }
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.primary};
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`;

const Tech = styled.span`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.secondary};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.accent};
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.primary};
  font-size: 0.9rem;
  font-weight: 500;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  github,
  demo,
  delay = 0,
}) => {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <TechStack>
          {technologies.map((tech, index) => (
            <Tech key={index}>{tech}</Tech>
          ))}
        </TechStack>
        <Links>
          {github && (
            <Link href={github} target="_blank" rel="noopener noreferrer">
              <FaGithub /> Code
            </Link>
          )}
          {demo && (
            <Link href={demo} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt />{" "}
              {demo.includes("pypi.org") ? "Package" : "Live Demo"}
            </Link>
          )}
        </Links>
      </Content>
    </Card>
  );
};

export default ProjectCard;
