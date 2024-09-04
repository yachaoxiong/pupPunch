// src/styles/globalStyles.ts
import {StyleSheet} from 'react-native';
import fonts from './fonts';
import layout from './layout';

const globalStyles = StyleSheet.create({
  container: {
    ...layout.container,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: fonts.regular,
    textAlign: 'center',
  },
  // 可以根据需要添加更多全局样式
});

export default globalStyles;
