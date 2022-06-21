import { View, Text, StyleSheet } from "react-native";
import React, {Component} from "react";

import { Stack, TextInput, Button } from "@react-native-material/core";
import { backgroundUser, buttonColorDefault } from "../../assets/styles/Color";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { StyleDefault } from "../../assets/styles/Style";
import validarEmail from "../../utils/validarEmail";
import MessageError from "../../components/utils/MessageError";



type Props = {};
export default class Cadastro extends Component<Props> {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: '',
            passwordN: '',
            messageEmail: null,
            messagePasword: null,
            emailError: false,
            passwordError: false
        }

    }
    handleChange(event = {}) {
        const name = event.target && event.target.name;
        const value = event.target && event.target.value;
      
        this.setState({[name]: value});
    }
    componentDidMount(){

        // const firebaseConfig = {
        //     apiKey: "AIzaSyBSlCKhEjsQutjDy-7h4exY_50UuYq0GR4",
        //     authDomain: "mind-ddef5.firebaseapp.com",
        //     projectId: "mind-ddef5",
        //     storageBucket: "mind-ddef5.appspot.com",
        //     messagingSenderId: "556067998202",
        //     appId: "1:556067998202:web:851cc14016473c7b193c43",
        //     measurementId: "G-JKHP5J187G"
        //   };

        // // Initialize Firebase
        // const app = initializeApp(firebaseConfig);


    }
    
    validadorDeCampos(email, password, passwordN){
        password == passwordN ? 
            this.setState({passwordError : false, messagePasword: null}) : 
            this.setState({passwordError : true, messagePasword: 'Senha não confere'})

        var em = validarEmail(email)
        em ?  
            this.setState({emailError : false, messageEmail: null}) : 
            this.setState({emailError : true, messageEmail: 'E-mail inválido'})

        return em && password == passwordN

    }
    processCadastrar(){
        
        const { email, password, passwordN} = this.state;
        if(this.validadorDeCampos(email, password, passwordN)){
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
                            onChangeText={(value) => this.setState({email: value, emailError : false, messageEmail:null})}
                            value={this.state.email}
                            color={this.state.emailError ? "red" : "primary"}
                        />
                        <MessageError message={this.state.messageEmail}/>
                        <TextInput 
                            style={styles.input} 
                            secureTextEntry={true} 
                            label="Senha"
                            onChangeText={(value) => this.setState({password: value, passwordError : false, messagePasword:null})}
                            value={this.state.password}
                            color={this.state.passwordError ? "red" : "primary"}
                            
                        />
                        <TextInput 
                            style={styles.input} 
                            secureTextEntry={true} 
                            label="Repetir Senha"
                            onChangeText={(value) => this.setState({passwordN: value, passwordError : false, messagePasword:null})}
                            value={this.state.passwordN}  
                            color={this.state.passwordError ? "red" : "primary"}
                        />
                        <MessageError message={this.state.messagePasword}/>
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
