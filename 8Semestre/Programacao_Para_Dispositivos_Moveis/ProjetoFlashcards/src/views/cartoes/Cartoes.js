import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import { StyleDefault } from "../../assets/styles/Style";
import FlashCardMini from "../../components/colecoes/FlashCardMini";
import ButtonAdd from "../../components/utils/ButtonAdd";
import { Stack, TextInput, Button} from "@react-native-material/core";

const Cartoes = ({props, navigation, route}) => {

    const { cart } = route.params.item;
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
            <Button title="Jogar!"  onPress={() => navigation.navigate('Jogar', {data : cart})} style={{color:'white'}} color="#57966A"/>


            <FlatList 
                style={styles.colecoes}
                data={cart}
                renderItem={({item}) =>(
                        <FlashCardMini frente={item.frente} verso={item.verso}  />
                    )}
                keyExtractor={ (item, index) => item.frente+index}
            />

            
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