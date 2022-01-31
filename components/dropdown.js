/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from "react";
 import { Platform, StyleSheet, Text, View, Alert, YellowBox} from "react-native";
 import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
 import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 import Icon1 from 'react-native-vector-icons/Fontisto';
 import Icon2 from "react-native-vector-icons/MaterialIcons";
 import Icon3 from "react-native-vector-icons/Feather";
 import Icon4 from 'react-native-vector-icons/FontAwesome5';
 export default class HomeActivity extends Component {
 
  
 
   render() {
     return (
      <MenuProvider style={styles.menuprov}>
      <Menu style={styles.menuContent} >
        <MenuTrigger style={styles.icondrop}>
		<Icon name="chevron-double-down" size={35} color="white" />
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.optionsstyle}>
          <MenuOption><Icon name="note-text" size={25} color="white"  /></MenuOption>  
          <MenuOption><Icon1 name="date" size={20} color="white" /></MenuOption> 
          <MenuOption><Icon3 name="settings" size={20} color="white"/></MenuOption>
        </MenuOptions>
      </Menu>
	</MenuProvider>
     );
   }
 }
 
 const styles = StyleSheet.create({

   menuContent: {
     color: "grey",
     
     padding: 2,
    
     width: 30
   }
 });
