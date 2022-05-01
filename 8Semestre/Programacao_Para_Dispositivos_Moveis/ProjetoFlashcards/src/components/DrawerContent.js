import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import Profile from "./Profile";
import {UserImage} from '../assets/images'

export default function DrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <Profile imagem={UserImage} texto="Marcelo dos Santos" />

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  }

