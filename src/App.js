/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { QueryClient, QueryClientProvider } from 'react-query'
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import AppStack from './navigation';
import React from 'react';

const queryClient = new QueryClient()

const App = () => {


  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <QueryClientProvider client={queryClient}>
        <AppStack />
      </QueryClientProvider>
    </SafeAreaView>
  );
};


export default App;
