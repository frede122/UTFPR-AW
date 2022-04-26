import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Card = (props) => {
    const { imagem, texto, } = props;
    return(
        <View style={style.card}>
            <Image style={style.image} source={imagem} />
            <Text style={style.text}>{texto}</Text>
        </View>
    );
}
const style=StyleSheet.create({
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