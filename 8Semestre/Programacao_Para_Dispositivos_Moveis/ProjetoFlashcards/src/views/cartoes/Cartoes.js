import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet} from "react-native";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import { StyleDefault } from "../../assets/styles/Style";
import FlashCardMini from "../../components/colecoes/FlashCardMini";
import ButtonAdd from "../../components/utils/ButtonAdd";
import { Stack, TextInput, Button} from "@react-native-material/core";
import { query, collection, initializeFirestore, onSnapshot, where, deleteDoc } from "firebase/firestore";
import {app, storage} from '../../config/Firebase';

const Cartoes = ({props, navigation, route}) => {

    const { id } = route.params.item;
    const [flashcards, setFlashCards] = useState('');
    const [data, setDataF] = useState('');

    const db = initializeFirestore(app, {experimentalForceLongPolling: true});
    const dbCollection  = collection(db, "flashcard");

    useEffect( () => {
        const q = query(dbCollection);

        const unsubscribe = onSnapshot(q, (snapshot)=>{
            const cartoes = [];
            snapshot.forEach( (doc) =>{
                cartoes.push({
                    id: doc.id,
                    ...doc.data()
                })
            });
            setFlashCards(cartoes);
            setDataF(cartoes)
        })
    },[])

    const filtro = (text) => {
        if(text == ""){
            setDataF(flashcards)
            alert(id)
        }
        const updatedData = flashcards.filter((item) => {
          const item_data_frente= `${item.frente.toUpperCase()})`;
          const item_data_verso= `${item.verso.toUpperCase()})`;
          const text_data = text.toUpperCase();
          return item_data_frente.indexOf(text_data) > -1 ||  item_data_verso.indexOf(text_data) > -1  ;
        });
        setDataF(updatedData);
    };



    return(
        <View  style={StyleDefault.container}>
            <View style={styles.button}>
                    <ButtonAdd style={styles.button} onPress={() => navigation.navigate('CadCartao',{id:id})} />
            </View>

            <View >
                <Stack style={styles.input} spacing={2} style={{ margin: 16 }}>
                        <TextInput onChangeText={filtro} style={styles.input} label="Filtro"  />
                </Stack>
            </View>
            <Button title="Jogar!"  onPress={() => navigation.navigate('Jogar', {data : flashcards})} style={{color:'white'}} color="#57966A"/>
            
            <FlatList 
                style={styles.colecoes}
                data={data}
                renderItem={({item}) =>(
                        <FlashCardMini frente={item.frente} verso={item.verso} id={item.id} />
                    )}
                keyExtractor={ (item, index) => item.frente+index}
            />

            
        </View>
    )
}

const styles = StyleSheet.create({

    input:{
        width: 330,
        justifyContent: 'center'
    },
    colecoes: {
        zIndex: 1
    },
    button:{
        bottom: 15,
        position: 'absolute',
        zIndex: 2,
        right: 10
    }
});

export default Cartoes;