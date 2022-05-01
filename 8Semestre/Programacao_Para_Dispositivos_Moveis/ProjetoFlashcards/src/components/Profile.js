import React from "react";
import { View,  Image, Text, StyleSheet, Dimensions} from "react-native";



const Profile = (props)=>{
    const { imagem, texto, } = props;
    return(
    <View style={styles.container}>
        <Image style={styles.image} source={imagem} />
        <Text style={styles.texto}>{texto}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30
    },
    image: {
        width: 180,
        height: 180,
        borderRadius: 4
    },
    texto: {
        color: 'white',
        fontSize: 18,
        marginTop: 18,
        paddingBottom: 25,
        marginBottom: 5,
        width: '80%',
        textAlign: 'center',
        borderBottomColor: '#EDEDED',
        borderBottomWidth: 2
    }
})

export default Profile;