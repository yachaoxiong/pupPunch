import React from 'react';
import {Provider} from 'react-redux';
import {store} from '@src/store/store';
import BottomTabNavigator from '@src/navigation/BottomTabNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import 'react-native-reanimated'; // 导入 Reanimated

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <BottomTabNavigator />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
