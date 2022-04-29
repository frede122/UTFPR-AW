import React from "react";
import { View,  Image, Text, StyleSheet, Dimensions} from "react-native";
import {MindImage} from '../assets/images';
import { backgroundDefault } from "../assets/styles/Color";

const Header = (props) => {
    
    return(
        <View style={styles.container}>
            <Image style={styles.img} source={MindImage} />
            <Text style={styles.text}>Mind Booster</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: backgroundDefault,
        height: '100%',
        width: Dimensions.get('window').width,
        margin: 0,
        padding: 0,
        left: -16,
        flexDirection: 'row',
        alignItems: 'center'
    },
    img: {
        width: 50,
        height: 50
    },
    text: {
        width: '100%',
        marginLeft: 10,
        fontFamily: 'Pacifico',
        fontSize: 20,
        color: "white"
    }
})

export default Header;