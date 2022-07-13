/* eslint-disable prettier/prettier */
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import Featured from '../screens/Featured';
const Drawer = createDrawerNavigator();
export default function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{unmountOnBlur: true}}
      />
      <Drawer.Screen
        name="Featured"
        component={Featured}
        options={{unmountOnBlur: true}}
      />
    </Drawer.Navigator>
  );
}
