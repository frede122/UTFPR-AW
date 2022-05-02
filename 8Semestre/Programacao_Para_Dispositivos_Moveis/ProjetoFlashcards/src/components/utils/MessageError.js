import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MessageError = (props) =>{
    const {message} = props;
    return(
        <View>
            {
                message ?
                <Text style={styles.text}>{message}</Text> :
                null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'red',
        fontSize: 16
    }
})

export default MessageError;