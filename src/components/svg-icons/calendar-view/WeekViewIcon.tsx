import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@/types/interfaces';

const WeekViewIcon: React.FC<IconProps> = ({color = '#5f6368', size = 24}) => (
  <Svg height={size} viewBox="0 -960 960 960" width={size} fill={color}>
    <Path d="M187.52-205.54q-25.77 0-43.57-17.8t-17.8-43.58v-426.16q0-25.78 17.8-43.58 17.8-17.8 43.57-17.8h584.96q25.77 0 43.57 17.8t17.8 43.58v426.16q0 25.78-17.8 43.58-17.8 17.8-43.57 17.8H187.52Zm311.25-36.92h130.61v-475.08H498.77v475.08Zm-168.15 0h130.61v-475.08H330.62v475.08Zm-142.93 0h106v-475.08h-106q-10.77 0-17.69 6.92-6.92 6.93-6.92 17.7v425.84q0 10.77 6.92 17.7 6.92 6.92 17.69 6.92Zm478.62 0h106q10.77 0 17.69-6.92 6.92-6.93 6.92-17.7v-425.84q0-10.77-6.92-17.7-6.92-6.92-17.69-6.92h-106v475.08Z" />
  </Svg>
);

export default WeekViewIcon;
