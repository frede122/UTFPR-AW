import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { Stack, TextInput, Button, IconButton } from "@react-native-material/core";
import { backgroundDefault, buttonColorDefault } from "../../assets/styles/Color";


import { StyleDefault } from "../../assets/styles/Style";
import  Header  from '../../components/Header';




const Cadastro = (props) => {
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Preencha os dados do seu cadastro</Text>
            <View style={styles.inputContainer}>
                <Stack   spacing={2} style={{ margin: 16 }}>
                    <TextInput style={styles.input} label="E-mail"  />
                    <TextInput style={styles.input} secureTextEntry={true} label="Senha"  />
                    <TextInput style={styles.input} secureTextEntry={true} label="Repetir Senha"  />
                    <Button 
                        style={StyleDefault.buttonDefault} 
                        onPress={() => props.navigation.navigate('Login')}  
                        title="CADASTRAR" 
                        color={buttonColorDefault}
                    />
                </Stack>

            </View>

            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: backgroundDefault,
        height: '100%',
        justifyContent: 'center'
        
    },
    inputContainer :{
        flex: 1,
        justifyContent: 'center'
    },
    input:{
        marginTop: 7,
        marginBottom: 7
    },
    buttonCadastrar: {
        height: 45,
        justifyContent: 'center',
        fontSize: 140,
        marginTop: 10
    },

    text: {
        fontSize: 28,
        color: "#fff",
        textAlign: 'center',
        top: '20%',
        fontFamily: 'PSL Ornanong Pro',
        
    }
});

export default Cadastro;