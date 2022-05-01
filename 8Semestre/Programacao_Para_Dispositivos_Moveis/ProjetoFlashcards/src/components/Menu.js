import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import MinhasColecoes from '../views/colecoes/MinhasColecoes';
import Login from '../views/user/Login';
import { backgroundDefault } from '../assets/styles/Color';
import DrawerContent from './DrawerContent';
import Icon from 'react-native-vector-icons/FontAwesome'

const screenOptions={
  drawerStyle: {
    backgroundColor: '#25213E',
    width: 250,
  },
  drawerLabelStyle: {
    color: 'white'
  },
  drawerActiveBackgroundColor: 'none'

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

      <Drawer.Screen name="MinhaColecoes" options={{...optionHeader, drawerIcon: config =>  <Icon name="sliders" size={29} color="white" />, title: 'Minhas Coleções'}} component={MinhasColecoes} />
      <Drawer.Screen options={{...optionHeader}} name="Login" component={Login} />
    </Drawer.Navigator>
  );
}
