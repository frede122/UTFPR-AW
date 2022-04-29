import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import MinhasColecoes from '../../views/colecoes/MinhasColecoes';
import Login from '../../views/user/Login';





const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MinhaColecoes" options={{title: 'Minhas Coleções'}} component={MinhasColecoes} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
}
