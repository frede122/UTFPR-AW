import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { backgroundDefault, buttonColorDefault } from "../../assets/styles/Color";
import { Stack, TextInput, Button,} from "@react-native-material/core";
import CardObjetoCad from "../../components/colecoes/CardObjetoCad";
import {StyleDefault} from '../../assets/styles/Style'
import { TextInputAffix } from "react-native-paper/lib/typescript/components/TextInput/Adornment/TextInputAffix";
import {BolaImage} from '../../assets/images';

const NovaColecao = ({route, navigation}) => {
    const  text  = route.params ? route.params.text : 'ss' ;    
    return(

            <View  style={StyleDefault.container}>
                <Text style={styles.text} >Preencha os dados referente à coleção a ser criada</Text>
                
                
                <View>

                    <Stack  spacing={2} style={{ margin: 16 }}>
                        <TextInput style={styles.inputColec} label="Coleção"  />
                        <TextInput style={styles.inputDesc}  label="Descrição"  />
                        <View style={styles.inputImage}>
                            <Text>Imagen</Text>
                            <Image style={styles.img} source={BolaImage} />
                        </View>
                       
                        

                        <Button 
                            style={StyleDefault.buttonDefault, styles.button} 
                            title="CADASTRAR" 
                            color={buttonColorDefault}
                        />
                    </Stack>
                </View>



                <Button 
                    style={StyleDefault.buttonDefault, styles.buttonB} 
                    onPress={() => {navigation.goBack()}} 
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
        marginTop: 10
        
    },
    buttonB:{
        width: 300,
        minWidth: '70%',
        bottom: 10,
        position: 'absolute'
        
    },    
    inputDesc:{
        marginTop: 7,
        width: 300,
    },
    inputColec:{
        marginTop: 7,
        width: 300,
    },
    inputImage:{
        marginTop: 7,
        width: 300,
        height: 160,
        backgroundColor: 'white',
        borderTopEndRadius: 3,
        borderTopLeftRadius: 3,
        padding: 10
    },
    img:{
        width: 100,
        height: 100,
        alignSelf: 'center'
    },
    text: {
        width: 300,
        textAlign: 'center',
        color: 'white',
        top: -70,
        fontSize: 18
    }
})


export default NovaColecao;