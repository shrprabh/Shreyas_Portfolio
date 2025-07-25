import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  delay?: number;
}

const Card = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.light};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`;

const IconContainer = styled.div`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.primary};
`;

const SkillsList = styled.ul`
  list-style-type: none;
`;

const Skill = styled.li`
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  position: relative;
  padding-left: 1.5rem;

  &:before {
    content: "▹";
    position: absolute;
    left: 0;
    color: ${(props) => props.theme.colors.accent};
  }
`;

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  icon,
  skills,
  delay = 0,
}) => {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <IconContainer>{icon}</IconContainer>
      <Title>{title}</Title>
      <SkillsList>
        {skills.map((skill, index) => (
          <Skill key={index}>{skill}</Skill>
        ))}
      </SkillsList>
    </Card>
  );
};

export default SkillCard;
