import React, { useState, useEffect  } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import { addDoc, collection, initializeFirestore, updateDoc, doc  } from 'firebase/firestore';

import {app} from '../../config/Firebase';
import { buttonColorDefault } from "../../assets/styles/Color";
import { Stack, TextInput, Button,} from "@react-native-material/core";
import {StyleDefault} from '../../assets/styles/Style'
import { TextInput as TextI } from "react-native-gesture-handler";

const NovaColecao = ({route, navigation}) => {
    const  text  = route.params ? route.params.text : 'ss' ; 
    const dataCollection = route.params ? route.params.colecao : '';

    const [imagemSelect, setImgSelect] = useState('');
    const [data, setData] = useState('');
    const [colecao, setColecao] = useState(dataCollection.texto ? dataCollection.texto:'');
    const [descricao, setDescricao] = useState(dataCollection.descricao ? dataCollection.descricao :'');
    const [imagem, setImagem] = useState(dataCollection.imagem ? dataCollection.imagem :'');
    const [id, setId] = useState(dataCollection.id ? dataCollection.id : null);


    const reader = new FileReader(); 
    

    const db = initializeFirestore(app, {experimentalForceLongPolling: true});
    const dbCollection  = collection(db, "colecao");


    useEffect(() => {
        setColecao(dataCollection.texto ? dataCollection.texto:'');
        setDescricao(dataCollection.descricao ? dataCollection.descricao :'');
        setImagem(dataCollection.imagem ? dataCollection.imagem :'');
        setId(dataCollection.id ? dataCollection.id : null);
    }, [dataCollection]);

    const handleImg = () => {
        Alert.alert("Selecione", "Selecione da onde você quer a imagem", [
            {
                text: "Galeria",
                onPress: ()=> pickImgFromGallery(),
                style: "default"
            },
            {
                text: "Camera",
                onPress: ()=> pickImgFromCamera(),
                style: "default"
            },
            {
                text: "Cancelar",
                cancelable: true
            }
        ]);
    }




    const pickImgFromGallery = async () =>{ 
        const options = {
            mediaType: 'photo'
        }
        const result = await launchImageLibrary(options).then((valor)=>{
            setImgSelect(valor.assets[0]);
            alert("Valor do the"+JSON.stringify(valor))
        });
        alert(JSON.stringify( result));
        setImgSelect(result.assets[0]);
    }
    const pickImgFromCamera = async () =>{ 
        const options = {
            mediaType: 'photo'
        }
        const result = await launchCamera(options);
        setImgSelect(result.assets[0]);
    }

    const addCollection = ()=>{
        const docCollection = {
            colecao: colecao,
            descricao: descricao,
            imagem: imagem
        }

        addDoc(dbCollection, docCollection).then((docRef)=>{
            console.log('documento inserido com sucesso ' + docRef.id);
            navigation.navigate('MinhaColecoes');
        }).catch( (erro) =>{
            console.log("erro " + erro);
        })
    }

    const atualizarCollection = ()=>{
        const docCollection = {
            colecao: colecao,
            descricao: descricao,
            imagem: imagem
        }
        updateDoc(doc(db, "colecao", id), docCollection).then(()=>{
            navigation.navigate('MinhaColecoes');
        })
    }


    return(

            <View  style={StyleDefault.container}>
                <Text style={styles.text} >Preencha os dados referente à coleção a ser criada</Text>
                
                
                <View>

                    <Stack  spacing={2} style={{ margin: 16 }}>
                        <TextInput onChangeText={setColecao} style={styles.inputColec} value={colecao} label="Coleção"  />
                        <TextInput onChangeText={setDescricao} style={styles.inputDesc} value={descricao} label="Descrição"  />
                        <View style={styles.inputImage}>
                            <Text>Imagen</Text>
                            <TextI onChangeText={setImagem} style={styles.inputDesc} value={imagem}  label="Imagem"  />
                            
                            
                            <TouchableOpacity onPress={()=>{}}>
                                <Image style={styles.img} source={{uri : imagem}} />
                            </TouchableOpacity>
                        </View>
                       
                        
                        {id?
                            <Button 
                            onPress={()=>atualizarCollection()}
                            style={StyleDefault.buttonDefault, styles.button} 
                            title="ATUALIZAR" 
                            color={buttonColorDefault}
                            />
                            :
                            <Button 
                            onPress={()=>addCollection()}
                            style={StyleDefault.buttonDefault, styles.button} 
                            title="CADASTRAR" 
                            color={buttonColorDefault}
                            />
                        }
                        
                    </Stack>
                </View>



                <Button 
                    style={StyleDefault.buttonDefault, styles.buttonB} 
                    onPress={() => {navigation.goBack()}} 
                    title="CANCELAR" 
                    variant="outlined"
                    color={styles.buttonCollor}
                /> 
            </View>
    );
}


const styles= StyleSheet.create({
    buttonCollor: '#ffffff',
    button:{
        width: 300,
        minWidth: '70%',
        marginTop: 10
        
    },
    buttonB:{
        width: 300,
        minWidth: '70%',
        bottom: 10,
        position: 'absolute'
        
    },    
    inputDesc:{
        marginTop: 7,
        width: 300,
    },
    inputColec:{
        marginTop: 7,
        width: 300,
    },
    inputImage:{
        marginTop: 7,
        width: 300,
        height: 200,
        backgroundColor: 'white',
        borderTopEndRadius: 3,
        borderTopLeftRadius: 3,
        padding: 10
    },
    img:{
        width: 100,
        height: 100,
        alignSelf: 'center'
    },
    text: {
        width: 300,
        textAlign: 'center',
        color: 'white',
        top: -70,
        fontSize: 18
    }
})


export default NovaColecao;