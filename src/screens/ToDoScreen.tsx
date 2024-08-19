import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import globalStyles from '@src/styles/globalStyles';

const ToDoScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.buttonText}>ToDo</Text>
    </View>
  );
};

export default ToDoScreen;
