import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import dayjs from 'dayjs';

const {width} = Dimensions.get('window');
const timeSlotsWidth = 80; // 时刻列表的宽度
const cellSize = 60; // 每个单元格的宽度和高度

// 获取周日期，支持自定义每周开始的星期
const getWeekDates = (startDate: dayjs.Dayjs, weekStartsOn: number = 0) => {
  const startOfWeekDate = startDate.startOf('week').add(weekStartsOn, 'day');
  const dates = [];
  for (let i = 0; i < 7; i++) {
    dates.push(startOfWeekDate.add(i, 'day').format('MM/DD'));
  }
  return dates;
};

interface WeeklyViewProps {
  weekStartsOn?: number; // 0: Sunday, 1: Monday, etc.
}

const WeeklyView: React.FC<WeeklyViewProps> = ({weekStartsOn}) => {
  const [currentWeekStart, setCurrentWeekStart] = React.useState(dayjs());

  const handleScrollEnd = (event: any) => {
    const xOffset = event.nativeEvent.contentOffset.x;
    if (xOffset < width - timeSlotsWidth) {
      // Scroll left: load previous week
      setCurrentWeekStart(prev => prev.subtract(1, 'week'));
    } else if (xOffset > width) {
      // Scroll right: load next week
      setCurrentWeekStart(prev => prev.add(1, 'week'));
    }

    // Reset scroll position to the middle
    event.target.scrollTo({x: width - timeSlotsWidth, animated: false});
  };

  const weekDates = getWeekDates(currentWeekStart, weekStartsOn);

  return (
    <View style={styles.container}>
      <View style={styles.timeSlotsContainer}>
        {/* 渲染具体的时刻列表 */}
        <Text style={styles.timeSlot}>08:00</Text>
        <Text style={styles.timeSlot}>09:00</Text>
        {/* 更多时刻 */}
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        onMomentumScrollEnd={handleScrollEnd}
        ref={ref =>
          ref && ref.scrollTo({x: width - timeSlotsWidth, animated: false})
        }
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.weekScroll}>
        <View style={styles.tableContainer}>
          {/* 第一行，显示日期 */}
          <View style={styles.row}>
            <View style={[styles.cell, styles.headerCell]}></View>
            {weekDates.map((date, index) => (
              <View key={index} style={[styles.cell, styles.headerCell]}>
                <Text>{date}</Text>
              </View>
            ))}
          </View>
          {/* 这里可以渲染具体的习惯数据 */}
          <View style={styles.row}>
            <View style={[styles.cell, styles.headerCell]}></View>
            {/* 第一列空白 */}
            {weekDates.map((_, index) => (
              <View key={index} style={styles.cell}>
                <Text>{/* 显示习惯完成率 */}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  timeSlotsContainer: {
    width: timeSlotsWidth,
    backgroundColor: '#f0f0f0',
  },
  timeSlot: {
    width: timeSlotsWidth,
    height: cellSize,
    textAlign: 'center',
    lineHeight: cellSize,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  weekScroll: {
    flex: 1,
  },
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: (width - timeSlotsWidth) * 3, // 展示三个周视图
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: cellSize,
    height: cellSize,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  headerCell: {
    backgroundColor: '#e0e0e0',
    borderBottomWidth: 2,
    borderRightWidth: 2,
  },
});

export default WeeklyView;
