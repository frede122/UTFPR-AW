import { View, Text, StyleSheet, Image } from "react-native";
import React, {Component} from "react";

import { Stack, TextInput, Button,  IconButton } from "@react-native-material/core";

import Mind from '../../assets/images/mind.png'
import { backgroundUser, buttonColorDefault } from "../../assets/styles/Color";
import { StyleDefault } from "../../assets/styles/Style";

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

type Props = {};
export default class Login extends Component<Props> {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: ''
        }

    }

    handleChange(event = {}) {
        const name = event.target && event.target.name;
        const value = event.target && event.target.value;
      
        this.setState({[name]: value});
    }

    componentDidMount(){
        // Import the functions you need from the SDKs you need

        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

        // const analytics = getAnalytics(app);

        

    }
    processLogin(){

        const { email, password} = this.state;

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            this.props.navigation.navigate('Menu');
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
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
                            onChangeText={(value) => this.setState({email: value})}
                            value={this.state.email}
                        />
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

