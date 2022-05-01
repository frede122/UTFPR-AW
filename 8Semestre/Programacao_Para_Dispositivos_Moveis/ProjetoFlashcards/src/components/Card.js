import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
// import {StyleDefault} from "../assets/styles/style";

const Card = (props) => {
    const { imagem, texto, } = props;
    return(
        <View style={styles.card}>
            <Image style={styles.image} source={imagem} />
            <Text style={styles.text}>{texto}</Text>
        </View>
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
export default Card;