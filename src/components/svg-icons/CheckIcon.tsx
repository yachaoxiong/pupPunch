import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';
import {IconProps} from '@/types/interfaces';

const CheckIcon: React.FC<IconProps> = ({
  color = '#5f6368',
  size = 24,
  onPress,
  style,
}) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Svg width={size} height={size} viewBox="0 -960 960 960" fill={color}>
      <Path d="M382.62-271.38 188.15-465.85l26.58-26.57 167.89 168.27 363.03-363.04 26.2 26.57-389.23 389.24Z" />
    </Svg>
  </TouchableOpacity>
);

export default CheckIcon;
