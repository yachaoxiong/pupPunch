import {ColorValue, ViewStyle} from 'react-native';

export interface IconProps {
  color?: ColorValue;
  size?: number;
  style?: ViewStyle;
  onPress?: () => void;
}
