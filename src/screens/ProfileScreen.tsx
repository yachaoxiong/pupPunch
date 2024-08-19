import globalStyles from '@src/styles/globalStyles';
import React from 'react';
import {View, Text} from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.buttonText}>Profile</Text>
    </View>
  );
};

export default ProfileScreen;
