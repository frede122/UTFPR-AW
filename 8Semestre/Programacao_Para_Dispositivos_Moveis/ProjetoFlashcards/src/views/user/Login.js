import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

import { Stack, TextInput, Button,  IconButton } from "@react-native-material/core";

import Mind from '../../assets/images/mind.png'
import { backgroundDefault, buttonColorDefault } from "../../assets/styles/Color";
import { StyleDefault } from "../../assets/styles/Style";


const Login = (props) => {
    
    return(
        <View style={styles.container}>
            <Image style={styles.img} source={Mind} />
            <Text style={styles.textHeader}>Mind Booster</Text>
            <View style={styles.inputContainer}>
                <Stack   spacing={2} style={{ margin: 16 }}>
                    <TextInput style={styles.input} label="E-mail"  />
                    <TextInput style={styles.input} secureTextEntry={true} label="Senha"  />
                    <Text style={styles.text}>Esqueci a senha</Text>
                    <Button 
                        style={StyleDefault.buttonDefault} 
                        onPress={ () => {props.navigation.navigate('MinhasColecoes')}} 
                        title="ENTRAR" 
                        color={buttonColorDefault}
                    />
                </Stack>
            </View>
            <Button 
                style={styles.buttonCadastrar, {margin: 16}} 
                titleStyle={{color: '#fff'}} 
                title="CADASTRE-SE" color="#B58D97"
            />

            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: backgroundDefault,
        height: '100%',
        justifyContent: 'center'
        
    },
    buttonCadastrar: {
        height: 45,
        justifyContent: 'center',
        fontSize: 140,
        marginTop: 10
    },
    img:{
        width: 132,
        height: 132,
        top: '10%',
        alignSelf: 'center'
    },
    inputContainer :{
        flex: 1,
        justifyContent: 'center'
    },
    input:{
        marginTop: 7,
        marginBottom: 7
    },


    textHeader: {
        fontSize: 45,
        color: "#fff",
        textAlign: 'center',
        top: '10%',
        fontFamily: 'Pacifico',
        
    },
    text: {
        fontSize: 14,
        color: "#fff",
        textAlign: 'right',
        marginBottom: 20

    }
});

export default Login;