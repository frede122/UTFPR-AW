
 import * as React from 'react';
 import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
 
 import Cadastro from './src/views/user/Cadastro'
import Login from './src/views/user/Login';
import MinhasColecoes from './src/views/colecoes/MinhasColecoes';
import Header from './src/components/Header';


import Menu from './src/components/Menu';
import CadCartao from './src/views/cartoes/CadCartao';
import Cartoes from './src/views/cartoes/Cartoes';

 
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
  },
  headerShown: false
}

const optionHeader = {
  headerTitle: () => <Header />, 
  headerStyle: { 
      elevation:0, 
      shadowOpacity:0, 
      borderBottomWidth: 0
  },
  headerLeft: {
    color: 'white'
  }
}

 const App = (props) => {
   return(

    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen options={{headerShown: false}} name="Menu" component={Menu}/>
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login}/>
        <Stack.Screen options={{...optionHeader,headerLeft:null}} name="Cadastro"  component={Cadastro}/>

        

      
        
      </Stack.Navigator>

    </NavigationContainer>
   );
 }
 
 export default App;
 