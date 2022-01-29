/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 
 * Practical 3 - Stylesheet
 */

 import React, {useState} from 'react';
 import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
 import Task from './components/Task';
 

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
 
 export default function App() {
 const [task, setTask] = useState();
 const [taskItems, setTaskItems] = useState([]);

 const handleAddTask = () => {
   Keyboard.dismiss();
   setTaskItems([...taskItems, task])
   setTask(null);
 }

 const completeTask = (index) => {
   let itemsCopy = [...taskItems];
   itemsCopy.splice(index, 1);
   setTaskItems(itemsCopy)
 }
 
   return (
	 <View style={styles.container}>
	  
		{/* app name */}
	   <Text style={styles.welcome}>ReminDING</Text>
	   

	    {/* Search */}
		<View>
			<View style={styles.searchWrapper}>
				<Text style={styles.searchText}>Search</Text>
				<View style={styles.iconsearch}>
				<Icon3 name="search" size={15} color="white" /></View>
				

			</View>

		</View>
		
		<Text style={styles._category}>NOTES</Text>
		<View style={styles._Line1}></View>
		



		{/*BODY */}
		<ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
      
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>
		
	
		
		


		{/*icons for reminders*/}
		
		
		

		
	     



		{/* Drop down menu */}
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
	   
	   
	   {/* Navigation */}
        <View style={styles.footer}>
			
			
		</View>
		<View style={styles._circle1}>
		<View style ={styles.iconwork1}>
			<Icon2 name="work" size={25} color="white"  />
			</View>
		</View>
		<View style={styles._circle2}>
		<View style ={styles.icongym1}>
			<Icon4 name="dumbbell" size={20} color="white" />
			</View>
		</View>
		<KeyboardAvoidingView 
        
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'\t\t\tType Reminder'} placeholderTextColor="grey"  value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
		</KeyboardAvoidingView>
		
		<View style={styles._circle4}>
		<View style ={styles.iconnotes1}>
			<Icon name="note-text" size={25} color="white" />
			</View>
		</View>
		<View style={styles._circle5}>
		<View style={styles.iconbook1}>
			<Icon3 name="book-open" size={22} color="white" />
			</View>
		</View>

		<View>
			
			
			
			
		</View>

		
    {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
     
     

    
    

		</View>
  );

    


		

	}

	 

	 

	
   
 
 
 const styles = StyleSheet.create({
   container: {
	 flex: 1,
	 paddingTop: 100,
	 backgroundColor: 'black',
   },
   tasksWrapper: {
    paddingTop: 20,
    paddingHorizontal: 40,
	left: 10
  },
  items: {
    marginTop: 10,
  },
  writeTaskWrapper: {
	position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
    
  },
  input: {
   
    backgroundColor: 'rgba(98, 90, 90, 1)',
    borderRadius: 60,
	width: 150,
	height: 40,
	top: 70,
	left:78
    
  
   
  },
  addWrapper: {
    width: 70,
    height: 70,
    backgroundColor: 'rgba(98, 90, 90, 1)',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
	left:-119,
	bottom:0
   

  },
  addText: {
	  fontSize:70,
	  bottom:15,
	  left:0,
	  color:"black"
 	 
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
	left: 40,
	marginBottom: 7,
	color: 'white',
	opacity: 0.5

 },
 _category: {
	 flexDirection: 'row',
	 position: "absolute",
	 left: 50,
	 top: 85,
	 fontSize: 16,
	 color: "white",
	 
	 
	 
	 
	 
 },
 _Line1: {
	height :1,
 	width:40,
	left: 55,
	top: 10,
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
	Line1: {
		height :2,
    	width: 320,
		left: 47,
		top: 70,
    	backgroundColor: 'rgba(74, 69, 69, 1)'

	},

	Line2: {
		height :2,
    	width: 320,
		left: 47,
		top: 76,
    	backgroundColor: 'rgba(74, 69, 69, 1)'
		
	},
	Line3: {
		height :2,
    	width: 320,
		left: 47,
		top: 82,
    	backgroundColor: 'rgba(74, 69, 69, 1)'
	},
	text1: {
		flexDirection: 'row',
		top: 40,
    	left: 73,
		fontSize: 17,
		fontWeight: 'bold',
    	color: 'white',
	},

	subtext1 : {
		flexDirection: 'row',
		top: 22,
    	left: 195,
		fontSize: 12,
		color: 'white',
	},

	text2: {
		flexDirection: 'row',
		top: 43,
    	left: 73,
		fontSize: 17,
		fontWeight: 'bold',
    	color: 'white',

	},

	subtext2: {
		flexDirection: 'row',
		top: 28,
    	left: 196,
		fontSize: 12,
		color: 'white',

	},

	text3 : {
		flexDirection: 'row',
		top: 48,
    	left: 75,
		fontSize: 17,
		fontWeight: 'bold',
		color: 'white',

	},

	subtext3 : {
		flexDirection: 'row',
		top: 32,
    	left: 209.7,
		fontSize: 12,
		color: 'white',

	},
	iconsearch:{
		left: 295,
		top: -24
	},
	icondown: {
		top :10,
		left:6
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
			left: 10,
			top:10,
			transform: [
				{rotate: "-45deg"}
			]
		},
		icongym1: {
			position: "absolute",
			left: 12 ,
			top:13,
			transform: [
				{rotate: "-30deg"}
			]
		
		},
		iconbook1: {
			position: "absolute",
			left: 12,
			top: 13,
			transform: [
				{rotate: "35deg"}
			]
		},
		iconnotes1: {
			position: "absolute",
			left:12,
			top:12,
			transform: [
				{rotate: "45deg"}
			]
		
		},
	
	check: {
		position:"absolute",
		top:147,
		left:52
	},
	check1:{
		position:"absolute",
		top:192,
		left:53
	},
	tick: {
		position:"absolute",
		top:237,
		left:54
	},
	iconedit:{
		position:"absolute",
		top:100,
		left: 345
	},
	lines1: {
		position: "absolute",
		height :18,
		width: 2,
			left:262,
			top:147,
		backgroundColor: 'dimgrey'
	},
	lines2: {
		position: "absolute",
		height :18,
		width: 2,
			left:263,
			top:194,
		backgroundColor: 'dimgrey'

	},
	lines3: {
		position: "absolute",
		height :18,
		width: 2.2,
			left:263.4,
			top:239,
		backgroundColor: 'dimgrey'
	},
	toggle1: {
		position: "absolute",
		top:145,
		left: 330
	},
	toggle2: {
		position: "absolute",
		top:191,
		left: 332
	},
	toggle3: {
		position: "absolute",
		top:236,
		left: 334
	},
	navicircle: {
		position: "absolute",
		width: 27,
		height: 27,
		borderRadius:1000,
		left: 1.5,
		top:33,
		backgroundColor: "grey",
		opacity: 0.7
		
		
		
	}
		
  });
 

  