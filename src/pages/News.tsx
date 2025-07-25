import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaTrophy,
  FaMicrophoneAlt,
  FaCode,
  FaLaptopCode,
  FaFlask,
} from "react-icons/fa";

const NewsSection = styled.section`
  padding: 8rem 0 5rem;
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100vh;
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

const TimelineWrapper = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 0;

  &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 4px;
    background: ${(props) => props.theme.colors.accent};
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    border-radius: 2px;

    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  position: relative;
  margin-bottom: 2.5rem;
  width: 50%;

  &:nth-child(even) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 0;
    left: 50%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    padding-left: 70px;
    padding-right: 0;

    &:nth-child(even) {
      left: 0;
    }
  }
`;

const TimelineIcon = styled.div<{ color: string }>`
  position: absolute;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 50%;
  border: 3px solid ${(props) => props.color};
  color: ${(props) => props.color};
  font-size: 1.3rem;
  top: 0;
  z-index: 1;
  right: -25px;

  ${TimelineItem}:nth-child(even) & {
    right: auto;
    left: -25px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    left: 5px;

    ${TimelineItem}:nth-child(even) & {
      left: 5px;
    }
  }
`;

const ContentCard = styled.div<{ color: string }>`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.05);
  width: 100%;
  position: relative;
  border-left: 4px solid ${(props) => props.color};

  &:after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent
      ${(props) => props.theme.colors.background};
    top: 15px;
    right: -10px;
  }

  ${TimelineItem}:nth-child(even) & {
    border-left: none;
    border-right: 4px solid ${(props) => props.color};

    &:after {
      right: auto;
      left: -10px;
      border-width: 10px 10px 10px 0;
      border-color: transparent ${(props) => props.theme.colors.background}
        transparent transparent;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    border-left: 4px solid ${(props) => props.color};
    border-right: none;

    &:after {
      right: auto;
      left: -10px;
      border-width: 10px 10px 10px 0;
      border-color: transparent ${(props) => props.theme.colors.background}
        transparent transparent;
    }
  }
`;

const EventDate = styled.span`
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 0.5rem;
`;

const EventTitle = styled.h4`
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const EventLocation = styled.p`
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.text};
  font-style: italic;
  margin-bottom: 1rem;
`;

const EventDescription = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.text};
  line-height: 1.6;
`;

const EventTag = styled.span<{ color: string }>`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  background-color: ${(props) => props.color + "20"};
  color: ${(props) => props.color};
  margin-right: 0.5rem;
  margin-top: 0.8rem;
`;

// News/Updates Type Definition
interface NewsItem {
  date: string;
  title: string;
  location: string;
  description: string;
  type:
    | "hackathon"
    | "conference"
    | "presentation"
    | "update"
    | "award"
    | "project";
  tags?: string[];
}

