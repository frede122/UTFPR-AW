import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import Profile from "./Profile";
import {UserImage} from '../assets/images'
import { TouchableOpacity } from "react-native-gesture-handler";

export default function DrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <Profile imagem={UserImage} texto="Marcelo dos Santos" />
        <TouchableOpacity  onPress={()=>{props.navigation.navigate('MinhaColecoes')}}>
          <Text style={styles.text}>Minhas Coleções</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>{props.navigation.navigate('Login')}}>
          <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
      </DrawerContentScrollView>
    );
  }

  const styles = StyleSheet.create({

    text: {
      color: 'white',
      fontSize: 20,
      margin: 10
    }
  })

