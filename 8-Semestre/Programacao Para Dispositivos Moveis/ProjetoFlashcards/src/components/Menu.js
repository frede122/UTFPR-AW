import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import MinhasColecoes from '../views/colecoes/MinhasColecoes';



const Drawer = createDrawerNavigator();

export default function Menu () {
    return(
        <Drawer.Navigator initialRouteName="nome">
            <Drawer.Screen name="Colecoes" component={MinhasColecoes} />
           
        </Drawer.Navigator>
    );
}
