import React from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';

const FlashCardMini = (props, navigation) => {
    const {onPress,frente, verso } = props;
    return(


            <View style={styles.container}>
                <View onPress={onPress} style={styles.card}>
                    <Text style={styles.header}>Frente</Text>
                    <Text style={styles.text}>{frente}</Text>

                </View>
                <View onPress={onPress} style={styles.card}>
                    <Text style={styles.header}>Verso</Text>
                    <Text style={styles.text}>{verso}</Text>
                </View>
                <View style={styles.option}>
                    <TouchableOpacity >
                        <Icon style={styles.icon} name="rocket" size={20} color="#4472C4"></Icon>
                        {/* <Icon name="rocket" size={30} color="#4F8EF7" /> */}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        Alert.alert(
                            "",
                            "Você tem certeza que deseja excluir essa coleção?",
                            [{
                                text: 'Não',
                                    onPress: () => {}
                                },{
                                text: 'Sim',
                                onPress: () =>{}
                            }]
                        )
                    }}>
                        <Icon style={styles.icon} name="trash" size={20} color="red"></Icon>
                    </TouchableOpacity>
                </View>
            </View>



    );
}

const styles=StyleSheet.create({
    icon:{
        margin: 6
    },
    container: {
        borderRadius: 13,
        width: 330,
        maxWidth: '100%',
        height: 80,
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: "center",
        padding: 10,
        justifyContent: "space-around"
        
    },
    card: {
        margin: 5
    },
    option: {
        flexDirection: 'row'
    },
    image:{
        margin: 15
    },
    text: {
        color: '#27ACA7',
        fontFamily: 'Tahoma',
        fontSize: 18,
        margin: 2,
        marginTop: 8
    }
})

export default FlashCardMini;