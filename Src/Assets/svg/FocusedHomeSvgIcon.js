import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const HomeSvgIcon = (props) => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G clipPath="url(#clip0_324_3788)">
            <Path
                d="M16 1C16.552 1 17 1.448 17 2V5H21C21.552 5 22 5.448 22 6V20C22 20.552 21.552 21 21 21H3C2.448 21 2 20.552 2 20V6C2 5.448 2.448 5 3 5H7V2C7 1.448 7.448 1 8 1H16ZM13 9H11V12H8V14H10.999L11 17H13L12.999 14H16V12H13V9ZM15 3H9V5H15V3Z"
                fill="#4D507A"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_324_3788">
                <Rect width={24} height={24} fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
);
export default HomeSvgIcon;
