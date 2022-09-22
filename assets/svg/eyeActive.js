import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const EyeActive = props => (
  <Svg
    {...props}
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <G opacity={0.8} clipPath="url(#a)">
      <Path
        opacity={0.8}
        d="M14.722 7.597c-1.481-3.12-3.72-4.69-6.722-4.69-3.003 0-5.24 1.57-6.722 4.692a.942.942 0 0 0 0 .804c1.481 3.12 3.72 4.69 6.722 4.69 3.003 0 5.24-1.57 6.722-4.691a.942.942 0 0 0 0-.805ZM8 11.969c-2.52 0-4.366-1.278-5.667-3.969C3.634 5.31 5.48 4.031 8 4.031s4.366 1.278 5.667 3.97c-1.3 2.69-3.145 3.968-5.667 3.968ZM7.938 5.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm0 4.5a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 1 1 0 3.5Z"
        fill="#000"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default EyeActive;
