
 import React from 'react';
 import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
 
 import Cadastro from './src/views/user/Cadastro'
import Login from './src/views/user/Login';
import MinhasColecoes from './src/views/colecoes/MinhasColecoes';
import Header from './src/components/Header';
 
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

const optionHeader = {
  headerTitle: () => <Header />, 
  headerStyle: { 
      elevation:0, 
      shadowOpacity:0, 
      borderBottomWidth: 0
  }
}

 const App = (props) => {
   return(

    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen options={{...optionHeader}} name="Cadastro"  component={Cadastro}/>
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login}/>
        <Stack.Screen options={{...options, title: "Minhas Coleções"}} name="MinhasColecoes" component={MinhasColecoes}/>
      </Stack.Navigator>
    </NavigationContainer>
   );
 }
 
 export default App;
 