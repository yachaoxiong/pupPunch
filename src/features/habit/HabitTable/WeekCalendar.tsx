import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import dayjs, {Dayjs} from 'dayjs';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const WEEK_VIEW_WIDTH = SCREEN_WIDTH * 0.8;

interface WeekCalendarProps {
  startOfWeek?: number; // 0 = Sunday, 1 = Monday, etc.
}

const WeekCalendar: React.FC<WeekCalendarProps> = ({startOfWeek = 0}) => {
  const [currentWeek, setCurrentWeek] = useState<Dayjs>(
    dayjs().startOf('week').add(startOfWeek, 'day'),
  );
  const [visibleWeek, setVisibleWeek] = useState<Dayjs>(currentWeek);

  const translateX = useSharedValue(0);
  const isGestureActive = useSharedValue(false);

  const updateWeek = (direction: number) => {
    setCurrentWeek(prevWeek => {
      const newWeek = prevWeek.add(direction * 7, 'day');
      setVisibleWeek(newWeek); // 更新 visibleWeek 以保持视图同步
      return newWeek;
    });
  };

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {startX: number}
  >({
    onStart: (_, ctx) => {
      ctx.startX = translateX.value;
      isGestureActive.value = true;
    },
    onActive: (event, ctx) => {
      translateX.value = ctx.startX + event.translationX;
    },
    onEnd: event => {
      isGestureActive.value = false;
      const threshold = WEEK_VIEW_WIDTH / 3; // 滑动距离阈值

      if (translateX.value < -threshold) {
        // 向左滑动，查看下一周
        translateX.value = withSpring(-WEEK_VIEW_WIDTH, {}, () => {
          runOnJS(updateWeek)(1);
          translateX.value = 0; // 恢复平移值
        });
      } else if (translateX.value > threshold) {
        // 向右滑动，查看上一周
        translateX.value = withSpring(WEEK_VIEW_WIDTH, {}, () => {
          runOnJS(updateWeek)(-1);
          translateX.value = 0; // 恢复平移值
        });
      } else {
        // 返回当前周
        translateX.value = withSpring(0);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  const getWeekDays = (date: Dayjs): Dayjs[] => {
    const week: Dayjs[] = [];
    for (let i = 0; i < 7; i++) {
      week.push(date.add(i, 'day'));
    }
    return week;
  };

  // 根据 visibleWeek 计算上一周、当前周、下一周的视图
  const previousWeekDays = getWeekDays(visibleWeek.subtract(1, 'week'));
  const currentWeekDays = getWeekDays(visibleWeek);
  const nextWeekDays = getWeekDays(visibleWeek.add(1, 'week'));

  return (
    <GestureHandlerRootView style={styles.container}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.weekContainer, animatedStyle]}>
          {/* 上一周 */}
          <View style={styles.weekView}>
            {previousWeekDays.map((day, index) => (
              <View key={index} style={styles.dayContainer}>
                <Text style={styles.dayText}>{day.format('D')}</Text>
                <Text style={styles.dayName}>{day.format('ddd')}</Text>
              </View>
            ))}
          </View>
          {/* 当前周 */}
          <View style={styles.weekView}>
            {currentWeekDays.map((day, index) => (
              <View key={index} style={styles.dayContainer}>
                <Text style={styles.dayText}>{day.format('D')}</Text>
                <Text style={styles.dayName}>{day.format('ddd')}</Text>
              </View>
            ))}
          </View>
          {/* 下一周 */}
          <View style={styles.weekView}>
            {nextWeekDays.map((day, index) => (
              <View key={index} style={styles.dayContainer}>
                <Text style={styles.dayText}>{day.format('D')}</Text>
                <Text style={styles.dayName}>{day.format('ddd')}</Text>
              </View>
            ))}
          </View>
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'lightgray', // 用于调试
    borderWidth: 1, // 用于调试
    borderColor: 'black', // 用于调试
  },
  weekContainer: {
    flexDirection: 'row',
    width: WEEK_VIEW_WIDTH * 3, // 三周视图
  },
  weekView: {
    width: WEEK_VIEW_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  dayContainer: {
    alignItems: 'center',
  },
  dayText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dayName: {
    fontSize: 14,
  },
});

export default WeekCalendar;
