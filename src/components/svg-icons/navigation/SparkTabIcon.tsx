import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@/types/interfaces';

const SparkTabIcon: React.FC<IconProps> = ({color = '#5f6368', size}) => (
  <Svg width={size} height={size} viewBox="0 -960 960 960" fill={color}>
    <Path d="M226.89-165.54q-25.75 0-43.55-17.8-17.8-17.8-17.8-43.55v-506.22q0-25.75 17.8-43.55 17.8-17.8 43.74-17.8h333.61l-36.92 36.92H227.08q-9.23 0-16.93 7.69-7.69 7.7-7.69 16.93v505.84q0 9.23 7.69 16.93 7.7 7.69 16.93 7.69h505.84q9.23 0 16.93-7.69 7.69-7.7 7.69-16.93v-301.27l36.92-36.92v338.19q0 25.94-17.8 43.74t-43.55 17.8H226.89ZM480-480Zm-78.27 78.27V-504l358.5-358.88q6.12-5.74 12.69-8.1 6.58-2.37 14.12-2.37 6.96 0 13.54 2.18 6.57 2.17 12.3 7.52l46.43 45.5q6.27 6.11 9.27 13.65t3 15.12q0 7.57-2.31 14.28-2.31 6.72-8.42 12.45l-360.7 360.92h-98.42Zm433.15-386.89-46.92-49.73 46.92 49.73ZM438.65-438.65h46.16l267.96-268.47-23.09-23.07-25.1-24.12-265.93 265.43v50.23Zm291.03-291.54-25.1-24.12 25.1 24.12 23.09 23.07-23.09-23.07Z" />
  </Svg>
);

export default SparkTabIcon;
