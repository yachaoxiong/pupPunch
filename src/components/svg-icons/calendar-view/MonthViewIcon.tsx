import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@/types/interfaces';

const MonthViewIcon: React.FC<IconProps> = ({color = '#5f6368', size = 24}) => (
  <Svg height={size} viewBox="0 -960 960 960" width={size} fill={color}>
    <Path d="M187.52-205.54q-25.77 0-43.57-17.8t-17.8-43.58v-426.16q0-25.78 17.8-43.58 17.8-17.8 43.57-17.8h584.96q25.77 0 43.57 17.8t17.8 43.58v426.16q0 25.78-17.8 43.58-17.8 17.8-43.57 17.8H187.52Zm-24.44-293.23H350v-218.77H187.69q-10.77 0-17.69 6.92-6.92 6.93-6.92 17.7v194.15Zm223.84 0h186.16v-218.77H386.92v218.77Zm223.08 0h186.92v-194.15q0-10.77-6.92-17.7-6.92-6.92-17.69-6.92H610v218.77ZM350-242.46v-219.39H163.08v194.77q0 10.77 6.92 17.7 6.92 6.92 17.69 6.92H350Zm36.92 0h186.16v-219.39H386.92v219.39Zm223.08 0h162.31q10.77 0 17.69-6.92 6.92-6.93 6.92-17.7v-194.77H610v219.39Z" />
  </Svg>
);

export default MonthViewIcon;
