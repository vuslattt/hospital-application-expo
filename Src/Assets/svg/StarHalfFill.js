import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
    <Svg
        width={14}
        height={14}
        viewBox="0 0 14 14"
        fill="none"
        {...props}
    >
        <Path
            d="M7.30961 8.88764L9.62692 10.1846L9.10911 7.58029L11.0587 5.77697L8.42161 5.46432L7.30961 3.05316V8.88764ZM7.30961 10.1382L3.46124 12.2924L4.32062 7.9666L1.08228 4.97216L5.46209 4.45271L7.30961 0.447754L9.15713 4.45271L13.5369 4.97216L10.2986 7.9666L11.158 12.2924L7.30961 10.1382V10.1382Z"
            fill="#F6D060"
        />
    </Svg>
);
export default SVGComponent;
