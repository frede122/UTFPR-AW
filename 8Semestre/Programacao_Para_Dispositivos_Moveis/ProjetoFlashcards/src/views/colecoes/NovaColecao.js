import React, { Component, useState, useEffect  } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import {launchCamera, launchImageLibrary, ImageLibraryOptions} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';

import { addDoc, collection, initializeFirestore  } from 'firebase/firestore';
import { ref, uploadString, uploadBytesResumable,uploadBytes, getDownloadURL} from "firebase/storage";

import {app, storage} from '../../config/Firebase';
import { ScrollView } from "react-native-gesture-handler";
import { backgroundDefault, buttonColorDefault } from "../../assets/styles/Color";
import { Stack, TextInput, Button,} from "@react-native-material/core";
import FlashCard from "../../components/colecoes/FlashCard";
import {StyleDefault} from '../../assets/styles/Style'
import { TextInputAffix } from "react-native-paper/lib/typescript/components/TextInput/Adornment/TextInputAffix";
import {BolaImage} from '../../assets/images';
import { TextInput as TextI } from "react-native-gesture-handler";

const NovaColecao = ({route, navigation}) => {
    const  text  = route.params ? route.params.text : 'ss' ; 
    const [imagemSelect, setImgSelect] = useState('');
    const [data, setData] = useState('');
    const [colecao, setColecao] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState('');



    const reader = new FileReader(); 
    

    const db = initializeFirestore(app, {experimentalForceLongPolling: true});
    const dbCollection  = collection(db, "colecao");


    useEffect( () => {
        
    })

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
        // const options = {
        //     mediaType: 'photo'
        // }
        // const result = await launchImageLibrary(options).then((valor)=>{
        //     setImgSelect(valor.assets[0]);
        //     alert("Valor do the"+JSON.stringify(valor))
        // });
        // alert(JSON.stringify( result));
        // setImgSelect(result.assets[0]);

        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: false
          }).then(image => {
            let pathParts = image.path.split('/');
            

            
            alert("vai agora"+ JSON.stringify(data));

            const storageRef = ref(storage, 'colecoes/' +"frede "+pathParts[pathParts.length - 1]);
            uploadTask = uploadBytes(storageRef, image);
          });
    }
    const pickImgFromCamera = async () =>{ 
        const options = {
            mediaType: 'photo'
        }
        const result = await launchCamera(options);
        setImgSelect(result.assets[0]);
    }

//   async function uploadImage() {
//     const data = new FormData();



//     await Axios.post('http://localhost:3333/files', data);
//   }

    const addCollection = ()=>{
        const docCollection = {
            colecao: colecao,
            descricao: descricao,
            imagem: imagem
        }

        addDoc(dbCollection, docCollection).then((docRef)=>{
            console.log('documento inserido com sucesso ' + docRef.id);
        }).catch( (erro) =>{
            console.log("erro " + erro);
        })
    }

    const uploadImgCollection = () =>{

    }

    const handleSubmit = () => {
        // e.preventDefault()
        // const file = e.target[0]?.files[0]
    
        // if (!file) return;
        var data = new FormData();
        data.append(imagemSelect.fileName, {uri : imagemSelect.uri}, imagemSelect.fileName);

        const storageRef = ref(storage, 'colecoes/' +"frede "+imagemSelect.fileName+".txt");
        const metadata = {
            contentType: 'image/jpeg',
        };

          
          alert(JSON.stringify( imagemSelect))

        // console.log("reader "+ JSON.stringify(reader))
        // const uploadTask = uploadBytes(storageRef, data);
        const uploadTask = uploadString(storageRef,imagemSelect.uri, 'base64').then((snapshot) => {
            alert('Uploaded a base64 string!');
          });

    
        
      }



    return(

            <View  style={StyleDefault.container}>
                <Text style={styles.text} >Preencha os dados referente à coleção a ser criada</Text>
                
                
                <View>

                    <Stack  spacing={2} style={{ margin: 16 }}>
                        <TextInput onChangeText={setColecao} style={styles.inputColec} label="Coleção"  />
                        <TextInput onChangeText={setDescricao} style={styles.inputDesc}  label="Descrição"  />
                        <View style={styles.inputImage}>
                            <Text>Imagen</Text>
                            <TextI onChangeText={setImagem} style={styles.inputDesc}  label="Imagem"  />
                            
                            
                            <TouchableOpacity onPress={()=>{}}>
                                <Image style={styles.img} source={{uri : imagem}} />
                            </TouchableOpacity>
                        </View>
                       
                        

                        <Button 
                            onPress={()=>addCollection()}
                            style={StyleDefault.buttonDefault, styles.button} 
                            title="CADASTRAR" 
                            color={buttonColorDefault}
                        />
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