import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';
import {IconProps} from '@/types/interfaces';

const ProfileTabIcon: React.FC<IconProps> = ({
  color = '#5f6368',
  size,
  onPress,
  style,
}) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Svg width={size} height={size} viewBox="0 -960 960 960" fill={color}>
      <Path d="M400.62-504q-48.39 0-82.66-34.27-34.27-34.27-34.27-82.65 0-48.39 34.27-82.66 34.27-34.27 82.66-34.27 48.38 0 82.65 34.27t34.27 82.66q0 48.38-34.27 82.65T400.62-504ZM126.15-223.38v-62.16q0-27.11 13.68-46.34 13.67-19.24 38.32-31.04 51.16-24.81 101.98-39.2 50.83-14.38 120.4-14.38h8.85q3.7 0 8.93.46-3.54 9.81-5.96 19-2.43 9.19-4.66 17.46h-7.07q-62.74 0-111.52 12.48-48.79 12.48-93.22 36.29-18.73 10-25.76 20.42-7.04 10.42-7.04 24.85v25.08h249.5q2.46 9.11 6.27 18.96 3.8 9.85 8.38 18.12H126.15Zm521.08 18.61L642-249.69q-16.48-3.46-31.58-11.91-15.11-8.44-26.88-21.17l-42.77 16.62-15.08-25.7 36.16-26.46q-6.73-17.07-6.73-35.84 0-18.77 6.73-35.85l-35.39-28.62 15.08-25.69 41.94 18q11.06-13.11 26.55-21.04 15.49-7.92 31.97-11.27l5.36-44.92H678l4.46 44.92q17.34 3.47 32.71 11.39 15.37 7.92 26.37 21.38l41.38-18.46L798-418.15l-34.77 28.61q6.62 17.48 6.62 35.74t-6.62 35.49l35.54 26.46-15.08 25.7-42.15-16.62q-11.77 12.73-26.76 21.17-14.98 8.45-32.32 11.91l-4.59 44.92h-30.64Zm14.88-78.31q29.76 0 50.44-20.84 20.68-20.85 20.68-50.69 0-29.85-20.75-50.54-20.75-20.7-50.5-20.7-29.76 0-50.64 20.85-20.88 20.84-20.88 50.69 0 29.85 20.95 50.54 20.95 20.69 50.7 20.69ZM400.62-540.92q33 0 56.5-23.5t23.5-56.5q0-33-23.5-56.5t-56.5-23.5q-33 0-56.5 23.5t-23.5 56.5q0 33 23.5 56.5t56.5 23.5Zm0-80Zm12 360.61Z" />
    </Svg>
  </TouchableOpacity>
);

export default ProfileTabIcon;
