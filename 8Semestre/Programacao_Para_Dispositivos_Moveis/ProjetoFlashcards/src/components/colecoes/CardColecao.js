import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
// import {StyleDefault} from "../assets/styles/style";
import { TouchableOpacity } from "react-native-gesture-handler";

const CardColecao = (props) => {
    const {onPress, itens, imagem, texto, } = props;
    return(
        <TouchableOpacity onPress={onPress}>

            <View style={styles.card}>
                <Image style={styles.image} source={imagem} />
                <Text style={styles.text}>{texto}</Text>
            </View>

        </TouchableOpacity>
    );
}
const styles=StyleSheet.create({
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