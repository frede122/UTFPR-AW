import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

const JogarFrente = (props) => {
    const {frente = null} = props;
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{frente}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 200,
        marginBottom: 60,
        backgroundColor: 'white',
        borderRadius: 13,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 28,
        color: 'black',
        textDecorationLine: "underline line-through"
    }
})
export default JogarFrente;