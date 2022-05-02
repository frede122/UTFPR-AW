import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { StyleDefault } from "../../assets/styles/Style";
import FlashCard from "../../components/colecoes/FlashCard";
import ButtonAdd from "../../components/utils/ButtonAdd";
import { Stack, TextInput, Button} from "@react-native-material/core";

const Cartoes = ({props, navigation}) => {
    return(
        <View  style={StyleDefault.container}>
            <View style={styles.button}>
                    <ButtonAdd style={styles.button} onPress={() => navigation.navigate('CadCartao')} />
            </View>

            <View >
                <Stack style={styles.input} spacing={2} style={{ margin: 16 }}>
                        <TextInput style={styles.input} label="Filtro"  />
                </Stack>
            </View>
            <Button title="Jogar!"  onPress={() => navigation.navigate('Jogar')} style={{color:'white'}} color="#57966A"/>
            <ScrollView style={styles.colecoes}>

                <FlashCard frente="oi2" verso="hello1"  />
                <FlashCard frente="oi3" verso="hello2" />
                <FlashCard frente="oi2" verso="hello1"  />
                <FlashCard frente="oi3" verso="hello2" />
                <FlashCard frente="oi2" verso="hello1"  />
                <FlashCard frente="oi3" verso="hello2" />
                <FlashCard frente="oi2" verso="hello1"  />
                <FlashCard frente="oi3" verso="hello2" />
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({

    input:{
        width: 330,
        justifyContent: 'center'
    },
    colecoes: {
        zIndex: 1
    },
    button:{
        bottom: 15,
        position: 'absolute',
        zIndex: 2,
        right: 10
    }
});

export default Cartoes;