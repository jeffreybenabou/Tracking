/**
 * @format
 */
import React from 'react';
import {AppRegistry, SafeAreaView, StyleSheet} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {ModalProvider} from './src/components/modal/ModalProvider';

const Main = () => {
  return (
    <ModalProvider>
      <SafeAreaView style={style.container}>
        <Provider store={store}>
          <NavigationContainer>
            <App />
          </NavigationContainer>
        </Provider>
      </SafeAreaView>
    </ModalProvider>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent(appName, () => Main);
