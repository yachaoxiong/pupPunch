import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '@src/store/store';

import {useTranslation} from '@src/utilize/useTranslation';
import {createTabs} from '@src/navigation/tabs';

import DefaultIcon from '@src/components/svg-icons/DefaultIcon';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const {t} = useTranslation();
  const theme = useSelector((state: RootState) => state.theme.theme);

  const getTabBarColor = () => {
    return theme === 'dark' ? '#000000' : '#ffffff';
  };

  const tabs = createTabs(t);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route, navigation}) => ({
          tabBarIcon: ({color, size}) => {
            const tab = tabs.find(tab => tab.name === route.name);
            return tab ? (
              <tab.icon size={size} color={color} />
            ) : (
              <DefaultIcon size={size} color={color} />
            );
          },
          tabBarActiveTintColor: theme === 'dark' ? '#ffffff' : '#000000',
          tabBarInactiveTintColor: theme === 'dark' ? '#888888' : '#aaaaaa',
          tabBarStyle: {
            backgroundColor: getTabBarColor(),
          },
        })}>
        {tabs.map(tab => (
          <Tab.Screen
            key={tab.name}
            name={tab.name}
            component={tab.component}
            options={{tabBarLabel: tab.label}}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
