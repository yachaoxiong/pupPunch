import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, Animated} from 'react-native';
import {
  PanGestureHandler,
  GestureHandlerRootView,
  GestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import moment from 'moment';

const {width} = Dimensions.get('window');

// 示例数据
const habits = [
  {id: '1', name: '跑步'},
  {id: '2', name: '阅读'},
  {id: '3', name: '早起'},
];

const habitData: {[key: string]: {[key: string]: {completion: number}}} = {
  '1': {
    '2024-09-01': {completion: 70},
    '2024-09-02': {completion: 85},
    '2024-09-03': {completion: 40},
    '2024-09-04': {completion: 60},
    '2024-09-05': {completion: 90},
    '2024-09-06': {completion: 30},
    '2024-09-07': {completion: 100},
  },
  '2': {
    '2024-09-01': {completion: 50},
    '2024-09-02': {completion: 70},
    '2024-09-03': {completion: 90},
    '2024-09-04': {completion: 100},
    '2024-09-05': {completion: 30},
    '2024-09-06': {completion: 50},
    '2024-09-07': {completion: 40},
  },
  '3': {
    '2024-09-01': {completion: 100},
    '2024-09-02': {completion: 95},
    '2024-09-03': {completion: 80},
    '2024-09-04': {completion: 60},
    '2024-09-05': {completion: 75},
    '2024-09-06': {completion: 50},
    '2024-09-07': {completion: 65},
  },
};

const HabitTracker = ({
  weekOffset = 0,
  setWeekOffset,
}: {
  weekOffset?: number;
  setWeekOffset: (weekOffset: number) => void;
}) => {
  const [selectedWeek, setSelectedWeek] = useState(getWeekDates(weekOffset));
  const translateX = new Animated.Value(-width); // 初始值为负的屏幕宽度，显示当前周

  useEffect(() => {
    // 每次 weekOffset 改变时，更新选中的周日期
    setSelectedWeek(getWeekDates(weekOffset));
  }, [weekOffset]);

  function getWeekDates(weekOffset = 0) {
    const startOfWeek = moment().startOf('isoWeek').add(weekOffset, 'weeks');
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push({
        dayOfWeek: startOfWeek.clone().add(i, 'days').format('ddd'),
        date: startOfWeek.clone().add(i, 'days').format('YYYY-MM-DD'),
      });
    }
    return days;
  }

  const renderCompletionForHabit = (habitId: string, weekDates: string[]) => {
    return weekDates.map(date => {
      const completion = habitData[habitId]?.[date]?.completion;
      return (
        <View key={date} style={styles.completionBox}>
          <Text style={styles.completionText}>
            {completion !== undefined ? `${completion}%` : ''}
          </Text>
        </View>
      );
    });
  };

  const renderHabitRow = ({item}: {item: {id: string; name: string}}) => {
    return (
      <View style={styles.habitRow}>
        <Text style={styles.habitText}>{item.name}</Text>
      </View>
    );
  };

  const renderHabitCompletionRow = ({
    item,
  }: {
    item: {id: string; name: string};
  }) => {
    const selectedWeekDates = selectedWeek.map(week => week.date);
    return (
      <View style={styles.habitCompletionRow}>
        {renderCompletionForHabit(item.id, selectedWeekDates)}
      </View>
    );
  };

  const handleGesture = (event: GestureHandlerGestureEvent) => {
    const {translationX} = event.nativeEvent;
    translateX.setValue(-width + (translationX as number));
  };

  const handleGestureEnd = (event: GestureHandlerGestureEvent) => {
    const {translationX} = event.nativeEvent;
    const translatedX = translationX as number;
    let weekOffsetChange = 0;

    if (translatedX < -width / 3) {
      // 下一周
      weekOffsetChange = 1;
    } else if (translatedX > width / 3) {
      // 上一周
      weekOffsetChange = -1;
    }

    if (weekOffsetChange !== 0) {
      setWeekOffset(weekOffset + weekOffsetChange);
    }

    Animated.spring(translateX, {
      toValue: -width,
      useNativeDriver: true,
    }).start();
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.tableContainer}>
        {/* Habit 列表固定 */}
        <View style={styles.habitColumn}>
          <Animated.FlatList
            data={habits}
            renderItem={renderHabitRow}
            keyExtractor={item => item.id}
            scrollEnabled={false} // 禁用滚动
          />
        </View>

        {/* 滑动区域显示完成度 */}
        <View style={styles.completionColumn}>
          <PanGestureHandler
            onGestureEvent={handleGesture}
            onEnded={handleGestureEnd}>
            <Animated.FlatList
              data={habits}
              renderItem={renderHabitCompletionRow}
              keyExtractor={item => item.id}
              scrollEnabled={false} // 禁用滚动
            />
          </PanGestureHandler>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {},
  tableContainer: {
    flexDirection: 'row',
  },
  habitColumn: {
    width: 70, // 固定 habit 栏的宽度
  },
  habitRow: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  habitText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  completionColumn: {
    overflow: 'hidden',
    width: width * 0.8, // 固定显示区域宽度
  },
  habitCompletionRow: {
    flexDirection: 'row',
    height: 70,
  },
  completionBox: {
    width: width / 7 - 3.5, // 每天宽度
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  completionText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray',
  },
});

export default HabitTracker;
