import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Line from "../components/Line";

export default class PersonDetails extends React.Component {
    constructor({route, props}){
        super(props);
        this.route = route;
    }
    
    render(){
        const  {person}  = this.route.params;
        const picUrl = person.picture.large;
        return (
            <View style={styles.container}>
                
                <Image source={{ uri: picUrl  }} style={styles.avatar} />
                <View style={styles.detailContainer}>
                    <Line label="E-mail:" content={person.email} />
                    <Line label="Cidade:" content={person.location.city} />
                    <Line label="Estado:" content={person.location.state} />
                    <Line label="Cel:" content={person.cell} />
                    <Line label="Nacionalidade" content={person.nat} />
                    <Line label="Profissão:" content={person.profissao} />
                </View>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    avatar: {
        aspectRatio: 1,
        borderRadius: 5
    },
    detailContainer: {
        backgroundColor: '#e2f9ff',
        marginTop: 20,
        elevation: 1
    },
    line: {
        flexDirection: 'row',
        marginTop: 20,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: '#c5c5c5'

    },
    cell: {
        paddingLeft: 5,
        fontSize: 16
    }
});