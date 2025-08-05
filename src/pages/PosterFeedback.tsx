import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const FeedbackSection = styled.section`
  min-height: 100vh;
  padding: 8rem 0 5rem;
  background: ${(props) => props.theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeedbackContainer = styled.div`
  max-width: 600px;
  width: 100%;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  padding: 2rem;
`;

const PosterFeedback: React.FC = () => (
  <FeedbackSection>
    <FeedbackContainer>
      <h2 style={{ color: "#e74c3c", marginBottom: "1rem" }}>
        A Graphical User Interface for Visualizing Performance Data at NERSC
      </h2>
      <p style={{ marginBottom: "1.2rem", color: "#555", fontSize: "1.08rem" }}>
        Thank you for visiting my poster at the 2025 CS Summer Poster Session
        (NERSC, Berkeley). I would be grateful if you could kindly share your
        thoughts or suggestions about my work. Your feedback is highly
        appreciated!
      </p>
      <form
        action="https://formspree.io/f/meozrgpa"
        method="POST"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="poster-feedback-name"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: 500,
            }}
          >
            Name (optional)
          </label>
          <input
            type="text"
            id="poster-feedback-name"
            name="name"
            style={{
              width: "100%",
              padding: "0.7rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="poster-feedback-email"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: 500,
            }}
          >
            Email (optional)
          </label>
          <input
            type="email"
            id="poster-feedback-email"
            name="email"
            style={{
              width: "100%",
              padding: "0.7rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            placeholder="Your email address if you'd like me to follow up"
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="poster-feedback-message"
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: 500,
            }}
          >
            Your Feedback
          </label>
          <textarea
            id="poster-feedback-message"
            name="message"
            required
            style={{
              width: "100%",
              minHeight: "100px",
              padding: "0.7rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            placeholder="Share your thoughts, suggestions, or questions..."
          ></textarea>
        </div>
        <Button primary size="medium" type="submit">
          Submit Feedback
        </Button>
      </form>
    </FeedbackContainer>
  </FeedbackSection>
);

export default PosterFeedback;
