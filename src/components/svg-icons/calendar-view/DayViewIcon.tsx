import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@/types/interfaces';
import { screenHeight } from '@/styles/constant';

const DayViewIcon: React.FC<IconProps> = ({
  color = '#5f6368',
  size = screenHeight,
}) => (
  <Svg height={size} viewBox="0 -960 960 960" width={size} fill={color}>
    <Path d="M226.89-324.31q-25.75 0-43.55-17.8-17.8-17.8-17.8-43.6v-188.58q0-25.8 17.8-43.6t43.55-17.8h506.22q25.75 0 43.55 17.8 17.8 17.8 17.8 43.6v188.58q0 25.8-17.8 43.6t-43.55 17.8H226.89Zm.19-36.92h505.84q9.23 0 16.93-7.69 7.69-7.7 7.69-16.93v-188.3q0-9.23-7.69-16.93-7.7-7.69-16.93-7.69H227.08q-9.23 0-16.93 7.69-7.69 7.7-7.69 16.93v188.3q0 9.23 7.69 16.93 7.7 7.69 16.93 7.69Zm-61.54-369.85V-768h628.92v36.92H165.54Zm0 539.08v-36.92h628.92V-192H165.54Zm36.92-406.77v237.54-237.54Z" />
  </Svg>
);

export default DayViewIcon;
