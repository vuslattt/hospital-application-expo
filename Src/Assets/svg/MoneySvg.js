import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const MoneySvg = (props) => (
  <Svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_1435_7750)">
      <G clipPath="url(#clip1_1435_7750)">
        <Path
          d="M20.0001 5.98633H4.00006C2.89549 5.98633 2.00006 6.88176 2.00006 7.98633V17.9863C2.00006 19.0909 2.89549 19.9863 4.00006 19.9863H20.0001C21.1046 19.9863 22.0001 19.0909 22.0001 17.9863V7.98633C22.0001 6.88176 21.1046 5.98633 20.0001 5.98633Z"
          stroke="#41434F"
          strokeLinecap="square"
        />
        <Path
          d="M2.00006 14.9863H22.0001"
          stroke="#41434F"
          strokeLinecap="square"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="clip0_1435_7750">
        <Rect
          width={24}
          height={24}
          fill="white"
          transform="translate(0 0.986328)"
        />
      </ClipPath>
      <ClipPath id="clip1_1435_7750">
        <Rect
          width={24}
          height={24}
          fill="white"
          transform="translate(0 0.986328)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default MoneySvg;