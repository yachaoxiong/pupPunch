import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';
import {IconProps} from '@/types/interfaces';

const DefaultIcon: React.FC<IconProps> = ({
  color = '#5f6368',
  size = 24,
  onPress,
  style,
}) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Svg height={size} viewBox="0 -960 960 960" width={size} fill={color}>
      <Path d="M336-310.81l144-144 144 144L649.58-336l-144-144 144-144L624-649.58l-144 144-144-144L310.81-624l144 144-144 144L336-310.81ZM226.89-165.54q-25.75 0-43.55-17.8-17.8-17.8-17.8-43.55v-506.22q0-25.75 17.8-43.55 17.8-17.8 43.55-17.8h506.22q25.75 0 43.55 17.8 17.8 17.8 17.8 43.55v506.22q0 25.75-17.8 43.55-17.8 17.8-43.55 17.8H226.89Zm.19-36.92h505.84q9.23 0 16.93-7.69 7.69-7.7 7.69-16.93v-505.84q0-9.23-7.69-16.93-7.7-7.69-16.93-7.69H227.08q-9.23 0-16.93 7.69-7.69 7.7-7.69 16.93v505.84q0 9.23 7.69 16.93 7.7 7.69 16.93 7.69Zm-24.62-555.08V-202.46-757.54Z" />
    </Svg>
  </TouchableOpacity>
);

export default DefaultIcon;
