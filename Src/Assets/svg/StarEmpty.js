import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const SVGComponent = (props) => (
    <Svg
        width={14}
        height={14}
        viewBox="0 0 14 14"
        fill="none"
        {...props}
    >
        <G clipPath="url(#clip0_304_10842)">
            <Path
                d="M6.56351 10.1382L2.71515 12.2924L3.57452 7.9666L0.336182 4.97216L4.71599 4.45271L6.56351 0.447754L8.41103 4.45271L12.7908 4.97216L9.5525 7.9666L10.4119 12.2924L6.56351 10.1382ZM6.56351 8.88764L8.88082 10.1846L8.36302 7.58029L10.3126 5.77697L7.67552 5.46432L6.56351 3.05316L5.45151 5.46487L2.81446 5.77697L4.76401 7.58029L4.2462 10.1846L6.56351 8.88764Z"
                fill="#F6D060"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_304_10842">
                <Rect
                    width={13.0952}
                    height={13.0952}
                    fill="white"
                    transform="translate(0.0158691 0.174805)"
                />
            </ClipPath>
        </Defs>
    </Svg>
);
export default SVGComponent;
