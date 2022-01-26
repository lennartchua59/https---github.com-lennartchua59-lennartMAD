/**
 * 
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 
 * My MAD APP
 */

 import React, { Component } from 'react';
 import {
     StyleSheet,
     Text,
     View
 } from 'react-native';
 import { Colors } from 'react-native/Libraries/NewAppScreen';
 import {
     useFonts,
     Roboto_400Regular
 } from "@expo-google-fonts/dev";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/Feather";
 
 
 
 const App = () => {
     return (
         <View style={styles.container}>
             <Text style={styles.welcome}>ReminDING</Text>
 
             <View style={styles._rectangle}>
                 <Text style={styles._txt1}> (D E C E M B E R) </Text>
 
             </View>
             <View style={styles._rectangle2}>
                 <Text style={styles._txt2}>M       T       W       T       F       S       S    </Text>
             </View>
             
             <View style={styles._rectangle3}>
                 <Text style={styles._txt3}>01     02     03     04     05     06     07 </Text>
                 
                 <Text style={styles._txt4}>08     09     10     11     12     13     14 </Text>
                 <Text style={styles._txt5}>15     16     17     18     19     20     21 </Text>
                 <Text style={styles._txt6}>22     23     24     25     26     27     28 </Text>
                 <Text style={styles._txt7}>29     30     31     </Text>
                 
             </View>
             <View style={styles._circle6}></View>
             <View style={styles._rectangle4}>
                 <Text style={styles._txt8}> 9:00 AM | </Text>
                 <Text style={styles._txt9}> Start Work </Text>
             </View>
             <View style={styles._rectangle5}>
                 <Text style={styles._txt10}> 2:00 PM | </Text>
                 <Text style={styles._txt11}> Meeting </Text>
             </View>

			 <View style={styles.dropdown}></View>
		<View>
		<View style={styles.icondown}>
		<Icon1 name="angle-dobule-down" size={20} color="white"/>	
		</View>
		<View style ={styles.iconbullet}>
		<Icon name="format-list-bulleted" size={20} color="white" />
		</View>
		<View style ={styles.icondate}>
		<Icon1 name="date" size={20} color="white" />
		</View>
		<View style ={styles.iconlist}>
		<Icon2 name="list-alt"size={20} color="white"/>
		</View>
		<View style={styles.iconset}>
		<Icon3 name="settings" size={20} color="white"/>	
		</View>
		
	</View>

 
 
             {/* Navigation */}
             <View style={styles.footer}>
 
 
             </View>
             <View style={styles._circle1}></View>
             <View style={styles._circle2}></View>
             <View style={styles._circle3}></View>
             <Text style={styles._plus}>+</Text>
             <View style={styles._circle4}></View>
             <View style={styles._circle5}></View>
 
 
 
 
 
         </View>
     );
 
 }
 const styles = StyleSheet.create({
     container: {
         flex: 1,
         paddingTop: 100,
         backgroundColor: 'black',
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
         color: 'white',
     },
 
     footer: {
         position: "absolute",
         width: 300,
         height: 280,
         borderRadius: 1000,
         backgroundColor: "rgba(74, 69, 69, 1)",
         left: 49,
         bottom: -195,
         opacity: 0.5
     },
     _circle1: {
         position: "absolute",
         width: 50,
         height: 50,
         borderRadius: 1000,
         backgroundColor: "grey",
         left: 45,
         bottom: 5,
 
 
 
     },
     _circle2: {
         position: "absolute",
         width: 50,
         height: 50,
         borderRadius: 1000,
         backgroundColor: "grey",
         left: 95,
         bottom: 45,
     },
 
     _circle3: {
         position: "absolute",
         width: 70,
         height: 70,
         borderRadius: 1000,
         backgroundColor: "grey",
         left: 155,
         bottom: 45,
 
     },
     _circle4: {
         position: "absolute",
         width: 50,
         height: 50,
         borderRadius: 1000,
         backgroundColor: "grey",
         left: 292,
         bottom: 5,
 
     },
     _circle5: {
         position: "absolute",
         width: 50,
         height: 50,
         borderRadius: 1000,
         backgroundColor: "grey",
         left: 243,
         bottom: 45,
 
     },
     _circle6: {
         width: 25,
         height: 25,
         borderRadius: 1000,
         backgroundColor: "red",
         left: 154,
		 top: 188,
		 opacity: 0.6
         
     },
     _plus: {
         flexDirection: 'row',
         position: "absolute",
         left: 170,
         bottom: 40,
         fontSize: 70,
         color: "black",
 
 
     },
     _rectangle: {
         position: "absolute",
         width: 330,
         height: 480,
         borderRadius: 20,
         opacity: 1,
         left: 40,
         top: 120,
         bottom: "auto",
         backgroundColor: "black",
 
     },
     _rectangle2: {
         position: "absolute",
         width: 250,
         height: 40,
         borderRadius: 24,
         opacity: 1,
         left: 80,
         top: 220,
         bottom: "auto",
         backgroundColor: "black",
 
     },
     _rectangle3: {
         position: "absolute",
         width: 250,
         height: 140,
         borderRadius: 24,
         opacity: 1,
         left: 80,
         top: 280,
         bottom: "auto",
         backgroundColor: "black",
 
     },
     _rectangle4: {
         position: "absolute",
         width: 250,
         height: 70,
         borderRadius: 14,
         opacity: 1,
         left: 80,
         top: 440,
         bottom: "auto",
         backgroundColor: "rgba(74, 69, 69, 1)",
 
     },
     _rectangle5: {
         position: "absolute",
         width: 250,
         height: 70,
         borderRadius: 14,
         opacity: 1,
         left: 80,
         top: 520,
         bottom: "auto",
         backgroundColor: "rgba(74, 69, 69, 1)",
 
     },
 
     _txt1: {
         flexDirection: 'row',
         position: "absolute",
         left: 45,
         top: 8,
         bottom: "auto",
         fontSize: 28,
         color: "white",
 
     },
     _txt2: {
         flexDirection: 'row',
         position: "absolute",
         top: 9,
         bottom: "auto",
         fontSize: 16,
         color: "white",
 
     },
     _txt3: {
         flexDirection: 'row',
         position: "absolute",
         bottom: 140,
         fontSize: 16,
         fontWeight: "bold",
         color: "white",
     },
     _txt4: {
         flexDirection: 'row',
         position: "absolute",
         bottom: 110,
         fontSize: 16,
         fontWeight: "bold",
         color: "white",
     },
     _txt5: {
         flexDirection: 'row',
         position: "absolute",
         bottom: 80,
         fontSize: 16,
         fontWeight: "bold",
         color: "white",
     },
     _txt6: {
         flexDirection: 'row',
         position: "absolute",
         bottom: 50,
         fontSize: 16,
         fontWeight: "bold",
         color: "white",
     },
     _txt7: {
         flexDirection: 'row',
         position: "absolute",
         bottom: 20,
         fontSize: 16,
         fontWeight: "bold",
         color: "white",
     },
     _txt8: {
         flexDirection: 'row',
         position: "absolute",
         left: 10,
         top: 20,
         bottom: "auto",
         fontSize: 22,
         color: "grey",
     },
     _txt9: {
         flexDirection: 'row',
         position: "absolute",
         right: 30,
         top: 21,
         bottom: "auto",
         fontSize: 20,
         color: "white",
     },
     _txt10: {
         flexDirection: 'row',
         position: "absolute",
         left: 10,
         top: 16,
         bottom: "auto",
         fontSize: 22,
         color: "grey",
 
     },
     _txt11: {
         flexDirection: 'row',
         position: "absolute",
         right: 43,
         top: 15,
         bottom: "auto",
         fontSize: 22,
         color: "white",
 
     },
	 dropdown : {
		position: "absolute",
		width: 30,
		height:150,
		borderRadius: 20,
		opacity: 1,
		left: 9,
		top: 25,
		bottom: "auto",
		backgroundColor: "rgba(41, 37, 37, 1)",
	 }	
 });
 
 export default App;