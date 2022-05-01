import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { backgroundDefault, buttonColorDefault } from "../../assets/styles/Color";
import { Button} from "@react-native-material/core";
import CardObjetoCad from "../../components/colecoes/CardObjetoCad";
import {StyleDefault} from '../../assets/styles/Style'

const CadCartao = ({route, navigation}) => {
    const  text  = route.params ? route.params.text : 'ss' ;    
    return(

            <View  style={StyleDefault.container}>
                <Text style={styles.text} >os dados da frente e do verso do flashcard</Text>
                <CardObjetoCad onPressButton={() => {navigation.navigate('MinhasColecoes')}} />
                <Button 
                    style={StyleDefault.buttonDefault, styles.button} 
                    onPress={() => {navigation.navigate('MinhasColecoes')}} 
                    title="CANCELAR" 
                    variant="outlined"
                    color={styles.buttonCollor}
                /> 
            </View>
    );
}


const styles= StyleSheet.create({
    buttonCollor: '#ffffff',
    button:{
        width: 300,
        minWidth: '70%',
        bottom: 10,
        position: 'absolute'
        
    },
    text: {
        width: 300,
        textAlign: 'center',
        color: 'white',
        top: -50,
        fontSize: 18
    }
})


export default CadCartao;