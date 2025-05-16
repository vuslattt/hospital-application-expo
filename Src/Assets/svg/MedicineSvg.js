import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */
const SVGComponent = (props) => (
  <Svg
    width="800px"
    height="800px"
    viewBox="0 0 30 30"
    id="Layer_1"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path
      className="st0"
      d="M13.5,23.8c-2.6,1.9-6.2,1.6-8.6-0.7c-2.6-2.6-2.6-6.8,0-9.4l8.7-8.7C15,3.6,16.7,3,18.4,3  c1.7,0,3.4,0.6,4.7,1.9c2.3,2.3,2.6,6,0.7,8.6C22.9,13.2,22,13,21,13c-0.3,0-0.6,0-0.9,0.1l0.8-0.8c1.4-1.4,1.4-3.7,0-5.1  C20.2,6.4,19.3,6,18.4,6c-1,0-1.9,0.4-2.6,1.1L12,10.8l3.9,3.9c-1.8,1.5-3,3.7-3,6.2C13,22,13.2,22.9,13.5,23.8z M25.2,16.8  C25.2,16.8,25.2,16.8,25.2,16.8L25.2,16.8z M24.5,16.1c-1-0.7-2.2-1.1-3.5-1.1c-3.3,0-6,2.7-6,6c0,1.3,0.4,2.5,1.1,3.5L24.5,16.1z   M25.9,17.5l-8.4,8.4c1,0.7,2.2,1.1,3.5,1.1c3.3,0,6-2.7,6-6C27,19.7,26.6,18.5,25.9,17.5z M16.8,25.2  C16.8,25.2,16.8,25.2,16.8,25.2L16.8,25.2z"
    />
  </Svg>
);
export default SVGComponent;
