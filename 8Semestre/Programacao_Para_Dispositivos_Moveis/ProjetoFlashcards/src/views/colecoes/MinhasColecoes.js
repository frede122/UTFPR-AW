import React from "react";
import { View, StyleSheet } from "react-native";
import CardColecao from "../../components/colecoes/CardColecao";
import ButtonAdd from '../../components/utils/ButtonAdd'
import {ColorsImage, ArvoreImage, BolaImage, SetaImage, UrsoImage} from '../../assets/images'
import { ScrollView } from "react-native-gesture-handler";

const MinhasColecoes = ({props, navigation}) => {
return(
<View  style={styles.container}>
        <View style={styles.button}>
             <ButtonAdd style={styles.button} onPress={() => navigation.navigate('NovaColecao')} />
        </View>

        <ScrollView style={styles.colecoes}>

            <CardColecao onPress={() => navigation.navigate('Cartoes')} imagem={BolaImage} texto="Objetos" />
            <CardColecao imagem={ColorsImage} texto="Cores" />
            <CardColecao imagem={UrsoImage} texto="Animais" />
            <CardColecao imagem={ArvoreImage} texto="Adjetivos" />
            <CardColecao imagem={SetaImage} texto="Pronomes" />
        </ScrollView>


    
    
</View>
);
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#332E56",
        height: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        height: '100%'
        
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
export default MinhasColecoes;