import React from "react";
import Svg, { SvgProps } from "../Svg";

const EmailIcon: React.FC<SvgProps> = ({ color = "black", ...props }) => (
  <Svg viewBox="0 0 768 768" {...props}>
    <path
      fill={color}
      d="M692.274 230.764v-77.519l-308.274 192.896-308.274-192.896v77.519l308.274 191.094zM692.274 75.726q30.647 0 53.182 23.436t22.534 54.083v461.51q0 30.647-22.534 54.083t-53.182 23.436h-616.548q-30.647 0-53.182-23.436t-22.535-54.083v-461.51q0-30.647 22.535-54.083t53.182-23.436h616.548z"
    ></path>
  </Svg>
);

export default EmailIcon;
