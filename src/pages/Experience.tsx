import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const ExperienceSection = styled.section`
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

const ResearchInterests = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.02);
`;

const InterestsTitle = styled.h3`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const InterestsList = styled.p`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.text};
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const TimelineContainer = styled.div`
  margin: 2rem 0;
`;

const CategoryTitle = styled.h3`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 2rem;
  border-bottom: 2px solid ${(props) => props.theme.colors.accent};
  padding-bottom: 0.5rem;

  svg {
    margin-right: 0.8rem;
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background: ${(props) => props.theme.colors.accent};

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 2.5rem;
  padding-left: 2.5rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 45%;
    padding-left: 0;
    &:nth-child(odd) {
      margin-left: auto;
      padding-left: 2.5rem;
    }
    &:nth-child(even) {
      margin-right: auto;
      padding-right: 2.5rem;
      text-align: right;
    }
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: -9px;
  top: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.primary};
  z-index: 1;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    left: auto;
    right: -10px;

    ${TimelineItem}:nth-child(odd) & {
      right: auto;
      left: -10px;
    }
  }
`;

const TimelineContent = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.05);
  border-left: 3px solid ${(props) => props.theme.colors.primary};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    ${TimelineItem}:nth-child(even) & {
      border-left: none;
      border-right: 3px solid ${(props) => props.theme.colors.primary};
    }
  }
`;

const TimelineDate = styled.span`
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h4`
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const TimelineSubtitle = styled.h5`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 1rem;
  font-weight: 500;
`;

const TimelineDescription = styled.div`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.text};
  line-height: 1.6;

  ul {
    padding-left: 1.2rem;

    @media (min-width: ${(props) => props.theme.breakpoints.md}) {
      ${TimelineItem}:nth-child(even) & {
        padding-left: 0;
        padding-right: 1.2rem;
      }
    }
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const Experience: React.FC = () => {
  const workExperience = [
    {
      title: "Graduate Student Research Assistant",
      company: "Lawrence Berkeley National Laboratory, NERSC",
      location: "Berkeley, CA",
      period: "May 2024–Present",
      description: [
        "Developed a multi-tenant performance dashboard to monitor over 150 supercomputer metrics, including GPU/CPU utilization, vmstat, and job-level views.",
        "Implemented secure account-management micro-service, cutting support tickets 80% for the bilbomd App.",
        "Created a pipeline and developed a docker script to create images and deploy them on internal application called wrancher.",
        "Created cutting-edge visualization of the PDB dataset in molecular dynamics, integrating real-world experimental data with predicted protein structures from AlphaFold and ColabFold.",
      ],
    },
    {
      title: "Department Intern (Part-time)",
      company: "Texas Tech University Health Sciences Center",
      location: "Lubbock, TX",
      period: "April 2024–Sept 2024",
      description: [
        "Leading the development of an advanced Employee Resource Management application.",
        "Architected and deployed a cutting-edge real-time notification system tailored for supervisors.",
        "Utilizing Signal-R within the ASP.NET MVC framework, integrated HTML, CSS, JavaScript, jQuery, and MSSQL to achieve unparalleled efficiency and responsiveness.",
      ],
    },
    {
      title: "Research Project Lead",
      company: "Texas Tech University",
      location: "Lubbock, TX",
      period: "August 2023–May 2024",
      description: [
        "Led the redevelopment of an educational web application, similar to Coursera.",
        "Guided a dynamic group of fifteen developers and two designers in the successful implementation and launch of an online educative web application.",
        "Optimized performance and reduced API response time by 40% through SQL schema and database structure remodeling and normalization to 5NF.",
      ],
    },
    {
      title: "Software Engineer II (FullStack)",
      company: "TerraLogic",
      location: "Bengaluru, India",
      period: "Oct 2021–Aug 2023",
      description: [
        "Ensured data privacy for over 10,000 employees by optimizing cross-platform encryption using Angular, Java, Python, and C#.",
        "Developed an O(n log n) method-similarity algorithm and implemented server-side pagination using Django REST framework.",
        "Automated network visualization and developed a CI/CD pipeline, reducing the manual deployment of Docker images with each version by 75%.",
      ],
    },
    {
      title: "System Engineer (.NET FullStack)",
      company: "Infosys",
      location: "Bengaluru, India",
      period: "Jan 2020–Oct 2021",
      description: [
        "Completed intensive training in Python, DSA, Angular, SQL, React, ASP.NET Core (top 2% of cohort).",
        "Delivered Job Rotation Portal PoC in 14 days, achieving 99% stakeholder approval.",
        "Collaborated with the Microsoft Dynamics 365 team to identify, troubleshoot, and resolve high-priority software bugs.",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Texas Tech University",
      location: "Lubbock, TX",
      period: "Aug 2023–May 2025",
      description: [
        "GPA: 3.75/4.00",
        "Graduate School Competitive Tuition Scholarship",
      ],
    },
    {
      degree: "BE in Computer Science",
      institution: "Maharaja Institute of Technology",
      location: "Mysuru, India",
      period: "2015–2019",
      description: ["Karnataka State Scholarship for Engineering Program"],
    },
  ];

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <ExperienceSection id="experience">
      <Container>
        <HeaderContainer>
          <Title
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Experience & Education
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            My professional journey and academic background
          </Subtitle>
        </HeaderContainer>

        <ResearchInterests>
          <InterestsTitle>Research Interests</InterestsTitle>
          <InterestsList>
            Generative AI, Data Visualization, Security & Privacy, DevOps,
            FullStack Development, Web3 and Blockchain
          </InterestsList>
        </ResearchInterests>

        <TimelineContainer>
          <CategoryTitle>
            <FaBriefcase /> Work Experience
          </CategoryTitle>

          <Timeline>
            <motion.div
              variants={containerAnimation}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
            >
              {workExperience.map((job, index) => (
                <TimelineItem key={index} variants={itemAnimation}>
                  <TimelineDot />
                  <TimelineContent>
                    <TimelineDate>{job.period}</TimelineDate>
                    <TimelineTitle>{job.title}</TimelineTitle>
                    <TimelineSubtitle>
                      {job.company}, {job.location}
                    </TimelineSubtitle>
                    <TimelineDescription>
                      <ul>
                        {job.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </TimelineDescription>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </motion.div>
          </Timeline>
        </TimelineContainer>

        <TimelineContainer>
          <CategoryTitle>
            <FaGraduationCap /> Education
          </CategoryTitle>

          <Timeline>
            <motion.div
              variants={containerAnimation}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
            >
              {education.map((edu, index) => (
                <TimelineItem key={index} variants={itemAnimation}>
                  <TimelineDot />
                  <TimelineContent>
                    <TimelineDate>{edu.period}</TimelineDate>
                    <TimelineTitle>{edu.degree}</TimelineTitle>
                    <TimelineSubtitle>
                      {edu.institution}, {edu.location}
                    </TimelineSubtitle>
                    <TimelineDescription>
                      <ul>
                        {edu.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </TimelineDescription>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </motion.div>
          </Timeline>
        </TimelineContainer>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
