/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 
 * My MAD App-Appearance Page
 */

 import React, { Component } from 'react';
 import {
 
     StyleSheet,
 
     Text,
 
     View,
	 TouchableOpacity
 } from 'react-native';
 import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 import Icon1 from 'react-native-vector-icons/Fontisto';
 import Icon2 from "react-native-vector-icons/MaterialIcons";
 import Icon3 from "react-native-vector-icons/Feather";
 import Icon4 from 'react-native-vector-icons/FontAwesome5';
 import Icon6 from 'react-native-vector-icons/FontAwesome';
 
 import ReactDOM from "react-dom";
   import { BrowserRouter, Route, Switch } from "react-router-dom";
 
 
   export default function App(props) {
     return (
         <View style={styles.container}>
 
             <Text style={styles.welcome}>ReminDING</Text>
			 <TouchableOpacity
                    onPress={() => props.navigation.navigate('Wset')}
                    
					
                ><View style={styles.iconarrow2}><Icon2 name="keyboard-arrow-left" size={30} color="black" />
				</View>
                </TouchableOpacity>
             
                 
            
 
 <Text style={styles._txt2}>Appearance</Text>
 
 
             <View style={styles._rectangle}>
                 <Text style={styles._txt1}>Light</Text>
                 <TouchableOpacity
                    onPress={() => props.navigation.navigate('Set')}
                    
					
                ><View style={styles.iconcheck1}>
                <Icon name="checkbox-blank-circle-outline" size={40} color="black" />
            </View>
                </TouchableOpacity>
             
                
                 <View style={styles.iconcheck2}>
                     <Icon name="checkbox-marked-circle" size={40} color="black" />
                 </View>
                 <Text style={styles._txt3}>Dark</Text>
                 
             </View>
             
             
 
        
 
 
 
            
             
 
 
 
 
         </View>
 
 
 
 
     );
 
	 }
 
 const styles = StyleSheet.create({
     container: {
         flex: 1,
         paddingTop: 100,
         backgroundColor: 'white',
     },
     welcome: {
         top: 0,
         flexDirection: 'row',
         position: 'absolute',
         fontSize: 30,
         fontWeight: 'bold',
         textAlign: 'center',
         width: '100%',
         height: 45,
         color: 'black',
     },
     footer: {
         width: '100%',
         alignItems: 'center',
         justifyContent: 'center',
         flexDirection: 'row',
         position: 'absolute',
         bottom: 0
     },
     _rectangle: {
         position: "absolute",
         width: 330,
         height: 130,
         borderRadius: 40,
         opacity: 1,
         left: 40,
         top: 110,
         bottom: "auto",
         backgroundColor: "rgba(74, 69, 69, 1)",
     },
     _txt1: {
         flexDirection: 'row',
         position: "absolute",
         left: 54,
         top: 20,
         bottom: "auto",
         fontSize: 32,
         color: "black",
         fontWeight:"bold",
     },
     _txt2: {
         flexDirection: 'row',
         position: "absolute",
         left: 45,
         top: 80,
         bottom: "auto",
         fontSize: 16,
         color: "black",
         fontWeight:"300",
     },
     _txt3: {
        flexDirection: 'row',
        position: "absolute",
        right: 54,
        top: 20,
        bottom: "auto",
        fontSize: 32,
        color: "black",
        fontWeight:"bold",
     },
     _txt4: {
         flexDirection: 'row',
         position: "absolute",
         left: 75,
         top: 150,
         bottom: "auto",
         fontSize: 16,
         color: "white",
     },
     iconarrow2 :{
        position: "absolute",
        left: 10,
        top: -60,
     },
     iconcheck1:{
        position: "absolute",
        left: 74,
        top: 80,
     },
     iconcheck2:{
        position: "absolute",
        right: 64,
        top: 80,
     },
    });
 
