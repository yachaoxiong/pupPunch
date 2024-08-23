// src/features/habit/HabitItem.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import ProgressRing from '@src/components/ProgressRing';

interface HabitItemProps {
  name: string;
  progress: number; // 0 to 100
}

const HabitItem: React.FC<HabitItemProps> = ({name, progress}) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.habitName}>{name}</Text>
      <ProgressRing radius={40} stroke={10} progress={progress} color="green" />
      <Text style={styles.progressText}>{progress}%</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  habitName: {
    fontSize: 16,
    flex: 1,
  },
  progressText: {
    fontSize: 14,
    color: '#888',
  },
});

export default HabitItem;
