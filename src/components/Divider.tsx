import React from 'react';
import {View, StyleSheet} from 'react-native';

interface DividerProps {
  width?: number;
  height?: number;
  color?: string;
  style?: object;
}

const Divider: React.FC<DividerProps> = ({
  width = '100%',
  height = 1,
  color = '#ccc',
  style,
}) => {
  return (
    <View
      style={[styles.divider, {width, height, backgroundColor: color}, style]}
    />
  );
};

const styles = StyleSheet.create({
  divider: {},
});

export default Divider;
