/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from 'react';
 import {
   ActivityIndicator,
   Text,
   useColorScheme,
   View,
   StyleSheet
 } from 'react-native';
 import axios from 'axios';
 
 
 import Header from '../components/Header';
 import PeopleList from '../components/PeopleList';
 
 type Props = {};
 export default class PeoplePage extends Component<Props> {
 
   constructor(props){
     super(props);
     this.state = {
       people: [],
       loading: false,
       error: false

     };
   }
   componentDidMount() {
     this.setState({loading: true});
     axios
     .get('https://randomuser.me/api/?nat=br&results=40')
     .then(response =>{
        const {results} = response.data;
        this.setState({
          people: results,
          loading: false
        })
 
      }).catch(error => {
        this.setState({
          error: true,
          loading: false
        })
      });
   }
   renderList(){
     const textElements = this.state.people.map(person => {
       const {first} = person.name;
       return <Text key={first}>{first}</Text>
     });
     return textElements;
 
   }

   render() {

     return(
           <View style={styles.container}>
             {
               this.state.loading ? <ActivityIndicator size="large" color="#cbcbcb" /> 
               :
                this.state.error ? 
                  <Text style={styles.error}>Erro ao carregar lista de contatos...</Text> 
                  :
                  <PeopleList 
                  people={this.state.people}
                  onPressItem={(parameters) => this.props.navigation.navigate('PersonDetail', parameters)}
                  />
             }
           </View>
     );
   }
 };
 
 const styles=StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center'
   },
   error: {
    fontSize: 18,
    color: 'red',
    alignSelf: 'center'
  }
 })
 
 
 