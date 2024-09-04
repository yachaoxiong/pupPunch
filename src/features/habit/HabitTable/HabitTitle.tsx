import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {openDrawer} from '@/store/slices/drawerSlice';
import MenuIcon from '@/components/svg-icons/MenuIcon';

const HabitTracker = () => {
  const dispatch = useDispatch();

  const handleOpenDrawer = () => {
    dispatch(openDrawer());
  };

  return (
    <View style={styles.header}>
      <MenuIcon size={28} onPress={handleOpenDrawer} />
      <View style={styles.headerButtons}>
        <Text style={styles.headerButton}>&lt;</Text>
        <Text style={styles.headerText}>Week {+1}</Text>
        <Text style={styles.headerButton}>&gt;</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
  },
  headerButtons: {
    flexDirection: 'row',
  },
  headerButton: {
    fontSize: 18,
    paddingHorizontal: 10,
  },
});

export default HabitTracker;
