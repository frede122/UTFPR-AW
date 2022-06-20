import React from "react";
import { View, Text, StyleSheet, Image,  Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from "react-native-gesture-handler";
import { query, collection, initializeFirestore, onSnapshot, where, deleteDoc, doc, } from "firebase/firestore";
import {app, storage} from '../../config/Firebase';

const CardColecao = (props) => {
    const {onPress, itens, imagem, texto, navigation, id} = props    
    
    const db = initializeFirestore(app, {experimentalForceLongPolling: true});
    const dbCollection  = collection(db, "flashcard");
    const deleteColecao = (id) =>{
        deleteDoc(doc(db, "colecao", id))
    }

    
    return(
        

            <View style={styles.card}>
                <TouchableOpacity style={styles.card} onPress={onPress}>
                    <Image style={styles.image} source={{uri : imagem}} />
                    <Text style={styles.text}>{texto} </Text>
                </TouchableOpacity>
                <View style={styles.iconContainer}>
                    <View style={styles.icon} onPress={() => navigation.navigate('NovaColecao')}>
                        <Icon name="pencil" size={20} color="#4472C4"></Icon>
                    </View>
                    <TouchableOpacity onPress={()=>{
                        Alert.alert(
                            "",
                            "Você tem certeza que deseja excluir essa coleção?",
                            [{
                                text: 'Não',
                                    onPress: () => {}
                                },{
                                text: 'Sim',
                                onPress: () => {deleteColecao(id)}
                            }]
                        )
                    }}>
                        <Icon name="trash" size={20} color="red"></Icon>
                    </TouchableOpacity>
                </View>
            </View>

        
    );
}
const styles=StyleSheet.create({
    icon:{
        alignSelf: 'flex-end',
        left: 10
    },
    iconContainer:{
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignContent: 'flex-end'
    },
    card: {
        borderRadius: 4,
        width: '90%',
        height: 120,
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: "center"
        
    },
    image:{
        width:70,
        height:70,
        margin: 15
    },
    text: {
        color: '#27ACA7',
        fontFamily: 'Tahoma',
        fontSize: 36,
        margin: 15
    }
})
export default CardColecao;