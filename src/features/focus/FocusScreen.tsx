import globalStyles from '@src/styles/globalStyles';
import React from 'react';
import {View, Text} from 'react-native';

const FocusScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.buttonText}>Timing</Text>
    </View>
  );
};

export default FocusScreen;
