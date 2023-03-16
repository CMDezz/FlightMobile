import React from 'react';
import store, {RootState} from './src/Redux/Stores';
import {Provider} from 'react-redux';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {MenuProvider} from 'react-native-popup-menu';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './AppNavigator';
const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MenuProvider>
          <AppNavigator />
        </MenuProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const WrapperApp: React.FC = () => {
  return (
    <Provider store={store}>
      <App></App>
    </Provider>
  );
};

export default WrapperApp;
