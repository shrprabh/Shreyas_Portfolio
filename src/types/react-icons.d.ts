import React from "react";
import { SVGProps } from "react";

declare module "react-icons/*" {
  // Define the icon component type compatible with React 19
  export interface IconType extends React.FC<SVGProps<SVGSVGElement>> {
    (props: SVGProps<SVGSVGElement>): React.JSX.Element;
  }

  // Re-export all icons with proper typing
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
