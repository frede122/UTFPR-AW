import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const ButtonAdd = (props) =>{
    const {onPress} = props;
    return(
        <TouchableOpacity onPress={onPress}>
          <View style={ styles.container}>
                <Text style={ styles.text}>
                    +
                </Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        backgroundColor: '#7A71AF',
        width: 50,
        height: 50,
        zIndex:2,
        justifyContent: 'center'
    },
    text: {
        top: -3,
        color: 'white',
        textAlign: 'center',
        fontSize: 40
        
    }
})

export default ButtonAdd;