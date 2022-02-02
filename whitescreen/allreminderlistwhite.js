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
import { SafeAreaView,KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';

import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Task from "../whitecomponents/Taskallwhite";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Fontisto';
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/Feather";
import Icon4 from 'react-native-vector-icons/FontAwesome5';


 
 
 export default function App(props) {
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
	  
 
	  <TouchableOpacity   onPress={()=>{props.navigation.navigate("Home")}}>
		<Text style={styles.welcome}>ReminDING</Text>
		</TouchableOpacity>
	   
		
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
	 
		


	
	



		
    <View style = {styles._rectangle2}>
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
			
			
	  </View>
	  {/*Drop down menu */}
	  <MenuProvider style={styles.menuprov}>
      <Menu style={styles.menuContent} >
        <MenuTrigger style={styles.icondrop}>
		<Icon name="chevron-double-down" size={35} color="black" />
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.optionsstyle}>
          <TouchableOpacity  onPress={()=>{props.navigation.navigate("All")}}><Icon name="format-list-bulleted" size={25} color="black"/></TouchableOpacity>  
          <TouchableOpacity  onPress={()=>{props.navigation.navigate("Cal")}}><Icon1 name="date" size={25} color="black" /></TouchableOpacity> 
          <TouchableOpacity onPress={()=>{props.navigation.navigate("Set")}}><Icon3 name="settings" size={25} color="black"/></TouchableOpacity>
        </MenuOptions>
      </Menu>
	</MenuProvider>

 {/* navigation*/}
	   
 <View style={styles.footer}>
			
			
			</View>
			<TouchableOpacity style={styles._circle1} onPress={()=>{props.navigation.navigate("Work")}}>
			<View style ={styles.iconwork1}>
				<Icon2 name="work" size={25} color="white"  />	
				</View>
			</TouchableOpacity>
			
			<TouchableOpacity style={styles._circle2} onPress={()=>{props.navigation.navigate("Gym")}}>
			<View style ={styles.icongym1}>
				<Icon4 name="dumbbell" size={20} color="white" />
				</View>
			</TouchableOpacity>
			<KeyboardAvoidingView 
			
			style={styles.writeTaskWrapper}
		  >
			<TextInput style={styles.input} placeholder={'\t\t\tType Reminder'} placeholderTextColor="grey" value={task} onChangeText={text => setTask(text)} />
			<TouchableOpacity onPress={() => handleAddTask()}>
			  <View style={styles.addWrapper}>
				<Text style={styles.addText}>+</Text>
			  </View>
			</TouchableOpacity>
			</KeyboardAvoidingView>
			<TouchableOpacity style={styles._circle5} onPress={()=>{props.navigation.navigate("Studies")}}>
			<View style={styles.iconbook1}>
				<Icon3 name="book-open" size={22} color="white" />
				</View>
			</TouchableOpacity>
			
			
		
			<TouchableOpacity style={styles._circle4} onPress={()=>{props.navigation.navigate("Notes")}}>
			<View style ={styles.iconnotes1}>
				<Icon name="note-text" size={25} color="white" />
				</View>
			</TouchableOpacity>
	
			
				

		</View>
  );

    


		



	 

	 

	
   
 }
 
 const styles = StyleSheet.create({
   container: {
	 flex: 1,
	 paddingTop: 100,
	 backgroundColor: 'white',
   },
   menuprov: {
	
	width: 40,
	height: 40,
	marginTop: -500,
	top:-580,
	
	
	
	

	
   },
   

  menuContent: {

	right: 90,
	width: 30,
	top:1280,
	left: 3,
	height:50,
	
	
	
	
	
  },
  icondrop: {
	  marignTop: -20,
		bottom:18,
	  left:2.5,
	  transform: [
		{rotate: "180deg"}
	],
	height:50,
	
	 
	  
  },
  
  optionsstyle: {
	top:-200,
	width: 30,
	backgroundColor: "white",
	margintop:-200,
	height:200,
	
  },
   tasksWrapper: {
    height:140,
	alignSelf:"flex-end",
	left: 40,
	top:-10,
 	paddingHorizontal: 20,

	width: 330,
	
  },
  items: {
	marginTop: 5,
	paddingTop:20,
	right:20
  },
  _rectangle2:{
	alignSelf: "flex-end",
	  width: 300,
	  height:390,
	  borderRadius: 20,
	  opacity: 1,
	  left: -40,
	  top: 125,
	  bottom: "auto",
	  backgroundColor: "rgba(41, 37, 37, 1)",
  
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
	 top: -100,
	 flexDirection: 'row',
	 position: 'absolute',
	 fontSize: 30,
	 fontWeight : 'bold',
	 textAlign: 'center',
	 width: '100%',
	 height: 45,
	 color: 'black',
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
	zIndex:10
	
	

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




_circle4: {
	position: "absolute",
	width: 50,
	height: 50,
	borderRadius:  1000,
	backgroundColor: "rgba(98, 90, 90, 1)",
	left: 292,
	bottom: 5,
	zIndex:10

},
_circle5: {
	position: "absolute",
	width: 50,
	height: 50,
	borderRadius:  1000,
	backgroundColor: "rgba(98, 90, 90, 1)",
	left: 243,
	bottom: 45,
	zIndex:10

},
	_plus: {
		flexDirection: 'row',
		position: "absolute",
		left: 170,
		bottom: 40,
		fontSize: 70,
		color: "black",


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
 
 
  