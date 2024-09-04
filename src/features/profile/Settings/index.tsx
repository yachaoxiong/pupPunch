// src/screens/SettingsScreen.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import LanguageSetting from '@/features/profile/Settings/LanguageSetting';
import ThemeSetting from '@/features/profile/Settings/ThemeSetting';

const SettingsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <LanguageSetting />
      <ThemeSetting />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default SettingsScreen;
