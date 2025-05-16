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
        <G clipPath="url(#clip0_304_10840)">
            <Path
                d="M6.54764 10.1382L2.69928 12.2924L3.55866 7.9666L0.320312 4.97216L4.70012 4.45271L6.54764 0.447754L8.39516 4.45271L12.775 4.97216L9.53663 7.9666L10.396 12.2924L6.54764 10.1382Z"
                fill="#F6D060"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_304_10840">
                <Rect
                    width={props.width || 13.0952}
                    height={props.height || 13.0952}
                    fill="white"
                    transform="translate(0 0.174805)"
                />
            </ClipPath>
        </Defs>
    </Svg>
);
export default SVGComponent;
