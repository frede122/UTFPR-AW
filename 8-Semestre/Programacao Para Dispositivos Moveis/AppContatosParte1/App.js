
import PeoplePage from "./src/screens/PeoplePage";
import React from "react";
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import PersonDetails from "./src/screens/PersonDetails";
import { withSafeAreaInsets } from "react-native-safe-area-context";


const Stack = createStackNavigator();
const options={
  title: "Contatos",
  headerTitleStyle:{
      color: 'white',
      fontSize: 30,
      flexGrow: 1,
    
  },
  headerStyle: {
      backgroundColor: "#6ca2f7",
      borderBottomWidth: 1,
      borderBottomColor: "#c5c5c5"
  }
}

export default function App(){
  const PersonDetailOptions = ({route})=>{
      return({  
        ...options,
        title: route.params.person.name.first,
        headerTitleStyle: {
          color: 'white',
          fontSize: 30,
        } 
      });
  
  }
  return(
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen options={options} name="PeoplePages"  component={PeoplePage}/>
        <Stack.Screen options={PersonDetailOptions} name="PersonDetail" component={PersonDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
      
  )
}