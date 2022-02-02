import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View, LogBox} from "react-native"
import Navigation from "./Navigation"
export default function App() {

	LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
	LogBox.ignoreAllLogs();//Ignore all log notifications
	
  return (
	  <View style={{flex:1}}>
		  <NavigationContainer>
			  <Navigation/>
		</NavigationContainer>
	  </View>
  );
}