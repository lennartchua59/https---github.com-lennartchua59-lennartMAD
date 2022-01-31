// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/Home/index"
import WorkScreen from "./screens/Work"
import GymScreen from "./screens/Gym"
import StudiesScreen from "./screens/studies"
import NotesScreen from "./screens/notes"
import CalScreen from "./screens/calander"


const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Work" component={WorkScreen}  options={{headerShown: false}} />
        <Stack.Screen name="Gym" component={GymScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="Studies" component={StudiesScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="Notes" component={NotesScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="Cal" component={CalScreen}  options={{headerShown: false}}/>
       
      </Stack.Navigator>
    
  );
}

export default Navigation;