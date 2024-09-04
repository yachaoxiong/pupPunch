import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@/types/interfaces';
import {screenHeight} from '@/styles/constant';

const HabitTabIcon: React.FC<IconProps> = ({color = '#5f6368', size}) => (
  <Svg height={size} width={size} viewBox="0 -960 960 960" fill={color}>
    <Path d="M295.38-126.15 166.15-255.38l129.23-129.24 26.47 26.31-84.27 84.27h451.65v-158.27h36.92v195.19H237.58l84.27 84.66-26.47 26.31Zm-61.53-401.54v-195.58h488.96l-84.66-84.27 26.47-26.31 129.23 129.23-129.23 129.24-26.47-26.31 84.66-84.66H270.77v158.66h-36.92Z" />
  </Svg>
);

export default HabitTabIcon;
