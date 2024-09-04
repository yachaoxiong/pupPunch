import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';
import {IconProps} from '@/types/interfaces';

const AddCircleIcon: React.FC<IconProps> = ({
  color = '#5f6368',
  size = 24,
  onPress,
  style,
}) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Svg width={size} height={size} viewBox="0 -960 960 960" fill={color}>
      <Path d="M461.85-303.08h36.92v-158.15h158.15v-36.92H498.77v-158.77h-36.92v158.77H303.08v36.92h158.77v158.15Zm18.33 176.93q-73.39 0-138.06-27.89t-112.51-75.69q-47.84-47.81-75.65-112.29-27.81-64.48-27.81-137.8 0-73.39 27.89-138.06t75.69-112.51q47.81-47.84 112.29-75.65 64.48-27.81 137.8-27.81 73.39 0 138.06 27.89t112.51 75.69q47.84 47.8 75.65 112.29 27.81 64.48 27.81 137.8 0 73.39-27.89 138.06t-75.69 112.51q-47.8 47.84-112.29 75.65-64.48 27.81-137.8 27.81Zm-.21-36.93q132.3 0 224.63-92.3 92.32-92.3 92.32-224.59 0-132.3-92.3-224.63-92.3-92.32-224.59-92.32-132.3 0-224.63 92.3-92.32 92.3-92.32 224.59 0 132.3 92.3 224.63 92.3 92.32 224.59 92.32ZM480-480Z" />
    </Svg>
  </TouchableOpacity>
);

export default AddCircleIcon;
