import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import HabitScreen from '@src/screens/HabitScreen';
import TimingScreen from '@src/screens/TimingScreen';
import ToDoScreen from '@src/screens/ToDoScreen';
import SparkScreen from '@src/screens/SparkScreen';
import ProfileScreen from '@src/screens/ProfileScreen';

import HabitTabIcon from '@src/components/svg-icons/HabitTabIcon';
import TimingTabIcon from '@src/components/svg-icons/TimingTabIcon';
import ToDoTabIcon from '@src/components/svg-icons/ToDoTabIcon';
import SparkTabIcon from '@src/components/svg-icons/SparkTabIcon';
import ProfileTabIcon from '@src/components/svg-icons/ProfileTabIcon';

import {lightTheme} from '@src/styles/themes';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            switch (route.name) {
              case 'Habit':
                return <HabitTabIcon size={size} color={color} />;
              case 'Timing':
                return <TimingTabIcon size={size} color={color} />;
              case 'ToDo':
                return <ToDoTabIcon size={size} color={color} />;
              case 'Spark':
                return <SparkTabIcon size={size} color={color} />;
              case 'Profile':
                return <ProfileTabIcon size={size} color={color} />;
              default:
                return null;
            }
          },
          tabBarActiveTintColor: lightTheme.primaryColor,
          tabBarInactiveTintColor: lightTheme.textColor,
        })}>
        <Tab.Screen
          name="Habit"
          component={HabitScreen}
          options={{tabBarLabel: '习惯'}}
        />
        <Tab.Screen
          name="Timing"
          component={TimingScreen}
          options={{tabBarLabel: '专注'}}
        />
        <Tab.Screen
          name="ToDo"
          component={ToDoScreen}
          options={{tabBarLabel: '待办'}}
        />
        <Tab.Screen
          name="Spark"
          component={SparkScreen}
          options={{tabBarLabel: '灵感'}}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{tabBarLabel: '我的'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
