import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { StyleDefault } from "../assets/styles/Style";
import { buttonColorDefault } from "../assets/styles/Color";
import { Button} from "@react-native-material/core";
import CardObjetoCad from "../components/colecoes/CardObjetoCad";
import JogarFrente from '../components/jogar/JogarFrente'

const Jogar = (props) => {
    const [hide, setHide] = React.useState(true);
    const {numero = 8, total = 8, navigation } = props;
    return(
        <View  style={StyleDefault.container}>
            <Text style={styles.text}>Cartão {numero} / {total}</Text>

            <View >
                {hide ?
                    <JogarFrente frente="hello" />:
                    <CardObjetoCad frente="hello" verso="oi"/>
                }
            </View>
            {
                hide ?
                <Button onPress={()=>{setHide(false)}} title="Virar" style={StyleDefault.buttonDefault, styles.button} color={buttonColorDefault}/>:
                <Button onPress={()=>{setHide(true), navigation.goBack()}} title="Promixo" style={StyleDefault.buttonDefault, styles.button} color={buttonColorDefault}/>
            }

            
        </View>
    )
}

const styles = StyleSheet.create({

    button:{
        width: 300,
        marginTop: 20
    },
    text:{
        color: 'white',
        fontSize: 18,
        marginBottom: 15
    }
});

export default Jogar;