const News: React.FC = () => {
  // Timeline of events and updates
  const newsItems: NewsItem[] = [
    {
      date: "May 19-24, 2025",
      title: "Attended Solana Scale or Die and Ship and Die Conference",
      location: "New York, NY",
      description:
        "Networked with blockchain club members from prestigious universities including Cornell, Columbia, and Princeton, establishing valuable connections in the blockchain ecosystem.",
      type: "conference",
      tags: [
        "Conference",
        "Venture Capital",
        "Funding",
        "Blockchain",
        "Cryptography",
      ],
    },
    {
      date: "May 17, 2025",
      title: "Graduated with Master's Degree in Computer Science",
      location: "Lubbock, TX",
      description:
        "Completed Master of Science degree from Texas Tech University with Magna Cum Laude honors, marking a significant milestone in my academic journey.",
      type: "award",
      tags: ["Magna Cum Laude", "Education", "Career Upgrade"],
    },
    {
      date: "April 14 - May 16, 2025",
      title: "Participated in Solana Breakout Hackathon by Colosseum",
      location: "Online",
      description:
        "Pitched a startup idea called 'Credence' with teammates Ezven and Studer, focusing on transforming informal learning into verifiable proof using blockchain technology.",
      type: "hackathon",
      tags: ["Conference", "Connections", "Blockchain", "Web3"],
    },
    {
      date: "February 28 - April 13, 2025",
      title: "Nexus Hackathon: Developed Veritas Vitae App",
      location: "Online",
      description:
        "Created a decentralized application on Solana blockchain with Phantom login that maintains a life ledger of educational and professional journeys from early education through retirement.",
      type: "hackathon",
      tags: ["Web3", "Blockchain", "Phantom Login", "Credential Verification"],
    },
    {
      date: "December 6, 2024",
      title: "Presented Brain Tumor Segmentation Research",
      location: "Lubbock, TX",
      description:
        "Showcased BraTS-PolypSegmentation work on advanced segmentation methods for brain tumor and polyp identification using deep learning techniques, receiving recognition from Professor Dr. Victor Sheng.",
      type: "presentation",
      tags: [
        "Neural Networks",
        "BraTS",
        "Medical Imaging",
        "MRI",
        "A100",
        "GPU",
      ],
    },
    {
      date: "November 14, 2024",
      title: "Runner-up in Volleyball Intramural Tournament",
      location: "Lubbock, TX",
      description:
        "Achieved runner-up position in the Volleyball Intramural Tournament organized by Texas Tech University Recreation Center.",
      type: "award",
      tags: ["Sports", "Volleyball", "Leisure"],
    },
    {
      date: "November 8-9, 2024",
      title: "Attended Midwest Blockchain Conference",
      location: "Ann Arbor, MI",
      description:
        "Participated in the conference at University of Michigan with the Web3 Acceleration Association club of Texas Tech, led by Ezven Gallaraza.",
      type: "conference",
      tags: ["Blockchain", "Web3", "AI"],
    },
    {
      date: "September 28, 2024",
      title: "Received Hindu Temple of Lubbock Graduate Student Scholarship",
      location: "Lubbock, TX",
      description:
        "Awarded a scholarship in recognition of academic excellence and community involvement.",
      type: "award",
      tags: ["Awarded", "Grateful", "Volunteering"],
    },
    {
      date: "September 15, 2024",
      title: "HackWesTX Hackathon Success",
      location: "Lubbock, TX",
      description:
        "Collaborated with teammates Mahendra and Siva to develop a PDF viewing application that helps students prepare for exams by providing targeted information from textbooks.",
      type: "hackathon",
      tags: ["Firebase", "React", "OpenAI", "Chat App", "HTML", "CSS"],
    },
    {
      date: "August 6, 2024",
      title:
        "Presented BilboMD Poster at Lawrence Berkeley National Laboratory",
      location: "Berkeley, CA",
      description:
        "Showcased research on 'BilboMD: Implementing CI/CD for an Experiment Driven Multistep Data Analysis Pipeline on Perlmutter' under the guidance of Dr. Scott Classen, Dr. Dhruva Kulkarni, and Principal Investigator Dr. Jack Deslippe.",
      type: "presentation",
      tags: [
        "Research",
        "Molecular Dynamics",
        "CI/CD",
        "Supercomputing",
        "React",
        "DevOps",
      ],
    },
  ];

  // Get icon based on event type
  const getIcon = (type: string) => {
    switch (type) {
      case "hackathon":
        return <FaLaptopCode />;
      case "conference":
        return <FaMicrophoneAlt />;
      case "presentation":
        return <FaMicrophoneAlt />;
      case "update":
        return <FaCalendarAlt />;
      case "award":
        return <FaTrophy />;
      case "project":
        return <FaCode />;
      default:
        return <FaFlask />;
    }
  };

  // Get color based on event type
  const getColor = (type: string) => {
    switch (type) {
      case "hackathon":
        return "#3498db"; // Blue
      case "conference":
        return "#9b59b6"; // Purple
      case "presentation":
        return "#e74c3c"; // Red
      case "update":
        return "#2ecc71"; // Green
      case "award":
        return "#f39c12"; // Orange
      case "project":
        return "#1abc9c"; // Teal
      default:
        return "#34495e"; // Dark Blue
    }
  };

  // Animation variants
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <NewsSection id="news">
      <Container>
        <HeaderContainer>
          <Title
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Recent Updates
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Stay updated with my latest activities, presentations, and
            achievements
          </Subtitle>
        </HeaderContainer>

        <TimelineWrapper>
          <motion.div
            variants={containerAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {newsItems.map((item, index) => (
              <TimelineItem key={index} variants={itemAnimation}>
                <TimelineIcon color={getColor(item.type)}>
                  {getIcon(item.type)}
                </TimelineIcon>
                <ContentCard color={getColor(item.type)}>
                  <EventDate>{item.date}</EventDate>
                  <EventTitle>{item.title}</EventTitle>
                  <EventLocation>{item.location}</EventLocation>
                  <EventDescription>{item.description}</EventDescription>
                  {item.tags &&
                    item.tags.map((tag, i) => (
                      <EventTag key={i} color={getColor(item.type)}>
                        {tag}
                      </EventTag>
                    ))}
                </ContentCard>
              </TimelineItem>
            ))}
          </motion.div>
        </TimelineWrapper>
      </Container>
    </NewsSection>
  );
};

export default News;
