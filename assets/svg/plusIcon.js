import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

const PlusIcon = props => (
  <Svg
    {...props}
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Rect width={48} height={48} rx={24} fill="#564AE2" />
    <Path
      d="M24.042 18v11.842M30.083 23.922H18"
      stroke="#fff"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default PlusIcon;
