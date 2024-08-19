// src/styles/globalStyles.ts
import {StyleSheet} from 'react-native';
import colors from './colors';
import fonts from './fonts';
import layout from './layout';

const globalStyles = StyleSheet.create({
  container: {
    ...layout.container,
    backgroundColor: colors.primaryGreen,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.white,
    textAlign: 'center',
  },
  // 可以根据需要添加更多全局样式
});

export default globalStyles;
