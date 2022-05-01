import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Button} from "@react-native-material/core";
import { StyleDefault } from "../../assets/styles/Style";
import { buttonColorDefault } from "../../assets/styles/Color";



const CardObjetoCad = (props) => {
    const { onPressButton } = props;
    return(
        <View style={ styles.container}>

            <View style={styles.containerCard}>
                <View style={styles.frente}>
                    <Text style={styles.text}>Frente</Text>
                    <TextInput style={styles.textInput}></TextInput>
                </View>
                <View style={styles.verso}>
                    <Text style={styles.text}>Verso</Text>
                    <TextInput style={styles.textInput}></TextInput>
                </View>

            </View>
            <Button 
                style={StyleDefault.buttonDefault, styles.button} 
                onPress={onPressButton} 
                title="CADASTRAR" 
                color={buttonColorDefault}
            />
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

export default CardObjetoCad;

