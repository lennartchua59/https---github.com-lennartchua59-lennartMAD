/**
 *
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 *
 * My MAD APP-Calendar Page
 */
 
 import React, { Component } from 'react';
 import {
     StyleSheet,
     Text,
     View
 } from 'react-native';
 import CalendarPicker from 'react-native-calendar-picker';
 import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 import Icon1 from 'react-native-vector-icons/Fontisto';
 import Icon2 from "react-native-vector-icons/MaterialIcons";
 import Icon3 from "react-native-vector-icons/Feather";
 import Icon4 from 'react-native-vector-icons/FontAwesome5';
  
  
 class App extends Component {
  
     constructor(props) {
         super(props);
         this.state = {
             selectedStartDate: null,
             selectedEndDate: null,
         };
         this.onDateChange = this.onDateChange.bind(this);
  
  
     }
  
     onDateChange(date, type) {
         if (type === 'END_DATE') {
             this.setState({
                 selectedEndDate: date,
             });
         } else {
             this.setState({
                 selectedStartDate: date,
                 selectedEndDate: null, 
             });
         }
     }
  
     render() {
  
         const { selectedStartDate, selectedEndDate } = this.state;
         const minDate = new Date(); // Today
         const maxDate = new Date(2017, 6, 3);
         const startDate = selectedStartDate ? selectedStartDate.toString() : '';
         const endDate = selectedEndDate ? selectedEndDate.toString() : '';
  
  
         return (
  
             <View style={styles.container}>
                 <View style={styles._rectangle1}>
                     <CalendarPicker
                         startFromMonday={true}
                         allowRangeSelection={true}
                         minDate={minDate}
                         maxDate={maxDate}
                         todayBackgroundColor="#a00828"
                         selectedDayColor="#a00828"
                         selectedDayTextColor="white"
                         onDateChange={this.onDateChange}
                         textStyle={{
                             color: 'white',
                           }}
                           scaleFactor={450}
  
                     />
                 </View>
  
  
                 <Text style={styles.welcome}>ReminDING</Text>
  
  
  
                 <View style={styles._rectangle4}>
                     <Text style={styles._txt8}> 9:00 AM | </Text>
                     <Text style={styles._txt9}> Start Work </Text>
                 </View>
                 <View style={styles._rectangle5}>
                     <Text style={styles._txt10}> 2:00 PM | </Text>
                     <Text style={styles._txt11}> Meeting </Text>
                 </View>
  
                
                    
                     <View>
                         <View style={styles.icondown}>
                             <Icon1 name="angle-dobule-down" size={18} color="white" />
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
 }
 const styles = StyleSheet.create({
     container: {
         flex: 1,
         paddingTop: 100,
         backgroundColor: 'black',
     },
     date: {
         color: 'white',
     },
     icondown: {
         top: -320,
         left: 20,
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
         backgroundColor: "rgba(98, 90, 90, 1)",
         left: 45,
         bottom: 5,
  
  
  
     },
     _circle2: {
         position: "absolute",
         width: 50,
         height: 50,
         borderRadius: 1000,
         backgroundColor: "rgba(98, 90, 90, 1)",
         left: 95,
         bottom: 45,
     },
  
     _circle3: {
         position: "absolute",
         width: 70,
         height: 70,
         borderRadius: 1000,
         backgroundColor: "rgba(98, 90, 90, 1)",
         left: 155,
         bottom: 45,
  
     },
     _circle4: {
         position: "absolute",
         width: 50,
         height: 50,
         borderRadius: 1000,
         backgroundColor: "rgba(98, 90, 90, 1)",
         left: 292,
         bottom: 5,
  
     },
     _circle5: {
         position: "absolute",
         width: 50,
         height: 50,
         borderRadius: 1000,
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
     iconwork1: {
         position: "absolute",
         left: 56,
         top: 308,
         transform: [
             { rotate: "-45deg" }
         ]
     },
     icongym1: {
         position: "absolute",
         left: 107,
         top: 270
         ,
         transform: [
             { rotate: "-30deg" }
         ]
  
     },
     iconnotes1: {
         position: "absolute",
         left: 256,
         top: 270,
         transform: [
             { rotate: "30deg" }
         ]
  
     },
     iconbook1: {
         position: "absolute",
         left: 305,
         top: 312,
         transform: [
             { rotate: "45deg" }
         ]
     },
 });
  
 export default App;