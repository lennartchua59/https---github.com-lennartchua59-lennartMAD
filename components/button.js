/**
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 
 * 
 */

 import React, { Component } from 'react';
 import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';
 
 export default class ButtonBasics extends Component {
   _onPressButton() {
     Alert.alert('Button is Pressed!')
   }
 
   _onPressRespond() {
     Alert.alert('Different Respond Alert!')
   }
 
   _onButtonLeft() {
     Alert.alert('Left Button is Click!')
   }
 
   _onButtonOk() {
     Alert.alert('Ok Click!')
   }
 
   render() {
     return (
       <View style={styles.container}>
         <View style={styles.buttonBasicStyle}>
           <Button
             onPress={this._onPressButton}
             title="Click to Respond"
             color="blue"
           />
         </View>
         <View style={styles.buttonBasicStyle}>
           <Button
             onPress={this._onPressRespond}
             title="A different Respond"
             color="green"
           />
         </View>
         <View style={styles.buttonAlignStyle}>
           <Button
             onPress={this._onButtonLeft}
             title="Left Button"
           />
           <Button
             onPress={this._onButtonOk}
             title="OK"
             color="#841584"
           />
         </View>
       </View>
     );
   }
 }
 
 const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
   },
   buttonBasicStyle: {
     margin: 20
   },
   buttonAlignStyle: {
     margin: 20,
     flexDirection: 'row',
     justifyContent: 'space-between'
   }
 });
 