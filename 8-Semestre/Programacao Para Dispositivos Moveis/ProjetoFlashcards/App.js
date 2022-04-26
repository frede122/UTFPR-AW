
 import React from 'react';
 import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
 
 import Cadastro from './src/views/user/Cadastro'
import Login from './src/views/user/Login';
// import Cards from './src/components/Cards';
import MinhasColecoes from './src/views/colecoes/MinhasColecoes';
 
 const Stack = createStackNavigator();

 const options={
  title: "Flash Card",
  headerTitleStyle:{
      color: 'white',
      fontSize: 20,
      flexGrow: 1,
      
      textAlignVertical: 'center'
    
  },
  headerStyle: {
      backgroundColor: "#4A4568",
  }
}

 const App = (props) => {
   return(

    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen  name="Cadastro"  component={Cadastro}/>
        <Stack.Screen options={{display: 'none'}} name="Login" component={Login}/>
        <Stack.Screen options={{...options, title: "Minhas Coleções"}} name="MinhasColecoes" component={MinhasColecoes}/>
      </Stack.Navigator>
    </NavigationContainer>
   );
 }
 
 export default App;
 