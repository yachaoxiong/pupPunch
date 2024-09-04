import React, {useRef} from 'react';
import {View, Text, StyleSheet, ScrollView, Animated} from 'react-native';
import {
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
  State,
} from 'react-native-gesture-handler';

const TimeSlots = () => {
  const timeSlots = Array.from({length: 24}, (_, i) => `${i}:00`);
  const scale = useRef(new Animated.Value(1)).current;

  const handlePinchGesture = Animated.event([{nativeEvent: {scale: scale}}], {
    useNativeDriver: true,
  });

  const handlePinchStateChange = (event: PinchGestureHandlerGestureEvent) => {
    if (event.nativeEvent.state === State.END) {
      // Optionally, reset the scale to initial value when the gesture ends
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <PinchGestureHandler
      onGestureEvent={handlePinchGesture}
      onHandlerStateChange={handlePinchStateChange}>
      <Animated.View style={[styles.container, {transform: [{scale}]}]}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          {timeSlots.map(time => (
            <View key={time} style={styles.timeSlot}>
              <Text>{time}</Text>
            </View>
          ))}
        </ScrollView>
      </Animated.View>
    </PinchGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  timeSlot: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default TimeSlots;
