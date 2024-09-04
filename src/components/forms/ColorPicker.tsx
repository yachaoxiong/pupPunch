import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolateColor,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const SLIDER_WIDTH = SCREEN_WIDTH * 0.8;

const ColorPicker: React.FC = () => {
  const translateX = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {startX: number}
  >({
    onStart: (_, ctx) => {
      ctx.startX = translateX.value;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.startX + event.translationX;
      translateX.value = Math.max(0, Math.min(SLIDER_WIDTH, translateX.value));
    },
    onEnd: () => {
      // 处理滑动结束后的逻辑
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    const progress = translateX.value / SLIDER_WIDTH;
    const backgroundColor = interpolateColor(
      progress,
      [0, 1],
      ['#ff0000', '#00ff00'], // 从红色到绿色的渐变
      'RGB', // 使用 RGB 颜色空间
      {
        gamma: 2.2, // 默认值
        useCorrectedHSVInterpolation: false, // 默认值
      },
    );

    return {
      transform: [{translateX: translateX.value - 10}], // 使小点在滑动条上移动
      backgroundColor,
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[styles.thumb, animatedStyle]} />
        </PanGestureHandler>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {
    width: SLIDER_WIDTH,
    height: 40,
    backgroundColor: '#ccc',
    borderRadius: 20,
    justifyContent: 'center',
    position: 'relative',
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    backgroundColor: 'red',
  },
});

export default ColorPicker;
