import { DefaultTheme } from "styled-components";

// Extend the DefaultTheme interface
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      primary: string;
      secondary: string;
      accent: string;
      light: string;
      dark: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}

const theme: DefaultTheme = {
  colors: {
    background: "#ffffff",
    text: "#333333",
    primary: "#000000",
    secondary: "#444444",
    accent: "#888888",
    light: "#f5f5f5",
    dark: "#212121",
  },
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
};

export default theme;
