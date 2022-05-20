import React from "react";
import { View, StyleSheet } from "react-native";
import CardColecao from "../../components/colecoes/CardColecao";
import ButtonAdd from '../../components/utils/ButtonAdd'
import {ColorsImage, ArvoreImage, BolaImage, SetaImage, UrsoImage} from '../../assets/images'
import { ScrollView, FlatList} from "react-native-gesture-handler";



const MinhasColecoes = ({props, navigation}) => {

    const data = [
            {   imagem : BolaImage, 
                texto: "Objetos", 
                cart: [
                    {frente:"bola", verso:"ball"},
                    {frente:"lapis", verso:"pencil"},
                    {frente:"grande", verso:"big"},
                    {frente:"regua", verso:"ruler"},
                    {frente:"amigo", verso:"friend"},
                    {frente:"livro", verso:"book"},
                    {frente:"carro", verso:"car"},
                    {frente:"banana", verso:"banana"}
                ]
            }, 
            {   imagem : ColorsImage, 
                texto: "Cores", 
                cart: [
                    {frente:"azul", verso:"blue"},
                    {frente:"amarelo", verso:"yellow"},
                    {frente:"verde", verso:"green"},
                    {frente:"vermelho", verso:"red"},
                    {frente:"marrom", verso:"brown"},
                    {frente:"roxo", verso:"purple"}
                ]
            }, 
            {   imagem : UrsoImage, 
                texto: "Animais", 
                cart: [
                    {frente:"peixe", verso:"fish"},
                    {frente:"gato", verso:"cat"},
                    {frente:"cavalo", verso:"horse"},
                    {frente:"cachorro", verso:"dog"},
                    {frente:"porco", verso:"pig"},
                    {frente:"passaro", verso:"bird"},
                    {frente:"jacare", verso:"aligator"},
                    {frente:"donkey", verso:"burro"},
                    {frente:"galinha", verso:"chicken"}
                ]
            }, 
            {imagem : ArvoreImage, 
                texto: "Adjetivos", 
                cart: [
                    {frente:"amigavel", verso:"friendly"},
                    {frente:"baixo", verso:"short"},
                    {frente:"bondoso", verso:"kind"},
                    {frente:"cansado", verso:"tired"},
                    {frente:"alto", verso:"tall"},
                    {frente:"bonito", verso:"handsome"}
                ]
            }, 
            {   imagem : SetaImage, 
                texto: "Pronomes", 
                cart: [
                    {frente:"eu", verso:"I"},
                    {frente:"você", verso:"you"},
                    {frente:"ele", verso:"he"},
                    {frente:"ela", verso:"she"},
                    {frente:"eles", verso:"they"},
                    {frente:"nós", verso:"we"}
                ]
            }, 
        ]


return(
<View  style={styles.container}>
        <View style={styles.button}>
             <ButtonAdd style={styles.button} onPress={() => navigation.navigate('NovaColecao')} />
        </View>



        <FlatList 
                style={styles.colecoes}
                data={data}
                renderItem={({item}) =>(
                        <CardColecao 
                        onPress={() => navigation.navigate('Cartoes', {item})} 
                        imagem={item.imagem} texto={item.texto} />
                    )}
                keyExtractor={ (item, index) => item.texto+index}
        />

    
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