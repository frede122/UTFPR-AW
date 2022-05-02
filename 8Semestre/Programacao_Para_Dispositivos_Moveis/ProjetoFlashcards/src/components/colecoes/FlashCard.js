import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


const FlashCard = (props) => {
    const {onPress,frente, verso } = props;
    return(
        <TouchableOpacity onPress={onPress}>

            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.header}>Frente</Text>
                    <Text style={styles.text}>{frente}</Text>

                </View>
                <View style={styles.card}>
                    <Text style={styles.header}>Verso</Text>
                    <Text style={styles.text}>{verso}</Text>
                </View>
                <View style={styles.option}>
                    <Text >Editar</Text>
                    <Text >Excluir</Text>
                </View>
            </View>

        </TouchableOpacity>

    );
}

const styles=StyleSheet.create({
    container: {
        borderRadius: 13,
        width: 330,
        maxWidth: '100%',
        height: 80,
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: "center",
        padding: 10,
        justifyContent: "space-around"
        
    },
    card: {
        margin: 5
    },
    option: {
        flexDirection: 'row'
    },
    image:{
        margin: 15
    },
    text: {
        color: '#27ACA7',
        fontFamily: 'Tahoma',
        fontSize: 18,
        margin: 2,
        marginTop: 8
    }
})

export default FlashCard;