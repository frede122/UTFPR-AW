import React, { useEffect, useState} from "react";
import { View, StyleSheet } from "react-native";
import CardColecao from "../../components/colecoes/CardColecao";
import ButtonAdd from '../../components/utils/ButtonAdd'
import { FlatList} from "react-native-gesture-handler";
import { query, collection, initializeFirestore, onSnapshot } from "firebase/firestore";
import {app} from '../../config/Firebase';


const MinhasColecoes = ({props, navigation}) => {

    const db = initializeFirestore(app, {experimentalForceLongPolling: true});
    const dbCollection  = collection(db, "colecao");

    const [data, setData] = useState('');

    useEffect( () => {
        const q = query(dbCollection);

        const unsubscribe = onSnapshot(q, (snapshot)=>{
            const colecoes = [];
            snapshot.forEach( (doc) =>{
                colecoes.push({
                    id: doc.id,
                    ...doc.data()
                })
            });
            setData(colecoes)
        })
    },[])


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
                                imagem={item.imagem} 
                                texto={item.colecao} 
                                id={item.id} 
                                descricao={item.descricao}
                                navigation={navigation} />
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