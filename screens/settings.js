import React, { Component } from 'react';
 import {
 
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
;
   import { Searchbar } from 'react-native-paper';
 
 
 
 const Settings = () => {
     return (
         <View style={styles.container}>
 
             <Text style={styles.welcome}>ReminDING</Text>
             {/* Search */}
             <View>
		<Searchbar style={styles.searchbar} ></Searchbar>

		</View>
             
 
 
 
 
             <View style={styles._rectangle}>
                 <Text style={styles._txt1}>Allow notifications</Text>
                 <View style={styles.icontoggle}>
                     <Icon6 name="toggle-on" size={30} color="white" />
                 </View>
             </View>
             <View style={styles._rectangle2}>
                 <Text style={styles._txt2}>Appearance</Text>
                 <View style={styles.iconarrow1}>
                     <Icon2 name="keyboard-arrow-right" size={30} color="white" />
                 </View>
 
 
             </View>
             <View style={styles._rectangle3}>
                 <Text style={styles._txt3}> Feedback </Text>
                 <View style={styles.iconarrow2}>
                     <Icon2 name="keyboard-arrow-right" size={30} color="white" />
                 </View>
             </View>
 
          
 
 
 
             {/* Navigation */}
             <View style={styles.footer}>
			
			
		</View>
		<View style={styles._circle1}>
            <View style ={styles.iconwork1}>
			<Icon2 name="work" size={35} color="white"  />
			</View></View>
		<View style={styles._circle2}>
            <View style ={styles.icongym1}>
			<Icon4 name="dumbbell" size={35} color="white" />
			</View></View>
		
		
		<View style={styles._circle4}>
        <View style ={styles.iconnotes1}>
			<Icon name="note-text" size={35} color="white" />
			</View>
        </View>
		<View style={styles._circle5}>
        <View style={styles.iconbook1}>
			<Icon3 name="book-open" size={35} color="white" />
			</View>
        </View>

		
 
 
 
 
         </View>
 
 
 
 
     );
 
 }
 
 const styles = StyleSheet.create({
  searchbar: {
		position: 'absolute',
		top:-60,
		left: 41,
		borderRadius: 30,
		backgroundColor: "rgba(98, 90, 90, 1)",
		height: 38,
		width: '80%',
		
	   },
     container: {
         flex: 1,
         paddingTop: 100,
         backgroundColor: 'black',
     },
     navicircle: {
         position: "absolute",
         width: 30,
         height: 30,
         borderRadius: 1000,
         left: 1.5,
         top: 83,
         backgroundColor: "grey",
         opacity: 0.7
     },
     icontoggle: {
         top: 5,
         left: 282,
     },
     iconarrow1: {
         top: 5,
         left: 290,
     },
     iconarrow2: {
         top: 5,
         left: 290,
     },
     icondown: {
         top: 10,
         left: 7.5,
     },
     iconbullet: {
         top: 15,
         left: 6
 
     },
     icondate: {
         top: 20,
         left: 6
     },
     iconset: {
         top: 26,
         left: 6
 
     },
     iconlist: {
         top: 31,
         left: 5
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
         height: 40,
         borderRadius: 32,
         opacity: 1,
         left: 40,
         top: 160,
         bottom: "auto",
         backgroundColor: "rgba(41, 37, 37, 1)",
     },
     _rectangle2: {
         position: "absolute",
         width: 330,
         height: 40,
         borderRadius: 32,
         opacity: 1,
         left: 40,
         top: 220,
         bottom: "auto",
         backgroundColor: "rgba(41, 37, 37, 1)",
     },
     _rectangle3: {
         position: "absolute",
         width: 330,
         height: 40,
         borderRadius: 32,
         opacity: 1,
         left: 40,
         top: 280,
         bottom: "auto",
         backgroundColor: "rgba(41, 37, 37, 1)",
     },
     searchWrapper: {
         position: "absolute",
         width: 316,
         height: 30,
         borderRadius: 20,
         opacity: 1,
         left: 48,
         top: -50,
         bottom: "auto",
         backgroundColor: "grey",
     },
     searchText: {
         fontFamily: 'Montserrat-Semibold',
         fontSize: 18,
         top: 2,
         left: 10,
         marginBottom: 7,
         color: 'white',
         opacity: 0.5
     },
     iconsearch: {
         left: 288,
         bottom: 25
     },
     _category: {
         flexDirection: 'row',
         position: "absolute",
         left: 20,
         top: 100,
         bottom: "auto",
         fontFamily: "Tangerine",
         fontSize: 16,
         color: "white",
     },
     _txt1: {
         flexDirection: 'row',
         position: "absolute",
         left: 16,
         top: 8,
         bottom: "auto",
         fontSize: 16,
         color: "white",
     },
     _txt2: {
         flexDirection: 'row',
         position: "absolute",
         left: 15,
         top: 9,
         bottom: "auto",
         fontSize: 16,
         color: "white",
     },
     _txt3: {
         flexDirection: 'row',
         position: "absolute",
         left: 15,
         top: 8,
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
         borderRadius: 1000,
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
 
 export default Settings;