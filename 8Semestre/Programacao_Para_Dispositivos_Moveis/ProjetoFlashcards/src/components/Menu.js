import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import MinhasColecoes from '../views/colecoes/MinhasColecoes';
import Login from '../views/user/Login';
import { backgroundUser } from '../assets/styles/Color';
import DrawerContent from './DrawerContent';
import Icon from 'react-native-vector-icons/FontAwesome'
import CadCartao from '../views/cartoes/CadCartao';
import Cartoes from '../views/cartoes/Cartoes';
import NovaColecao from '../views/colecoes/NovaColecao';
import Jogar from '../views/Jogar';

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
    backgroundColor: backgroundUser,
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
      <Drawer.Screen options={{...optionHeader, title: 'Coleção - objetos'}}  name="CadCartao" component={CadCartao}/>
      <Drawer.Screen options={{...optionHeader, title: 'Coleção - objetos'}}  name="Cartoes" component={Cartoes}/>
      <Drawer.Screen options={{...optionHeader, title: 'Minhas Coleções'}}  name="NovaColecao" component={NovaColecao}/>
      <Drawer.Screen options={{...optionHeader, title: 'Jogar'}}  name="Jogar" component={Jogar}/>
    </Drawer.Navigator>
  );
}
