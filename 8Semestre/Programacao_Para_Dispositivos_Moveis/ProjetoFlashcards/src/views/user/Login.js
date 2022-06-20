import { View, Text, StyleSheet, Image } from "react-native";
import React, {Component} from "react";

import { Stack, TextInput, Button,  IconButton } from "@react-native-material/core";

import Mind from '../../assets/images/mind.png'
import { backgroundUser, buttonColorDefault } from "../../assets/styles/Color";
import { StyleDefault } from "../../assets/styles/Style";
import validarEmail from "../../utils/validarEmail";
import MessageError from "../../components/utils/MessageError";

import { initializeApp } from "firebase/app";
import app from '../../config/Firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {};
export default class Login extends Component<Props> {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: '',
            messageEmail: null,
            emailError: false
        }

    }

    handleChange(event = {}) {
        const name = event.target && event.target.name;
        const value = event.target && event.target.value;
      
        this.setState({[name]: value});
    }



    componentDidMount(){

    }
    
    processLogin(){

        const { email, password} = this.state;

        const auth = getAuth();
        if(validarEmail(email)){
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                this.props.navigation.navigate('Menu');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            })
        }else{
            this.setState({
                messageEmail : 'E-mail inválido', 
                emailError : true
            })
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.img} source={Mind} />
                <Text style={styles.textHeader}>Mind Booster</Text>
                <View style={styles.inputContainer}>
                    <Stack   spacing={2} style={{ margin: 16 }}>
                        <TextInput 
                            style={styles.input} label="E-mail"
                            onChangeText={(value) => this.setState({email: value, emailError : false, messageEmail:null})}
                            value={this.state.email}
                            color={this.state.emailError ? "red" : "primary"}
                        />
                        <MessageError message={this.state.messageEmail}/>
                        <TextInput 
                            style={styles.input} 
                            secureTextEntry={true} label="Senha"
                            onChangeText={(value) => this.setState({password: value})}
                            value={this.state.password}
                        />
                        <Text style={styles.text}>Esqueci a senha</Text>
                        <Button 
                            style={StyleDefault.buttonDefault} 
                            onPress={() => this.processLogin()} 
                            title="ENTRAR" 
                            color={buttonColorDefault}
                        />
                    </Stack>
                </View>
                <Button 
                    style={styles.buttonCadastrar, {margin: 16}} 
                    titleStyle={{color: '#fff'}} 
                    title="CADASTRE-SE" color="#B58D97"
                    onPress={()=>this.props.navigation.navigate('Cadastro')}
                />

                
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

