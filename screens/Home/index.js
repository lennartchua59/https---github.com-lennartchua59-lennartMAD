/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 
 * Practical 3 - Stylesheet
 */

 import React, { Component } from 'react';
 import {
   Platform,
   StyleSheet,
   TextInput,
   Image,
   Button,
   Text,
   TouchableOpacity,
   View,
   SafeAreaView
 } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import { Searchbar } from 'react-native-paper';
import {
	useFonts,
		Roboto_400Regular
	} from "@expo-google-fonts/dev";
 
 
 
 const App = (props) => {
   return (
	 <View style={styles.container}>
		 
	

		 <TouchableOpacity   onPress={()=>{props.navigation.navigate("Cal")}}>
		<Text style={styles.welcome}>ReminDING</Text>
		</TouchableOpacity>
	  
	   {/* Search */}
		<View>
		<Searchbar style={styles.searchbar}  ></Searchbar>

		</View>
		<Text style={styles._category}>CATEGORY</Text>
		<View style={styles._Line1}></View>
		
		
		
			
		<View style = {styles._rectangle}>
			<Text style={styles._txt1}>WORK</Text>
			
			<View style={styles._Line2}></View>
			<Text style={styles._txt2}>GYM</Text>
      <View style={styles._Line3}></View>
			<Text style={styles._txt3}>NOTES</Text>
      <View style={styles._Line4}></View>
			<Text style={styles._txt4}>STUDIES</Text>
      <View style={styles._Line5}></View>
      <View style={styles._Line6}></View>
		</View>


		{/*icons list*/}
		<View>
			<View style ={styles.iconwork}>
			<Icon name="work" size={20} color="white" />
			</View>
			<View style ={styles.icongym}>
			<Icon1 name="dumbbell" size={20} color="white" />
			</View>
			<View style ={styles.iconnotes}>
			<Icon3 name="note-text" size={22} color="white" />
			</View>
			<View style={styles.iconbook}>
			<Icon2 name="book-open" size={22} color="white" />
			</View>
			
			

		</View>
		
		


	   
	   {/* navigation*/}
	   
	   
        <View style={styles.footer}>
			
			
		</View>
		<TouchableOpacity style={styles._circle1} onPress={()=>{props.navigation.navigate("Work")}}>
		<View style ={styles.iconwork1}>
			<Icon name="work" size={35} color="white"  />
			</View>
		</TouchableOpacity>
		
		<TouchableOpacity style={styles._circle2} onPress={()=>{props.navigation.navigate("Gym")}}>
		<View style ={styles.icongym1}>
			<Icon1 name="dumbbell" size={35} color="white" />
			</View>
		</TouchableOpacity>

		<TouchableOpacity style={styles._circle4} onPress={()=>{props.navigation.navigate("Studies")}}>
		<View style ={styles.iconnotes1}>
			<Icon3 name="note-text" size={35} color="white" />
			</View>
		</TouchableOpacity>
			
		<TouchableOpacity style={styles._circle5} onPress={()=>{props.navigation.navigate("Studies")}}>
		<View style={styles.iconbook1}>
			<Icon2 name="book-open" size={35} color="white" />
			</View>
		</TouchableOpacity>
		
		
		

	
			
			
			

		

		
    
    
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
	 top: -100,
	 flexDirection: 'row',
	 position: 'absolute',
	 fontSize: 30,
	 fontWeight : 'bold',
	 textAlign: 'center',
	 width: '100%',
	 height: 45,
	 color: 'white',
   },
  
   
   _rectangle:{
	position: "absolute",
		width: 330,
		height: 280,
		borderRadius: 32,
		opacity: 1,
		left: 40,
		top: 160,
		bottom: "auto",
		backgroundColor: "rgba(41, 37, 37, 1)",
	
   },
   searchWrapper:{
	   
	   
	   position: "absolute",
		width: 330,
		height: 30,
		borderRadius: 20,
		opacity: 1,
		left: 36,
		top: -50,
		bottom: "auto",
		backgroundColor: "rgba(41, 37, 37, 1)",
		
		
	   
	
	   
		
   },
   searchText: {
	   fontFamily: 'Montserrat-Semibold',
	   fontSize: 18,
	   top:2, 
	   left: 40,
	   marginBottom: 7,
	   color: 'white',
	   opacity: 0.5

	},
	_category: {
		flexDirection: 'row',
		position: "absolute",
		left: 20,
		top: 100,
		fontSize: 16,
		color: "white",
	},
	searchbar: {
		position: 'absolute',
		top:-60,
		left: 41,
		borderRadius: 30,
		backgroundColor: "rgba(98, 90, 90, 1)",
		height: 38,
		width: '80%',
		
	   },
		
		
		
		
		
		

	_Line1: {
		height :1,
    width:50,
		left: 35,
		top: 23,
    backgroundColor: 'grey'
	
	
		
	},
	_Line2: {
    
    height :3,
    width: 260,
		left: 30,
		top: 50,
    backgroundColor: 'grey'
	},
	_Line3: {
   
    height :2,
    width: 260,
		left: 31,
		top: 88,
    backgroundColor: 'grey'

	},
	_Line4: {
    
    height :2,
    width: 260,
		left: 31,
		top: 130,
    backgroundColor: 'grey'
		

	},
	_Line5:{ 
    
    height :2,
    width: 260,
		left: 31,
		top: 175,
    backgroundColor: 'grey'
		
	},
	_Line6: {
   
    height :2,
    width: 260,
		left: 31,
		top:217,
    backgroundColor: 'grey'
		
	},
	_txt1: {
		flexDirection: 'row',
		position: "absolute",
		left: 70,
		top: 18,
		bottom: "auto",
		fontSize: 16,
		color: "white",
	},
	_txt2: {
		flexDirection: 'row',
		position: "absolute",
		left: 75,
		top: 60,
		bottom: "auto",
		fontSize: 16,
		color: "white",

	},
	_txt3: {
		flexDirection: 'row',
		position: "absolute",
		left: 75,
		top: 105,
		bottom: "auto",
		fontSize: 16,
		color: "white",
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
	footer: {
		position: "absolute",
		width: 300,
		height: 280,
		borderRadius:  1000,
		backgroundColor: "rgba(74, 69, 69, 1)",
		left: 49,
		bottom: -195,
		opacity: 0.5
	},
	_circle1 : {
		position: "absolute",
		width: 70,
		height: 70,
		borderRadius:  1000,
		backgroundColor: "rgba(98, 90, 90, 1)",
		left: 45,
		bottom: 5,
		zIndex: 10
		
		

	},
	_circle2: {
		position: "absolute",
		width: 70,
		height: 70,
		borderRadius:  1000,
		backgroundColor: "rgba(98, 90, 90, 1)",
		left: 120,
		bottom: 45,
	},


	_circle4: {
		position: "absolute",
		width: 70,
		height: 70,
		borderRadius:  1000,
		backgroundColor: "rgba(98, 90, 90, 1)",
		left: 279,
		bottom: 6,

	},
	_circle5: {
		position: "absolute",
		width: 70,
		height: 70,
		borderRadius:  1000,
		backgroundColor: "rgba(98, 90, 90, 1)",
		left: 200,
		bottom: 45,

	},

	iconsearch:{
		left: 300,
		top: -24
	},
	iconwork: {
		left: 75,
		top: 79
	},
	icongym: {
		left: 75,
		top: 100
	},
	iconnotes: {
		left: 78,
		top: 120
	},
	iconbook: {
		left: 78,
		top: 143
	},
	iconedit: {
		left: 350,
		top: -90
	},
	iconwork1:{
		position: "absolute",
		left: 14,
		top:15,
		transform: [
			{rotate: "-45deg"}
		]
	},
	icongym1: {
		position: "absolute",
		left: 12,
		top:14,
		transform: [
			{rotate: "-30deg"}
		]

	},
	
	iconbook1: {
		position: "absolute",
		left: 16,
		top: 16,
		transform: [
			{rotate: "30deg"}
		]
	},
    iconnotes1: {
		position: "absolute",
		left: 18,
		top:15,
		transform: [
			{rotate: "45deg"}
		]

	},
 });
 
 export default App;
 