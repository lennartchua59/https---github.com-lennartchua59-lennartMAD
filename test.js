import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View} from "react-native"
import Navigation from "./Navigation"
export default function App() {
  return (
	  <View style={{flex:1}}>
		  <NavigationContainer>
			  <Navigation/>
		</NavigationContainer>
	  </View>
  );
}