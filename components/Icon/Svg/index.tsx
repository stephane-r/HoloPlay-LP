import React from "react";

export interface SvgProps {
  width: number;
  color?: string;
}

export interface Props extends SvgProps {
  children: React.ReactChild | React.ReactChild[];
}

const Svg: React.FC<Props> = ({ viewBox, width, children }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    style={{
      display: "inline-block",
      enableBackground: `new ${viewBox}`,
      width,
    }}
    xmlSpace="preserve"
  >
    {children}
  </svg>
);

export default Svg;
