import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Animated,
} from 'react-native';
import {
  PanGestureHandler,
  GestureHandlerRootView,
  GestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import moment from 'moment';

const {width} = Dimensions.get('window');

interface CalendarProps {
  weekOffset?: number;
  setWeekOffset: (weekOffset: number) => void;
}

const Calendar: React.FC<CalendarProps> = ({weekOffset = 0, setWeekOffset}) => {
  const [currentWeekOffset, setCurrentWeekOffset] = useState(weekOffset);
  const translateX = new Animated.Value(-width); // 初始值为负的屏幕宽度，显示当前周

  // 当外部的 weekOffset 改变时，内部的 currentWeekOffset 同步更新
  useEffect(() => {
    setCurrentWeekOffset(weekOffset);
  }, [weekOffset]);

  // 当内部 currentWeekOffset 改变时，通知外部组件
  useEffect(() => {
    setWeekOffset(currentWeekOffset);
  }, [currentWeekOffset, setWeekOffset]);

  const getWeekDays = (inputWeekOffset = 0) => {
    const startOfWeek = moment()
      .startOf('isoWeek')
      .add(inputWeekOffset, 'weeks');
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push({
        dayOfWeek: startOfWeek.clone().add(i, 'days').format('ddd'),
        date: startOfWeek.clone().add(i, 'days').format('D'),
      });
    }
    return days;
  };

  const getCurrentMonth = () => {
    const startOfWeek = moment()
      .startOf('isoWeek')
      .add(currentWeekOffset, 'weeks');
    return startOfWeek.format('MMMM YYYY');
  };

  const getCurrentWeekNumber = () => {
    const startOfWeek = moment()
      .startOf('isoWeek')
      .add(currentWeekOffset, 'weeks');
    return startOfWeek.isoWeek();
  };

  const renderWeekDays = ({item}: {item: any}) => (
    <View style={styles.dayContainer}>
      <Text style={styles.dayText}>{item.dayOfWeek}</Text>
      <Text style={styles.dateText}>{item.date}</Text>
    </View>
  );

  const handleGesture = (event: GestureHandlerGestureEvent) => {
    const {translationX} = event.nativeEvent;
    translateX.setValue(-width + Number(translationX)); // 从当前周开始滑动
  };

  const handleGestureEnd = (event: GestureHandlerGestureEvent) => {
    const {translationX} = event.nativeEvent;
    const translatedX = translationX as number;

    // 判断是否滑动足够距离切换周
    if (translatedX < -width / 3) {
      // 下一周
      Animated.timing(translateX, {
        toValue: -2 * width,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        setCurrentWeekOffset(currentWeekOffset + 1); // 更新当前周数
        translateX.setValue(-width); // 重置位移到中间
      });
    } else if (translatedX > width / 3) {
      // 上一周
      Animated.timing(translateX, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        setCurrentWeekOffset(currentWeekOffset - 1); // 更新当前周数
        translateX.setValue(-width); // 重置位移到中间
      });
    } else {
      // 如果滑动距离不足，回弹到当前周
      Animated.spring(translateX, {
        toValue: -width,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <Text style={styles.monthText}>{getCurrentMonth()}</Text>
      <View style={styles.weekRow}>
        <Text style={styles.weekText}>Week {getCurrentWeekNumber()}</Text>
        <View style={styles.weekDaysContainer}>
          <PanGestureHandler
            onGestureEvent={handleGesture}
            onEnded={handleGestureEnd}>
            <Animated.View style={[{transform: [{translateX}]}]}>
              <FlatList
                data={[
                  ...getWeekDays(currentWeekOffset - 1), // 上一周
                  ...getWeekDays(currentWeekOffset), // 当前周
                  ...getWeekDays(currentWeekOffset + 1), // 下一周
                ]}
                renderItem={renderWeekDays}
                keyExtractor={item => item.date + item.dayOfWeek}
                horizontal
                scrollEnabled={false} // 禁用自身滚动
                contentContainerStyle={styles.weekDaysList} // 控制内容的布局
              />
            </Animated.View>
          </PanGestureHandler>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  monthText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  weekRow: {
    width: width * 0.8, // 使布局更加集中
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  weekText: {
    fontSize: 14,
    marginRight: 10,
  },
  weekDaysContainer: {
    flexDirection: 'row',
    width: width * 3, // 同时显示三周数据
    overflow: 'hidden', // 隐藏超出部分
  },
  weekDaysList: {
    justifyContent: 'space-between', // 合理分配 weekdays
    flexGrow: 1,
  },
  dayContainer: {
    alignItems: 'center',
    width: width / 8.5, // 每天均匀分配
  },
  dayText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 14,
    color: '#555',
  },
});

export default Calendar;
