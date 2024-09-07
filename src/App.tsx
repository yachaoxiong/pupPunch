import React from 'react';
import {Provider} from 'react-redux';
import {store} from '@/store/store';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppNavigator from '@/navigation/AppNavigator';
import ProfileDrawer from '@/features/profile';
import 'intl-pluralrules';
import '@/utilize/i18n';
import {ThemeProvider} from '@/utilize/ThemeProvider';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Provider store={store}>
          <ThemeProvider>
            <AppNavigator />
          </ThemeProvider>
        </Provider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
