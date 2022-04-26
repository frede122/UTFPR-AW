import React from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import PeopleListItem from "./PeopleListItem";

const PeopleList = props => {
    const {people, onPressItem, navigation} = props;

    return(
        <FlatList 
            style={styles.container}
            data={people}
            renderItem={({item}) =>(
                <PeopleListItem 
                    person = {item}
                    onPressItem = {onPressItem} 
                />
            )}
            keyExtractor={ (item, index) => item.name.first+index}    
        />

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    }
});

export default PeopleList;