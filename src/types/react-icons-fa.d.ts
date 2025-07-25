import React from "react";

declare module "react-icons/fa" {
  export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    children?: React.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
  }

  export type IconType = (props: IconBaseProps) => JSX.Element;

  export const FaBars: IconType;
  export const FaTimes: IconType;
  export const FaGithub: IconType;
  export const FaLinkedin: IconType;
  export const FaEnvelope: IconType;
  export const FaExternalLinkAlt: IconType;
  export const FaCode: IconType;
  export const FaLaptopCode: IconType;
  export const FaDatabase: IconType;
  export const FaTools: IconType;
  export const FaMapMarkerAlt: IconType;
  export const FaPhoneAlt: IconType;
}
