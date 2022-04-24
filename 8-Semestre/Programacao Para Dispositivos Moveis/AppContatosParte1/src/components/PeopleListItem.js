import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import capitalizeFirstLetter from '../utils/capitalizaFirstLetter';


const PeopleListItem = props => {
    const {person, onPressItem} = props;
    const {title, first, last} = person.name;
    const { thumbnail} = person.picture;
    return(
        <TouchableOpacity onPress={ () => {
            onPressItem({person});
        
        }}>
            
            <View style={styles.line}>
                <Image source={{ uri: thumbnail  }} style={styles.avatar} />
                <Text style={styles.lineText}>{
                capitalizeFirstLetter( title ) + " " +
                capitalizeFirstLetter(first) + " " +
                capitalizeFirstLetter( last )
            }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 3,
        flex: 8
    },
    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 3
    }
});

export default PeopleListItem;