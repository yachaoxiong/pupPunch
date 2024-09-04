import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createTabs} from '@/navigation/tabs';
import DefaultIcon from '@/components/svg-icons/DefaultIcon';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@/utilize/ThemeProvider';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const {t} = useTranslation();
  const theme = useTheme();
  const tabs = createTabs(t);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          const tab = tabs.find(tab => tab.name === route.name);
          return tab ? (
            <tab.icon size={size} color={color} />
          ) : (
            <DefaultIcon size={size} color={color} />
          );
        },
        tabBarActiveTintColor: theme.tabBarActive,
        tabBarInactiveTintColor: theme.tabBarInactive,
        tabBarStyle: {
          backgroundColor: theme.background,
        },
        headerShown: false,
      })}>
      {tabs.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarLabel: tab.label,
            headerShown: false,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
