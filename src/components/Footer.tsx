import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const FooterContainer = styled.footer`
  padding: 3rem 0;
  background-color: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.light};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const SocialLink = styled.a`
  color: ${(props) => props.theme.colors.light};
  font-size: 1.5rem;
  margin: 0 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  text-align: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <SocialLink
            href="https://github.com/shrprabh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/shreyasprabhakar/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </SocialLink>
          <SocialLink
            href="mailto:shreyas.prabhakar@icloud.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </SocialLink>
        </SocialLinks>
        <Copyright>
          &copy; {new Date().getFullYear()} Shreyas Prabhakar. All rights
          reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
