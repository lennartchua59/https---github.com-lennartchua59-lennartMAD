import React, {  useState } from 'react';
 import {
 
     StyleSheet,
 
     Text,
	 TouchableOpacity,
 
     View,Switch, Appearance,colorScheme
 } from 'react-native';
 import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";
 import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/Fontisto';

 	
   import { Searchbar } from 'react-native-paper';
  
 
 
   export default function settings(props) {
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
       const[theme, setTheme]= useState(Appearance.getColorScheme());
	   Appearance.addChangeListener((scheme)=>{
		   setTheme(scheme.colorScheme);
	   })
     return (
         <View style={styles.container}>
 
 <TouchableOpacity   onPress={()=>{props.navigation.navigate("Home")}}>
		<Text style={styles.welcome}>ReminDING</Text>
		</TouchableOpacity>
             {/* Search */}
             <View>
		<Searchbar style={styles.searchbar} ></Searchbar>

		</View>
             
		<View style={styles.box}>
    <View style={styles._rectangle}>
				 
         <Text style={styles._txt1}>Allow notifications</Text>
   <View style={styles._switch}>
   <Switch
    trackColor={{ false: "#ffffff", true: "#ffffff" }}
    thumbColor={isEnabled ? colorScheme == 'dark' : colorScheme == 'light'}
    ios_backgroundColor="#3e3e3e"
    onValueChange={toggleSwitch}
    value={isEnabled}
  />
  </View>
  </View>

         
        
         <TouchableOpacity style={styles._rectangle2}  onPress={()=>{props.navigation.navigate("Wapp")}}>
             <Text style={styles._txt2}>Appearance</Text>
                <View style={styles.iconarrow1}>
                 <Icon name="keyboard-arrow-right" size={30} color="white" />
             </View>
            </TouchableOpacity>



        
         <TouchableOpacity style={styles._rectangle3} onPress={()=>{props.navigation.navigate("Wfeed")}}>
        <View style ={styles.iconarrow2}>
          <Text style={styles._txt3}>Feedback</Text>
            <Icon name="keyboard-arrow-right" size={30} color="white"  />
            </View>
        </TouchableOpacity>
    </View>
 

 
 
             
            
 
             {/* Drop down menu */}
 <MenuProvider style={styles.menuprov}>
      <Menu style={styles.menuContent} >
        <MenuTrigger style={styles.icondrop}>
		<Icon3 name="chevron-double-down" size={35} color="black" />
        </MenuTrigger>
        <MenuOptions optionsContainerStyle={styles.optionsstyle}>
          <TouchableOpacity  onPress={()=>{props.navigation.navigate("Wall")}}><Icon name="format-list-bulleted" size={25} color="black"/></TouchableOpacity>  
          <TouchableOpacity  onPress={()=>{props.navigation.navigate("Wcal")}}><Icon4 name="date" size={25} color="black" /></TouchableOpacity> 
          <TouchableOpacity onPress={()=>{props.navigation.navigate("Wset")}}><Icon2 name="settings" size={25} color="black"/></TouchableOpacity>
        </MenuOptions>
      </Menu>
	</MenuProvider>
 
 
  {/* Navigation */}
  <View style={styles.footer}>
			
			
            </View>
            <TouchableOpacity style={styles._circle1} onPress={()=>{props.navigation.navigate("Wwork")}}>
            <View style ={styles.iconwork1}>
                <Icon name="work" size={35} color="white"  />
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles._circle2} onPress={()=>{props.navigation.navigate("Wgym")}}>
            <View style ={styles.icongym1}>
                <Icon1 name="dumbbell" size={35} color="white" />
                </View>
            </TouchableOpacity>
    
            <TouchableOpacity style={styles._circle4} onPress={()=>{props.navigation.navigate("Wstudies")}}>
            <View style ={styles.iconnotes1}>
                <Icon3 name="note-text" size={35} color="white" />
                </View>
            </TouchableOpacity>
                
            <TouchableOpacity style={styles._circle5} onPress={()=>{props.navigation.navigate("Wnotes")}}>
            <View style={styles.iconbook1}>
                <Icon2 name="book-open" size={35} color="white" />
                </View>
            </TouchableOpacity>
            

		
 
 
 
         </View>
 
 
 
 
     );
 
 }
 
 const styles = StyleSheet.create({
	welcome: {
		top: -100,
		flexDirection: 'row',
		position: 'absolute',
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		width: '100%',
		height: 45,
		color: 'black',
	},
  box: {
    alignSelf: "flex-end",
	  width: 350,
	  height:390,
	  borderRadius: 20,
	  opacity: 1,
	  left: -10,
	  top: 20,
	  bottom: "auto",
	  
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
	   menuprov: {
	
        width: 40,
        height: 40,
        marginTop: -500,
        top:-520,
       
        
        
        
    
        
       },
       
    
      menuContent: {
    
        right: 90,
        width: 30,
        top:1140,
        left: 3,
        height:50,
        
        
        
        
        
      },
      icondrop: {
          marignTop: -20,
            bottom:-10,
          left:4,
          transform: [
            {rotate: "180deg"}
        ],
        height:100,
        
         
          
      },
      
      optionsstyle: {
        top:-200,
        width: 30,
        backgroundColor: "white",
        margintop:-200,
        height:250,
        
      },
	   _switch: {
		top:6,
		right:6
	   },
	   _switch2: {
		top:6,
		right:2
	   },

     container: {
         flex: 1,
         paddingTop: 100,
         backgroundColor: 'white',
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
         top: 3,
         left: 290,
     },
     iconarrow2: {
         top: 5,
         left: 290,
         zIndex: 10
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
     
   
     _rectangle: {
         position: "absolute",
         width: 330,
         height: 40,
         borderRadius: 32,
         opacity: 1,
         left: 10,
         top: 20,
         bottom: "auto",
         backgroundColor: "rgba(41, 37, 37, 1)",
     },
     _rectangle2: {
         position: "absolute",
         width: 330,
         height: 40,
         borderRadius: 32,
         opacity: 1,
         left: 10,
         top: 70,
         bottom: "auto",
         backgroundColor: "rgba(41, 37, 37, 1)",
     },
     _rectangle3: {
         position: "absolute",
         width: 330,
         height: 40,
         borderRadius: 32,
         opacity: 1,
         left: 10,
         top: 120,
         
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
         left:-270,
         top: 4,
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
 
