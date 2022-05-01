import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import MinhasColecoes from '../views/colecoes/MinhasColecoes';
import Login from '../views/user/Login';
import { backgroundDefault } from '../assets/styles/Color';
import DrawerContent from './DrawerContent';

const screenOptions={
  drawerStyle: {
    backgroundColor: '#25213E',
    width: 250,
  },
}

const optionHeader = {
  headerStyle: {
    backgroundColor: backgroundDefault,
  },
  headerTitleStyle:{
    color: '#ffffff',
    fontSize: 20,
  
},


}



const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
    <Drawer.Navigator 
      screenOptions={screenOptions}
      drawerContent={(props) => <DrawerContent {...props}/>} 
    >

      <Drawer.Screen name="MinhaColecoes" options={{...optionHeader,  title: 'Minhas Coleções'}} component={MinhasColecoes} />
      <Drawer.Screen options={{...optionHeader}} name="Login" component={Login} />
    </Drawer.Navigator>
  );
}
