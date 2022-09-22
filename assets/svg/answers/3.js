import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const ThirdAnswerIcon = props => (
  <Svg
    {...props}
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <G clipPath="url(#a)">
      <Path
        d="M17.5 1.25c-2.188 0-2.5 1.875-2.5 2.5S15 5 15.625 5s.625-.625.625-1.25.313-1.25 1.25-1.25c.938 0 1.25.625 1.25 1.25 0 3.125-3.75 5-5.625 5h-6.25C5 8.75 1.25 6.875 1.25 3.75c0-.625.313-1.25 1.25-1.25.938 0 1.25.625 1.25 1.25S3.75 5 4.375 5 5 4.375 5 3.75s-.313-2.5-2.5-2.5C.937 1.25 0 2.5 0 3.75 0 7.5 4.375 10 6.875 10h6.25C15.625 10 20 7.5 20 3.75c0-1.25-.938-2.5-2.5-2.5Z"
        fill="#F3C44E"
      />
      <Path
        d="M15.625 1.25c0-.625 0-1.25-.625-1.25H5c-.625 0-.625.625-.625 1.25 0 10.625 4.375 9.375 4.375 10.625v1.25c0 1.25-1.875.625-1.875 1.875h6.25c0-1.25-1.875-.625-1.875-1.875v-1.25c0-1.25 4.375 0 4.375-10.625Z"
        fill="#FFE8B6"
      />
      <Path
        d="M15.625 16.25H4.375a.625.625 0 0 0-.625.625v2.5c0 .345.28.625.625.625h11.25c.345 0 .625-.28.625-.625v-2.5a.625.625 0 0 0-.625-.625Z"
        fill="#564AE2"
      />
      <Path d="M13.125 17.5h-6.25v1.25h6.25V17.5Z" fill="#E6E6E6" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.125 15h-6.25S5 15 5 16.25h10C15 15 13.125 15 13.125 15ZM8.75 13.125h2.5a.625.625 0 0 0 0-1.25h-2.5a.625.625 0 0 0 0 1.25Z"
        fill="#F3C44E"
      />
      <Path
        d="M10.954 3.82c-.698 0-.954.73-.954.73s-.253-.73-.955-.73c-.528 0-1.13.43-.908 1.405.223.975 1.864 2.19 1.864 2.19s1.637-1.215 1.859-2.19c.222-.976-.336-1.405-.906-1.405Z"
        fill="#EDBF4C"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ThirdAnswerIcon;
