import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';
import {IconProps} from '@/types/interfaces';

const LogoutIcon: React.FC<IconProps> = ({
  color = '#5f6368',
  size = 24,
  onPress,
  style,
}) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Svg height={size} viewBox="0 -960 960 960" width={size} fill={color}>
      <Path d="M227.51-163.08q-25.76 0-43.56-17.8t-17.8-43.74v-507.69q0-25.94 17.8-43.74t43.56-17.8h253.87v36.93H227.69q-9.23 0-16.92 7.69-7.69 7.69-7.69 16.92v507.69q0 9.24 7.69 16.93 7.69 7.69 16.92 7.69h253.69v36.92H227.51Zm430.34-179.57-26.35-25.81L723.04-460h-353.5v-36.92h353.5l-91.54-91.54 26.35-26.19 136 136-136 136Z" />
    </Svg>
  </TouchableOpacity>
);

export default LogoutIcon;
