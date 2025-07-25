import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.primary};
    transition: all 0.3s ease;
    
    &:hover {
      color: ${(props) => props.theme.colors.secondary};
    }
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: transparent;
  }

  section {
    padding: 5rem 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .section-title {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    position: relative;
    padding-bottom: 1rem;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100px;
      height: 3px;
      background: ${(props) => props.theme.colors.primary};
    }
  }
`;

export default GlobalStyle;
