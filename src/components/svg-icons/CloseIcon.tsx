import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';
import {IconProps} from '@/types/interfaces';

const CloseIcon: React.FC<IconProps> = ({
  color = '#5f6368',
  size = 24,
  onPress,
  style,
}) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Svg width={size} height={size} viewBox="0 -960 960 960" fill={color}>
      <Path d="M257.85-231.38 232-257.85 453.54-480 232-702.15l25.85-26.47L480-506.46l222.15-222.16L728-702.15 506.46-480 728-257.85l-25.85 26.47L480-453.54 257.85-231.38Z" />
    </Svg>
  </TouchableOpacity>
);

export default CloseIcon;
