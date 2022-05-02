import { View, Text, StyleSheet } from "react-native";
import React, {Component} from "react";

import { Stack, TextInput, Button, IconButton } from "@react-native-material/core";
import { backgroundUser, buttonColorDefault } from "../../assets/styles/Color";

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { StyleDefault } from "../../assets/styles/Style";
import  Header  from '../../components/Header';



type Props = {};
export default class Cadastro extends Component<Props> {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: '',
            passwordN: ''
        }

    }
    handleChange(event = {}) {
        const name = event.target && event.target.name;
        const value = event.target && event.target.value;
      
        this.setState({[name]: value});
    }
    componentDidMount(){

        const firebaseConfig = {
        apiKey: "AIzaSyCfMMK1-Ki03ZFsoOk8DFA2RD5_UvVRNEo",
        authDomain: "mindbooster-bbf12.firebaseapp.com",
        projectId: "mindbooster-bbf12",
        storageBucket: "mindbooster-bbf12.appspot.com",
        messagingSenderId: "712614382211",
        appId: "1:712614382211:web:28f36235fd7804568169b6",
        measurementId: "G-53JYNBXKQG"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);


    }
    processCadastrar(){

        const { email, password, passwordN} = this.state;
        if(password == passwordN){
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                alert('Cadastrado com sucesso!')
                this.props.navigation.navigate('Login');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
        }

    }
    render(){

        return(
            <View style={styles.container}>
                <Text style={styles.text}>Preencha os dados do seu cadastro</Text>
                <View style={styles.inputContainer}>
                    <Stack   spacing={2} style={{ margin: 16 }}>
                        <TextInput 
                            style={styles.input} 
                            label="E-mail"  
                            onChangeText={(value) => this.setState({email: value})}
                            value={this.state.email}
                        />
                        <TextInput 
                            style={styles.input} 
                            secureTextEntry={true} 
                            label="Senha"
                            onChangeText={(value) => this.setState({password: value})}
                            value={this.state.password}
                            
                        />
                        <TextInput 
                            style={styles.input} 
                            secureTextEntry={true} 
                            label="Repetir Senha"
                            onChangeText={(value) => this.setState({passwordN: value})}
                            value={this.state.passwordN}  
                        />
                        <Button 
                            style={StyleDefault.buttonDefault} 
                            onPress={() => this.processCadastrar()}  
                            title="CADASTRAR" 
                            color={buttonColorDefault}
                        />
                    </Stack>

                </View>

                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: backgroundUser,
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
