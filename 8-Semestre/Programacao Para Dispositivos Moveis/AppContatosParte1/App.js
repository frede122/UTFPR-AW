
import PeoplePage from "./src/screens/PeoplePage";
import React from "react";
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PeoplePage" component={PeoplePage} />
      </Stack.Navigator>
    </NavigationContainer>
      
  )
}