import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';
import {IconProps} from '@/types/interfaces';

const MenuIcon: React.FC<IconProps> = ({
  color = '#5f6368',
  size = 24,
  onPress,
  style,
}) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Svg height={size} viewBox="0 -960 960 960" width={size} fill={color}>
      <Path d="M166.15-274.15v-36.93h627.7v36.93h-627.7Zm0-187.7v-36.92h627.7v36.92h-627.7Zm0-187.69v-36.92h627.7v36.92h-627.7Z" />
    </Svg>
  </TouchableOpacity>
);

export default MenuIcon;
