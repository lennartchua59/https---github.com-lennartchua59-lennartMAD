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
 TextInput,
	 StyleSheet,
 
	 Text,
 
	 View
 } from 'react-native';
 import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 import Icon1 from 'react-native-vector-icons/Fontisto';
 import Icon2 from "react-native-vector-icons/MaterialIcons";
 import Icon3 from "react-native-vector-icons/Feather";
 import Icon4 from 'react-native-vector-icons/FontAwesome5';
 import Icon6 from 'react-native-vector-icons/FontAwesome';
 import ReactDOM from "react-dom";
	import { BrowserRouter, Route, Switch } from "react-router-dom";
	import { Rating } from 'react-native-ratings';
 
	const MYTextInput = (props) => {
	 return (
	   <TextInput
		 {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
		 editable
		 maxLength={40}
		 textAlignVertical ={'top'}
	   />
	 );
   }
   
 const App = () => {
	 const [value, onChangeText] = React.useState('Feedback');
	 return (
		 <View style={styles.container}>
 
			 <Text style={styles.welcome}>ReminDING</Text>
 
			 <View style={styles.iconarrow2}>
				 <Icon2 name="keyboard-arrow-left" size={30} color="white" />
			 </View>
 
 
 
			 <Text style={styles._txt2}>Feedback</Text>
			 <Text style={styles._txt1}>How can we improve?</Text>
 
			 <View style={styles._rectangle}>
			 <MYTextInput
		style={styles.input}
		 multiline
		 autoCapitalize = "characters"
		 numberOfLines={4}
		 maxLength={60}
		 onChangeText={text => onChangeText(text)}
		 value={value}
	   />
 
			 </View>
			 <Text style={styles._txt3}>Leave a rating!</Text>
			 
			 
			 {/* Navigation */}
			 <View style={styles.footer}>
 
 
			 </View>
			 <View style={styles._circle1}></View>
			 <View style={styles._circle2}></View>
			 <View style={styles._circle3}></View>
			 <Text style={styles._plus}>+</Text>
			 <View style={styles._circle4}></View>
			 <View style={styles._circle5}></View>
			 <View>
				 <View style={styles.iconwork1}>
					 <Icon2 name="work" size={25} color="white" />
				 </View>
				 <View style={styles.icongym1}>
					 <Icon4 name="dumbbell" size={20} color="white" />
				 </View>
				 <View style={styles.iconnotes1}>
					 <Icon name="note-text" size={25} color="white" />
				 </View>
				 <View style={styles.iconbook1}>
					 <Icon3 name="book-open" size={22} color="white" />
				 </View>
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
		 fontWeight: 'bold',
		 textAlign: 'center',
		 width: '100%',
		 height: 45,
		 color: 'white',
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
		 borderRadius: 14,
		 opacity: 1,
		 left: 40,
		 top: 138,
		 bottom: "auto",
		 backgroundColor: "rgba(74, 69, 69, 1)",
	 },
	 
	 _txt1: {
		 flexDirection: 'row',
		 position: "absolute",
		 left: 42,
		 top: 110,
		 bottom: "auto",
		 fontSize: 18,
		 color: "white",
		 fontWeight: "bold",
	 },
	 _txt2: {
		 flexDirection: 'row',
		 position: "absolute",
		 left: 144,
		 top: 60,
		 bottom: "auto",
		 fontSize: 24,
		 color: "white",
		 fontWeight: "600",
 
	 },
	 _txt3: {
		 flexDirection: 'row',
		 position: "absolute",
		 left: 44,
		 top: 270,
		 bottom: "auto",
		 fontSize: 18,
		 color: "white",
		 fontWeight: "bold",
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
	 _plus: {
		 flexDirection: 'row',
		 position: "absolute",
		 left: 170,
		 bottom: 40,
		 fontSize: 70,
		 color: "black",
	 },
	 iconwork1: {
		 position: "absolute",
		 left: 56,
		 top: 607,
		 transform: [
			 { rotate: "-45deg" }
		 ]
	 },
	 icongym1: {
		 position: "absolute",
		 left: 107,
		 top: 567,
		 transform: [
			 { rotate: "-30deg" }
		 ]
	 },
	 iconnotes1: {
		 position: "absolute",
		 left: 256,
		 top: 566,
		 transform: [
			 { rotate: "30deg" }
		 ]
 
	 },
	 iconbook1: {
		 position: "absolute",
		 left: 305,
		 top: 610,
		 transform: [
			 { rotate: "45deg" }
		 ]
	 },
	 iconarrow2: {
		 position: "absolute",
		 left: 10,
		 top: 45,
	 },
	 iconcheck1: {
		 position: "absolute",
		 left: 74,
		 top: 80,
	 },
	 iconcheck2: {
		 position: "absolute",
		 right: 64,
		 top: 80,
	 },
 });
 
 export default App;
 