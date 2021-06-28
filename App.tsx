/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View
} from 'react-native';
import {Provider} from 'react-redux';
import {configureStore} from './src/redux/store'
import {PersistGate} from 'redux-persist/integration/react'
import {RootNavigator} from './src/navigation/rootnavigation'

const App= () => {
const {store,persistor}=configureStore()
  return (
    <Provider store={store}>
      <PersistGate loading={null}  persistor={persistor}>

    <RootNavigator/>
    </PersistGate>

    </Provider>

  );
};

export default App;
