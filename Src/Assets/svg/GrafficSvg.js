import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const GrafficSvg = (props) => (
  <Svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_1435_7734)">
      <Path
        d="M12 21.2306C16.5518 21.2306 20.2418 17.5406 20.2418 12.9888C20.2418 8.43703 16.5518 4.74707 12 4.74707C7.4482 4.74707 3.75824 8.43703 3.75824 12.9888C3.75824 17.5406 7.4482 21.2306 12 21.2306Z"
        stroke="#41434F"
        strokeLinecap="square"
      />
      <Path
        d="M12.0001 4.74707V13.0618L15.2968 17.813"
        stroke="#41434F"
        strokeLinecap="square"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1435_7734">
        <Rect
          width={24}
          height={24}
          fill="white"
          transform="translate(0 0.989258)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default GrafficSvg;
