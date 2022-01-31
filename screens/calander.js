/**
 *
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 *
 * My MAD APP-Calendar Page
 */

 import React, { useState } from 'react';
 import {
     StyleSheet,
     Text,
     View,
     TouchableOpacity,
     KeyboardAvoidingView,
     TextInput,
     ScrollView,
     Keyboard 
 } from 'react-native';

 import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/Feather";
import Icon4 from 'react-native-vector-icons/FontAwesome5';
import Calendars from '../components/calanderprops';
import Task from '../components/Taskcal'

   
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
           <Calendars style={styles.cal}></Calendars>



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
                <TouchableOpacity  key={index} onPress={() => completeTask(index)}>
                  <Task  text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>
 
                 {/* Navigation */}
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
	
			<View>
				
			
				
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
     cal: {
        top:10,
        left: 40,
        
     },
     date: {
         color: 'white',
     },
     icondown: {
         top: -320,
         left: 20,
     },
     welcome: {
         top: -100,
         flexDirection: 'row',
         position: 'absolute',
         fontSize: 30,
         fontWeight: 'bold',
         textAlign: 'center',
         width: '100%',
         height: 45,
         color: 'white',
     },
     tasksWrapper: {
         
        paddingtop: 40,
         paddingHorizontal: 20,
        left: 25,
        width: 350,
        top:25
        
        
        
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
		zIndex:10
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

	
     
     _rectangle1:{
         backgroundColor: "black",
         justifyContent:'center'
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
     dropdown: {
         position: "absolute",
         width: 35,
         height: 150,
         borderRadius: 20,
         opacity: 1,
         left: 9,
         top: 25,
         bottom: "auto",
         backgroundColor: "rgba(41, 37, 37, 1)",
     },
 
 });
 
 