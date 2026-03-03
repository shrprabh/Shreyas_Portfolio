import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components"; 
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import News from "./pages/News";
import Contact from "./pages/Contact";
import ScrollToTop from "./utils/ScrollToTop";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ScrollToTop /> {/* Add ScrollToTop component here */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
