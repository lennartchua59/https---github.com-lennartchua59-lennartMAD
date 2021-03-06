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

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/Feather";
import Icon4 from 'react-native-vector-icons/FontAwesome5';
import Icon5 from 'react-native-vector-icons/FontAwesome';

import {
	useFonts,
		Roboto_400Regular
	} from "@expo-google-fonts/dev";
 
 
 
 const App = () => {
   return (
	 <View style={styles.container}>
	  
 
	   <Text style={styles.welcome}>ReminDING</Text>
	   
		
     <View style = {styles._rectangle1}>
      <View style={styles._Line8}></View>
	  <Text style={styles.text4}>TODAY</Text>
	  <Text style={styles.subtext4}>3</Text>

	  <Text style={styles.text5}>SCHEDULED</Text>
	  <Text style={styles.subtext5}>0</Text>

      <View style={styles._Line9}></View>
	  <Text style={styles.text6}>PAST</Text>
	  <Text style={styles.subtext6}>0</Text>

	  <Text style={styles.text7}>ALL</Text>
	  <Text style={styles.subtext7}>3</Text>


     </View>
	 {/*Icon list*/}
	 <View style={styles.dropdown}>
	 <View style={styles.navicircle}></View>
	 <View>
		<View style={styles.icondown}>
		<Icon1 name="angle-dobule-down" size={20} color="white"/>	
		</View>
		<View style ={styles.iconbullet}>
		<Icon name="format-list-bulleted" size={22} color="white" />
		</View>
		<View style ={styles.icondate}>
		<Icon1 name="date" size={20} color="white" />
		</View>
		<View style={styles.iconset}>
		<Icon3 name="settings" size={20} color="white"/>	
		</View>
		<View style ={styles.iconlist}>
		<Icon2 name="list-alt"size={22} color="white"/>
		</View>
		
		
	</View>

	 </View>
	



		
    <View style = {styles._rectangle2}>
      
			
			<View style={styles._Line1}></View>
      <Text style= {styles.text1}>9:00 am</Text>
      <Text style={styles.subtext1}>Start work</Text>
        
			
      <View style={styles._Line2}></View>
      <Text style= {styles.text2}>12:00 pm</Text>
      <Text style={styles.subtext2}>Project due</Text>
      
			
      <View style={styles._Line3}></View>
      <Text style= {styles.text3}>2:00 pm</Text>
      <Text style={styles.subtext3}>Meeting</Text>
      
      <View style={styles._Line4}></View>
      <View style={styles._Line5}></View>
      <View style={styles._Line6}></View>
      <View style={styles._Line7}></View>

	  <View style={styles.toggle1}>
		  <Icon5 name="toggle-on" size={30} color="black"/>
	  </View>
	  <View style={styles.toggle2}>
		  <Icon5 name="toggle-on" size={30} color="black"/>
	  </View>
	  <View style={styles.toggle3}>
		  <Icon5 name="toggle-on" size={30} color="black"/>
	  </View>
	  <View style={styles.toggle4}>
		  <Icon5 name="toggle-on" size={30} color="black"/>
	  </View>	 
	  <View style={styles.toggle5}>
		  <Icon5 name="toggle-on" size={30} color="black"/>
	  </View>	
	  <View style={styles.toggle6}>
		  <Icon5 name="toggle-on" size={30} color="black"/>
	  </View>	
	  <View style={styles.toggle7}>
		  <Icon5 name="toggle-on" size={30} color="black"/>
	  </View>	
			
		</View>
		

 {/* navigation*/}
	   
	   
        <View style={styles.footer}>
			
			
		</View>
		<View style={styles._circle1}></View>
		<View style={styles._circle2}></View>
		<View style={styles._circle3}></View>
		<Text style={styles._plus}>+</Text>
		<View style={styles._circle4}></View>
		<View style={styles._circle5}></View>


		<SafeAreaView>
			<View style ={styles.iconwork1}>
			<Icon2 name="work" size={25} color="white"  />
			</View>
			<View style ={styles.icongym1}>
			<Icon4 name="dumbbell" size={20} color="white" />
			</View>
			<View style ={styles.iconnotes1}>
			<Icon name="note-text" size={25} color="white" />
			</View>
			<View style={styles.iconbook1}>
			<Icon3 name="book-open" size={22} color="white" />
			</View>
		</SafeAreaView>
    
    
    

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
  
   

   _rectangle1: {
    position: "absolute",
		width: 300,
		height: 150,
		borderRadius: 20,
		opacity: 1,
		left:50,
		top: 45,
		bottom: "auto",
		backgroundColor: "rgba(41, 37, 37, 1)",

   },
   _rectangle2:{
	  position: "absolute",
		width: 300,
		height:390,
		borderRadius: 20,
		opacity: 1,
		left: 50,
		top: 230,
		bottom: "auto",
		backgroundColor: "rgba(41, 37, 37, 1)",
	
   },
   

	_Line1: {
    
    height :3,
    width: 260,
		left: 20,
		top: 50,
    backgroundColor: 'grey'
	},
	_Line2: {
   
    height :3,
    width: 258,
		left: 22,
		top: 92,
    backgroundColor: 'grey'

	},
	_Line3: {
    
    height :3,
    width: 258,
		left: 22,
		top: 130,
    backgroundColor: 'grey'
		

	},
	_Line4:{ 
    
    height :3,
    width: 258,
		left: 22,
		top: 175,
    backgroundColor: 'grey'
		
	},
	_Line5: {
   
    height :2,
    width: 260,
		left: 22,
		top:217,
    backgroundColor: 'grey'
		
	},
  _Line6: {
    
    height :2,
    width: 260,
		left: 22,
		top:259,
    backgroundColor: 'grey'

  },
  _Line7 : {
    height :3,
    width: 260,
		left: 22,
		top:300,
    backgroundColor: 'grey'

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
		width: 50,
		height: 50,
		borderRadius:  1000,
		backgroundColor: "rgba(98, 90, 90, 1)",
		left: 45,
		bottom: 5,
		
		

	},
	_circle2: {
		position: "absolute",
		width: 50,
		height: 50,
		borderRadius:  1000,
		backgroundColor: "rgba(98, 90, 90, 1)",
		left: 95,
		bottom: 45,
	},

	_circle3: {
		position: "absolute",
		width: 70,
		height: 70,
		borderRadius:  1000,
		backgroundColor: "rgba(98, 90, 90, 1)",
		left: 155,
		bottom: 45,

	},
	_circle4: {
		position: "absolute",
		width: 50,
		height: 50,
		borderRadius:  1000,
		backgroundColor: "rgba(98, 90, 90, 1)",
		left: 292,
		bottom: 5,

	},
	_circle5: {
		position: "absolute",
		width: 50,
		height: 50,
		borderRadius:  1000,
		backgroundColor: "rgba(98, 90, 90, 1)",
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
  text1 : {
    top: 0,
    left: 25,
	 flexDirection: 'row',
	 position: 'absolute',
	 fontSize: 27,
	 fontWeight : 'bold',
   color: 'white',

	 
	 
	 
	 
  },
  subtext1: { 
    top: 30,
    left: 25,
	 flexDirection: 'row',
	 position: 'absolute',
	 fontSize: 15,
   color: 'white',
  },

  text2: {
    top: 47,
    left: 25,
    flexDirection: 'row',
    position: 'absolute',
    fontSize: 27,
    fontWeight : 'bold',
    color: 'white',

  },

  subtext2 : { 
    top: 75,
    left: 25,
	 flexDirection: 'row',
	 position: 'absolute',
	 fontSize: 15,
   color: 'white',
  },
  text3 : {
    top: 91,
    left: 25,
    flexDirection: 'row',
    position: 'absolute',
    fontSize: 27,
    fontWeight : 'bold',
    color: 'white',

  },
  subtext3: {
    top: 117,
    left: 25,
	 flexDirection: 'row',
	 position: 'absolute',
	 fontSize: 15,
   color: 'white',

  },
  _Line8: {
    height :2,
    width: 250,
		left: 25,
		top:75,
    backgroundColor: 'grey'


    
  },
  _Line9: {
    height :100,
    width: 2,
		left:150,
		top:27,
    backgroundColor: 'grey'


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
	
  },
  text4: {
	top: 15,
    left: 25,
	 flexDirection: 'row',
	 position: 'absolute',
	 fontSize: 15,
   color: 'white',

  },
  subtext4: {
	top: 40,
    left: 40,
	 flexDirection: 'row',
	 position: 'absolute',
	 fontSize: 15,
   color: 'white',

  },
  text5: {
	top: 15,
    left: 200,
	flexDirection: 'row',
	position: 'absolute',
	fontSize: 15,
    color: 'white',
  },
	
  subtext5 : {
	top: 40,
    left: 250,
	flexDirection: 'row',
	position: 'absolute',
	fontSize: 15,
    color: 'white',

  },
  text6: {
	top: 80,
    left: 30,
	flexDirection: 'row',
	position: 'absolute',
	fontSize: 15,
    color: 'white',

  },
  subtext6: {
	top: 100,
    left: 35,
	flexDirection: 'row',
	position: 'absolute',
	fontSize: 15,
    color: 'white',

  },

  text7: {
	top: 80,
    left: 240,
	flexDirection: 'row',
	position: 'absolute',
	fontSize: 15,
    color: 'white',

  },

  subtext7: {
	top: 100,
    left: 255,
	flexDirection: 'row',
	position: 'absolute',
	fontSize: 15,
    color: 'white',

  },
  icondown: {
	top :10,
	left:5.5
  },
  iconbullet:{
	  top: 15,
	  left:4

  },
  icondate:{
	top:20,
	left:5
  },
  iconset:{
	  top:26,
	  left:5

  },
  iconlist:{
	  top:31,
	  left:4

  },
  iconwork1:{
	position: "absolute",
	left: 56,
	top:606,
	transform: [
		{rotate: "-45deg"}
	]
},
icongym1: {
	position: "absolute",
	left: 107,
	top:570,
	transform: [
		{rotate: "-30deg"}
	]

},
iconnotes1: {
	position: "absolute",
	left: 256,
	top:567,
	transform: [
		{rotate: "30deg"}
	]

},
iconbook1: {
	position: "absolute",
	left: 305,
	top: 608,
	transform: [
		{rotate: "45deg"}
	]
},
toggle1 :{
	position: "absolute",
	top: 18,
	left: 245
},
toggle2 :{
	position: "absolute",
	top: 60,
	left: 245
},
toggle3 : {
	position: "absolute",
	top: 102,
	left: 245
}, 
toggle4: {
	position: "absolute",
	top: 145,
	left: 245
},
toggle5: {
	position: "absolute",
	top: 192,
	left: 245
},
toggle6 : {
	position: "absolute",
	top: 237,
	left: 245
},
toggle7:{ 
	position: "absolute",
	top: 281,
	left: 245
},
navicircle: {
	position: "absolute",
	width: 27,
	height: 27,
	borderRadius:1000,
	left: 1.5,
	top:113,
	backgroundColor: "grey",
	opacity: 0.5
	
	
	
}

  
 });
 
 export default App;
  