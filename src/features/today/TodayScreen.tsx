// src/features/profile/ProfileScreen.tsx
import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {setLanguage} from '@src/store/slices/languageSlice';
import {setTheme} from '@src/store/slices/themeSlice';

const ProfileScreen = () => {
  const dispatch = useDispatch();

  const changeLanguage = (language: string) => {
    dispatch(setLanguage(language));
  };

  const changeTheme = (theme: 'light' | 'dark') => {
    dispatch(setTheme(theme));
  };

  return (
    <View>
      <Button title="Switch to English" onPress={() => changeLanguage('en')} />
      <Button title="切换到中文" onPress={() => changeLanguage('zh')} />
      <Button
        title="Switch to Dark Theme"
        onPress={() => changeTheme('dark')}
      />
      <Button
        title="Switch to Light Theme"
        onPress={() => changeTheme('light')}
      />
    </View>
  );
};

export default ProfileScreen;
