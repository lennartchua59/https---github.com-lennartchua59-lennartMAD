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


import Icon1 from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon3 from "react-native-vector-icons/FontAwesome5";



import {
	useFonts,
		Roboto_400Regular
	} from "@expo-google-fonts/dev";
 
 
 
 const App = () => {
   return (
	 <View style={styles.container}>
	  
		{/* app name */}
	   <Text style={styles.welcome}>ReminDING</Text>
	   
	   {/*body*/}

	    {/* Search */}
		<View>
			<View style={styles.searchWrapper}>
				<Text style={styles.searchText}>Search</Text>
				<View style={styles.iconsearch}>
				<Icon1 name="search" size={15} color="white" /></View>
				

			</View>

		</View>
		
		



		{/*BODY */}
		<View style = {styles.body}>
		<Text style={styles._txt1}>WORK</Text>
			
			<View style={styles._Line2}></View>
			<Text style={styles._txt2}>GYM</Text>
      <View style={styles._Line3}></View>
			<Text style={styles._txt3}>NOTES</Text>
      <View style={styles._Line4}></View>
			<Text style={styles._txt4}>STUDIES</Text>
      <View style={styles._Line5}></View>
      <View style={styles._Line6}></View>
			
			{/* icons*/}
		<View style={styles.icondelete1}>
			<Icon2 name="delete-forever-outline" size={25} color="red" />
		</View>
		<View style={styles.grip1}>
			<Icon3 name="grip-lines" size={20} color="grey" />
		</View>
		<View style={styles.icondelete2}>
			<Icon2 name="delete-forever-outline" size={25} color="red" />
		</View>
		<View style={styles.grip2}>
			<Icon3 name="grip-lines" size={20} color="grey" />
		</View>
		<View style={styles.icondelete3}>
			<Icon2 name="delete-forever-outline" size={25} color="red" />
		</View>
		<View style={styles.grip3}>
			<Icon3 name="grip-lines" size={20} color="grey" />
		</View>
		<View style={styles.icondelete4}>
			<Icon2 name="delete-forever-outline" size={25} color="red" />
		</View>
		<View style={styles.grip4}>
			<Icon3 name="grip-lines" size={20} color="grey" />
		</View>


		</View>
		
	
	


		
		
		
		

		
	     



		
		
	
	   
	   
	   
        <View style={styles.footer}>
		<Text style={styles.footertext}>DONE</Text>
		</View>
		
		
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
	 fontWeight : 'bold',
	 textAlign: 'center',
	 width: '100%',
	 height: 45,
	 color: 'white',
   },
   
   
   searchWrapper:{
	position: "absolute",
	 width: 320,
	 height: 30,
	 borderRadius: 20,
	 opacity: 1,
	 left: 44,
	 top: -50,
	 bottom: "auto",
	 backgroundColor: "rgba(41, 37, 37, 1)",
	 
	
	
 
	
	 
},
searchText: {
	fontFamily: 'Montserrat-Semibold',
	fontSize: 18,
	top:2, 
	left: 35,
	marginBottom: 7,
	color: 'white',
	opacity: 0.5

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
	

	
	iconsearch:{
		left: 295,
		top: -24
	},

	body: {
		position: "absolute",
		width: 330,
		height: 370,
		borderRadius: 32,
		opacity: 1,
		left: 35,
		top: 160,
		bottom: "auto",
		backgroundColor: "rgba(41, 37, 37, 1)",
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
		top: 100,
		bottom: "auto",
		fontSize: 16,
		color: "white",
	},
	_txt4: {
		flexDirection: 'row',
		position: "absolute",
		left: 75,
		top: 143,
		bottom: "auto",
		fontSize: 16,
		color: "white",
	},
	_Line2: {
		position:'absolute',
		height :3,
		width: 260,
			left: 30,
			top: 50,
		backgroundColor: 'grey'
		},
		_Line3: {
		position:'absolute',
		height :2,
		width: 260,
			left: 31,
			top: 88,
		backgroundColor: 'grey'
	
		},
		_Line4: {
		position:'absolute',
		height :2,
		width: 260,
			left: 31,
			top: 130,
		backgroundColor: 'grey'
			
	
		},
		_Line5:{ 
		position:'absolute',
		height :2,
		width: 260,
			left: 31,
			top: 175,
		backgroundColor: 'grey'
			
		},
		_Line6: {
	   position:'absolute',
		height :2,
		width: 260,
			left: 31,
			top:217,
		backgroundColor: 'grey'
			
		},
		icondelete1: {
			left: 30,
			top: 18
		},
		icondelete2: {
			left: 30,
			top: 10
		},
		icondelete3: {
			left: 30,
			top: 3
		}, 
		icondelete4: {
			left: 30,
			top: -2
		}, 
		grip1: {
			left: 250,
			top: -7
		},
		grip2: {
			left: 250,
			top: -13
		},
		grip3: {
			left: 250,
			top:-18
		},
		grip4: {
			top: -20,
			left:250
		},

		footertext: {
		position: "absolute",
		left: 120,
		top: 30,
		fontSize: 20,
		color: "white",
		fontWeight: "bold"
		}


	

		
  });
 
 export default App;
  