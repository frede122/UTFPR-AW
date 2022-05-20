import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from "react-native-gesture-handler";

const CardColecao = (props) => {
    const {onPress, itens, imagem, texto, navigation} = props;
    return(
        <TouchableOpacity onPress={onPress}>

            <View style={styles.card}>
                <Image style={styles.image} source={imagem} />
                <Text style={styles.text}>{texto}</Text>
                <View style={styles.iconContainer}>
                    <View style={styles.icon} onPress={() => navigation.navigate('NovaColecao')}>
                        <Icon name="pencil" size={20} color="#4472C4"></Icon>
                    </View>
                    <View onPress={() => navigation.navigate('NovaColecao')} style={styles.icon}>
                        <Icon name="trash" size={20} color="red"></Icon>
                    </View>
                </View>
            </View>

        </TouchableOpacity>
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