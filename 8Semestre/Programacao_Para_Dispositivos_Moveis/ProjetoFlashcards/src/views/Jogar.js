import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { StyleDefault } from "../assets/styles/Style";
import { buttonColorDefault } from "../assets/styles/Color";
import { Button} from "@react-native-material/core";
import FlashCard from "../components/colecoes/FlashCard";
import JogarFrente from '../components/jogar/JogarFrente'

const Jogar = ({props, route, navigation}) => {
    const [hide, setHide] = React.useState(true);
    const {data} = route.params;
    const [position, setPosition] = React.useState(0);
    const tam = data.length;


    return(
        <View  style={StyleDefault.container}>
            <Text style={styles.text}>Cartão {position+1} / {tam}</Text>

            <View>
                {hide ?
                    <JogarFrente frente={data[position].frente} />:
                    <FlashCard frente={data[position].frente} verso={data[position].verso}/>
                }
            </View>
            {
                hide ?
                <Button onPress={()=>{setHide(false)}} title="Virar" style={StyleDefault.buttonDefault, styles.button} color={buttonColorDefault}/>:
                
                   ( position < tam-1) ? 
                        <Button onPress={()=>{
                            setHide(true);
                            setPosition(position + 1)
                        }}
                        
                        title="Promixo" 
                        style={StyleDefault.buttonDefault, styles.button} 
                        color={buttonColorDefault}
                        />             
                    :  
                        <Button onPress={()=>{
                            setHide(true);
                            setPosition(0);
                            navigation.goBack()
                        }} 
                            title="finalizar" 
                            style={StyleDefault.buttonDefault, styles.button} 
                            color={"#61A170"}
                        />
                
                

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