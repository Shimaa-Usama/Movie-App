/* eslint-disable prettier/prettier */
import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import MyDrawer from './components/MyDrawer';
import {QueryClient, QueryClientProvider} from './tanstackreact-query.js';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
