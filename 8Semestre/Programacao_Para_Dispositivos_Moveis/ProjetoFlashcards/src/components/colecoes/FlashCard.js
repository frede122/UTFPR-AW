import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Button} from "@react-native-material/core";
import { StyleDefault } from "../../assets/styles/Style";
import { buttonColorDefault } from "../../assets/styles/Color";
import { addDoc, collection, initializeFirestore, updateDoc, doc } from 'firebase/firestore';
import {app} from '../../config/Firebase';



const FlashCard = (props, route) => {
    const { navigation = null, frenteP = null, versoP= null, id, myId} = props;
    const [frente, setFrente] = useState(frenteP ? frenteP: '');
    const [verso, setVerso] = useState(versoP ? versoP :  '');


    const db = initializeFirestore(app, {experimentalForceLongPolling: true});
    const flashcardCollection  = collection(db, "flashcard");

    const addFlashCard = ()=>{
        const docFlashCard = {
            frente: frente,
            verso: verso,
            colecao: id
        }

        addDoc(flashcardCollection, docFlashCard).then((docRef)=>{
            console.log('documento inserido com sucesso' + docRef.id);
            navigation.navigate('MinhaColecoes')
        }).catch( (erro) =>{
            console.log("erro " + erro);
        })
    }
    const updateFlashCard = ()=>{
        const docFlashCard = {
            frente: frente,
            verso: verso
        }
        updateDoc(doc(db, "flashcard", myId), docFlashCard).then(()=>{
            navigation.navigate('MinhaColecoes')
        })
    }

    useEffect(() => {
        setFrente(frenteP ? frenteP:'');
        setVerso(versoP ? versoP :'');
    }, [frenteP, versoP]);

    return(
        <View style={ styles.container}>
            <View style={styles.containerCard}>
                <View style={styles.frente}>
                    <Text style={styles.text}>Frente</Text>
                    <TextInput onChangeText={setFrente} style={styles.textInput} value={frente}></TextInput>
                </View>
                <View style={styles.verso}>
                    <Text style={styles.text}>Verso </Text>
                    <TextInput onChangeText={setVerso} style={styles.textInput} value={verso}></TextInput>
                </View>

            </View>
            {!frenteP && !versoP ?
                <Button 
                    style={StyleDefault.buttonDefault, styles.button} 
                    onPress={()=>addFlashCard()} 
                    title="CADASTRAR" 
                    color={buttonColorDefault}
                /> : null
            }
            {myId ?
            
                <Button 
                    style={StyleDefault.buttonDefault, styles.button} 
                    onPress={()=>updateFlashCard()} 
                    title="ATUALIZAR" 
                    color={buttonColorDefault}
                /> : null
            }
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        width: 300,
        height: 'auto',
        marginBottom: 60,
    },
    frente: {
        width: 280,
        borderStyle: 'dashed',
        borderBottomWidth: 1,
        marginLeft: 10,
        borderColor: '#707070'
    },
    verso: {
        width: 280,
        marginLeft: 10
    },
    containerCard: {
        borderRadius: 13,
        width: 300,
        height: 280,
        backgroundColor: '#ffffff',
        
    },
    button:{
        width: 300,
        marginTop: 20
    },
    textInput:{
        margin: 10,
        fontSize: 28,
        textAlign: 'center',
        textDecorationLine: 'underline line-through'
    },
    text: {
        margin: 15,
        fontSize: 18
    }
})

export default FlashCard;

