import React from 'react';
import BottomTabNavigator from '@src/navigation/BottomTabNavigator';
import {ThemeProvider} from '@src/contexts/theme-context';

const App = () => {
  return (
    <ThemeProvider>
      <BottomTabNavigator />
    </ThemeProvider>
  );
};

export default App;
