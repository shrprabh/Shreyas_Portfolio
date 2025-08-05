import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 1.2rem 1.5rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 1rem 1.2rem;
  }
`;

const Logo = styled(Link)`
  font-family: "Playfair Display", serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: block;
  }
`;

const NavItems = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    background-color: ${(props) => props.theme.colors.background};
    padding: 6rem 2rem;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-in-out;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  }
`;

const NavItem = styled(motion.div)`
  margin: 0 1.5rem;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 1.5rem 0;
    width: 100%;
    text-align: center;
  }
`;

const NavLink = styled(Link)<{ active: boolean }>`
  font-size: 1rem;
  font-weight: ${({ active }) => (active ? "600" : "400")};
  color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.secondary};
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: ${({ active }) => (active ? "100%" : "0")};
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: ${(props) => props.theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Updates", path: "/news" },
    { name: "Contact", path: "/contact" },
    { name: "Poster Feedback", path: "/poster-feedback" },
  ];

  return (
    <Nav>
      <Logo to="/">SP</Logo>

      <MenuIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>

      <NavItems isOpen={isOpen}>
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <NavLink
              to={item.path}
              active={location.pathname === item.path}
              onClick={closeMenu}
            >
              {item.name}
            </NavLink>
          </NavItem>
        ))}
      </NavItems>
    </Nav>
  );
};

export default Navbar;
