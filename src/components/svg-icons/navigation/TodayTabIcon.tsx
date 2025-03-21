import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@/types/interfaces';

const SparkTabIcon: React.FC<IconProps> = ({color = '#5f6368', size}) => (
  <Svg width={size} height={size} viewBox="0 -960 960 960" fill={color}>
    <Path d="M226.89-126.15q-25.75 0-43.55-17.8-17.8-17.8-17.8-43.56v-506.21q0-25.76 17.8-43.56t43.74-17.8h73.84v-89.23h40v89.23h281.23v-89.23h36.93v89.23h73.84q25.94 0 43.74 17.8t17.8 43.56v506.21q0 25.76-17.8 43.56t-43.55 17.8H226.89Zm.19-36.93h505.84q9.23 0 16.93-7.69 7.69-7.69 7.69-16.92v-346.46H202.46v346.46q0 9.23 7.69 16.92 7.7 7.69 16.93 7.69Zm-24.62-408h555.08v-122.46q0-9.23-7.69-16.92-7.7-7.69-16.93-7.69H227.08q-9.23 0-16.93 7.69-7.69 7.69-7.69 16.92v122.46Zm0 0v-147.07 147.07Z" />
  </Svg>
);

export default SparkTabIcon;
