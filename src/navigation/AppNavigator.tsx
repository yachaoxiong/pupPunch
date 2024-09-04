import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from '@/navigation/BottomTabNavigator';
import Settings from '@/features/profile/Settings';
import {createRouteParams} from '@/types/navigationTypes';
import {useTranslation} from 'react-i18next';

const Stack = createStackNavigator();

const rootParams = createRouteParams('BottomTabNavigator');

const AppNavigator: React.FC = () => {
  const {t} = useTranslation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{title: t('设置')}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
