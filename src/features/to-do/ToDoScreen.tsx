import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import globalStyles from '@/styles/globalStyles';
import WeekSchedule from './week-schedule';

const ToDoScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <WeekSchedule />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default ToDoScreen;
