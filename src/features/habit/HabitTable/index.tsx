import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import dayjs, {Dayjs} from 'dayjs';
import HabitList from './HabitList';
import WeekCalendar from './WeekCalendar';
import {habits, habitData} from '@/assets/mock/SelectedWeek';
import {screenWidth} from '@/styles/constant';
import Calendar from './WeekCalendar-new';
import HabitTracker from './HabitListNew';
import moment, {Moment} from 'moment';

const HabitTable = () => {
  const [selectedWeek, setSelectedWeek] = useState<number>(0);

  return (
    <View style={styles.container}>
      <View style={styles.weekCalendar}>
        <Calendar weekOffset={selectedWeek} setWeekOffset={setSelectedWeek} />
      </View>
      <HabitTracker weekOffset={selectedWeek} setWeekOffset={setSelectedWeek} />
      {/* <HabitList
        habits={habits}
        habitData={habitData}
        selectedWeek={selectedWeek}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  weekCalendar: {
    padding: 20,
    width: screenWidth * 0.8,
  },
});

export default HabitTable;
