import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TouchableOpacity, GestureResponderEvent} from 'react-native';
import {IconProps} from '@/types/interfaces';

const CalendarViewIcon: React.FC<IconProps> = ({
  color = '#5f6368',
  size = 24,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress}>
    <Svg height={size} viewBox="0 -960 960 960" width={size} fill={color}>
      <Path d="M165.54-518.65v-275.81h276.19v275.81H165.54Zm0 353.11v-276.19h276.19v276.19H165.54Zm353.11-353.11v-275.81h275.81v275.81H518.65Zm0 353.11v-276.19h275.81v276.19H518.65ZM202.46-555.58h202.35v-201.96H202.46v201.96Zm353.12 0h201.96v-201.96H555.58v201.96Zm0 353.12h201.96v-202.35H555.58v202.35Zm-353.12 0h202.35v-202.35H202.46v202.35Zm353.12-353.12Zm0 150.77Zm-150.77 0Zm0-150.77Z" />
    </Svg>
  </TouchableOpacity>
);

export default CalendarViewIcon;
