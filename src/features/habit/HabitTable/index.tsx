import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import dayjs, {Dayjs} from 'dayjs';
import HabitList from './HabitList';
import WeekCalendar from './WeekCalendar';
import {habits, habitData} from '@/assets/mock/SelectedWeek';
import {screenWidth} from '@/styles/constant';

const HabitTable = () => {
  const [selectedWeek, setSelectedWeek] = useState<Dayjs[]>([]);

  useEffect(() => {
    const week = [...Array(7)].map((_, i) =>
      dayjs().startOf('week').add(i, 'day'),
    );
    setSelectedWeek(week);
  }, []);

  const handleWeekChange = (newWeek: Dayjs[]) => {
    setSelectedWeek(newWeek);
  };

  return (
    <View style={styles.container}>
      <View style={styles.weekCalendar}>
        <WeekCalendar />
      </View>
      <HabitList
        habits={habits}
        habitData={habitData}
        selectedWeek={selectedWeek}
      />
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
