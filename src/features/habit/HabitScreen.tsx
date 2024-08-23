import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import AddCircleIcon from '@src/components/svg-icons/AddCircleIcon';
import CreateHabit from '@src/features/habit/CreateHabit';

const HabitScreen = () => {
  const [isDrawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(prev => !prev); // 确保状态能够正确切换
  };

  return (
    <View style={styles.container}>
      <AddCircleIcon
        size={40}
        color="#6200ee"
        onPress={toggleDrawer}
        style={styles.fab}
      />
      <CreateHabit isVisible={isDrawerVisible} onClose={toggleDrawer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 30,
  },
});

export default HabitScreen;
