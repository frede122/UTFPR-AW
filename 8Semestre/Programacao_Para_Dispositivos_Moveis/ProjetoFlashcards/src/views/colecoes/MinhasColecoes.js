import React from "react";
import { View, StyleSheet } from "react-native";
import Card from "../../components/Card";
import {ColorsImage, ArvoreImage, BolaImage, SetaImage, UrsoImage} from '../../assets/images'

const MinhasColecoes = (props) => {
return(
<View style={styles.container}>
    <Card imagem={BolaImage} texto="Objetos" />
    <Card imagem={ColorsImage} texto="Cores" />
    <Card imagem={UrsoImage} texto="Animais" />
    <Card imagem={ArvoreImage} texto="Adjetivos" />
    <Card imagem={SetaImage} texto="Pronomes" />
    
    
</View>
);
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#332E56",
        height: '100%',
        justifyContent: 'center'
        
    }
});
export default MinhasColecoes;