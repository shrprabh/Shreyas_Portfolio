import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface ButtonProps {
  primary?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}

const StyledButton = styled(motion.button)<ButtonProps>`
  background-color: ${(props) =>
    props.primary ? props.theme.colors.primary : "transparent"};
  color: ${(props) =>
    props.primary ? props.theme.colors.light : props.theme.colors.primary};
  border: 2px solid ${(props) => props.theme.colors.primary};
  padding: ${(props) => {
    switch (props.size) {
      case "small":
        return "0.5rem 1rem";
      case "large":
        return "1rem 2.5rem";
      default:
        return "0.75rem 2rem";
    }
  }};
  font-family: "Montserrat", sans-serif;
  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return "0.8rem";
      case "large":
        return "1.2rem";
      default:
        return "1rem";
    }
  }};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: ${(props) => {
      switch (props.size) {
        case "small":
          return "0.7rem";
        case "large":
          return "1rem";
        default:
          return "0.9rem";
      }
    }};
    padding: ${(props) => {
      switch (props.size) {
        case "small":
          return "0.4rem 0.8rem";
        case "large":
          return "0.8rem 1.8rem";
        default:
          return "0.6rem 1.5rem";
      }
    }};
  }

  &:hover {
    background-color: ${(props) =>
      props.primary
        ? props.theme.colors.secondary
        : props.theme.colors.primary};
    color: ${(props) => props.theme.colors.light};
  }
`;

const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  onClick,
  type = "button",
  children,
}) => {
  return (
    <StyledButton
      primary={primary}
      size={size}
      onClick={onClick}
      type={type}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ width: '100%' }}  // Make button width 100% to improve mobile responsiveness
    >
      {children}
    </StyledButton>
  );
};

export default Button;
