import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

interface CreateHabitDrawerProps {
  isVisible: boolean;
  onClose: () => void;
}

const CreateHabit: React.FC<CreateHabitDrawerProps> = ({
  isVisible,
  onClose,
}) => {
  const translateY = useSharedValue(300); // 初始位置在屏幕外

  useEffect(() => {
    translateY.value = withSpring(isVisible ? 0 : 300, {
      damping: 15,
      stiffness: 100,
    });
  }, [isVisible]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  }, [translateY.value]);

  if (!isVisible) {
    return null;
  }

  return (
    <Animated.View style={[styles.drawer, animatedStyle]}>
      <View style={styles.header}>
        <Text style={styles.title}>New Habit</Text>
        <Button title="❌" onPress={onClose} />
      </View>
      <View style={styles.form}>
        <Text>Habit Form Goes Here</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 300,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    elevation: 10,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  form: {
    marginTop: 16,
  },
});

export default CreateHabit;
