import React from 'react';
import 'react-native-gesture-handler';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/store/store';

import { MainNavigation } from './src/navigation/MainNavigation';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigation/>
      </PersistGate>
    </Provider>
  );
}