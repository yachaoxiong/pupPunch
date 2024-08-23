import globalStyles from '@src/styles/globalStyles';
import React from 'react';
import {View, Text} from 'react-native';

const SparkScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.buttonText}>Spark</Text>
    </View>
  );
};

export default SparkScreen;
