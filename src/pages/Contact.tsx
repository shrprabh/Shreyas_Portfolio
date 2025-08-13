import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "../components/Button";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const ContactSection = styled.section`
  padding: 8rem 0 10rem;
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
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

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled(motion.div)``;

const ContactText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.colors.text};
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const IconContainer = styled.div`
  font-size: 1.5rem;
  margin-right: 1rem;
  color: ${(props) => props.theme.colors.primary};
`;

const ContactDetail = styled.div`
  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
  }

  p,
  a {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.text};
  }

  a:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    transform: translateY(-3px);
  }
`;

const FormContainer = styled(motion.div)``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border: 1px solid ${(props) => props.theme.colors.accent};
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.background};
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border: 1px solid ${(props) => props.theme.colors.accent};
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.background};
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
    outline: none;
  }
`;

// We're using the regular Button component directly
// If specific styling is needed, uncomment and use this instead
// const SubmitButton = styled(Button)`
//   align-self: flex-start;
// `;

const MessageSuccess = styled(motion.p)`
  color: #388e3c;
  margin-top: 1rem;
  padding: 0.8rem;
  background-color: rgba(56, 142, 60, 0.1);
  border-left: 3px solid #388e3c;
  border-radius: 4px;
`;

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("https://formspree.io/f/mnnzwkey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        console.error("Formspree error", await res.text());
      }
    } catch (err) {
      console.error("Submission failed", err);
    }
  };

  return (
    <ContactSection id="contact">
      <Container>
        <HeaderContainer>
          <Title
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Me
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Let's get in touch
          </Subtitle>
        </HeaderContainer>

        <ContactWrapper>
          <ContactInfo
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ContactText>
              I'm interested in software engineering opportunities, machine
              learning projects, and collaborations. If you have any questions
              or want to discuss potential projects, don't hesitate to reach out
              using the form or via direct contact methods.
            </ContactText>

            <ContactInfoItem>
              <IconContainer>
                <FaMapMarkerAlt />
              </IconContainer>
              <ContactDetail>
                <h4>Location</h4>
                <p>Texas Tech, United States</p>
              </ContactDetail>
            </ContactInfoItem>

            <ContactInfoItem>
              <IconContainer>
                <FaEnvelope />
              </IconContainer>
              <ContactDetail>
                <h4>Email</h4>
                <a href="mailto:shreyas.prabhakar@icloud.com">
                  shreyas.prabhakar@icloud.com
                </a>
              </ContactDetail>
            </ContactInfoItem>

            <ContactInfoItem>
              <IconContainer>
                <FaPhoneAlt />
              </IconContainer>
              <ContactDetail>
                <h4>Phone</h4>
                <p>+1 (806) 283-6481</p>
              </ContactDetail>
            </ContactInfoItem>

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
          </ContactInfo>

          <FormContainer
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Form id="contact-form" onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <div style={{ marginBottom: "2rem" }}>
                <Button primary size="medium" type="submit">
                  Send Message
                </Button>
              </div>

              {isSubmitted && (
                <MessageSuccess
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Thank you! Your message has been sent via Formspree. I'll get
                  back to you soon. If you prefer, you can also email me
                  directly at shreyas.prabhakar@icloud.com
                </MessageSuccess>
              )}
            </Form>
          </FormContainer>
        </ContactWrapper>
      </Container>
    </ContactSection>
  );
};

export default Contact;
