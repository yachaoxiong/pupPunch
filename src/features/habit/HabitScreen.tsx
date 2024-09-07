import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import HabitTable from '@/features/habit/HabitTable';

const HabitScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <HabitTable />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  calendar: {
    width: '100%',
    height: '10%',
  },
  fab: {
    position: 'absolute',
    right: '5%',
    bottom: '7%',
  },
});

export default HabitScreen;
