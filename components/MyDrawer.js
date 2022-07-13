/* eslint-disable prettier/prettier */
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import Favourite from '../screens/Favourite';
const Drawer = createDrawerNavigator();
export default function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{unmountOnBlur: true}}
      />
      <Drawer.Screen
        name="Favourite"
        component={Favourite}
        options={{unmountOnBlur: true}}
      />
    </Drawer.Navigator>
  );
}
