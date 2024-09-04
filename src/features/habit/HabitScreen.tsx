import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import AddCircleIcon from '@/components/svg-icons/AddCircleIcon';
import CreateHabit from '@/features/habit/CreateHabit';
import {screenHeight} from '@/styles/constant';
import HabitTable from '@/features/habit/HabitTable';

const HabitScreen = () => {
  const [isDrawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(prev => !prev);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <HabitTable />
      <AddCircleIcon
        size={screenHeight * 0.08}
        color="#6200ee"
        onPress={toggleDrawer}
        style={styles.fab}
      />
      <CreateHabit isVisible={isDrawerVisible} onClose={toggleDrawer} />
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
