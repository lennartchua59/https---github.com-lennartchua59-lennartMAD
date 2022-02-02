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
import AllScreen from "./screens/allreminderlist"
import SettingScreen from "./screens/settings"
import AppScreen from "./screens/appearance"
import FeedScreen from "./screens/feedback"
import WhomeScreen from "./whitescreen/home white/indexwhite"
import WworkScreen from "./whitescreen/workwhite"
import WstudiesScreen from "./whitescreen/studieswhite"
import WnotesScreen from "./whitescreen/noteswhite"
import WgymScreen from "./whitescreen/gymwhite"
import WcalScreen from "./whitescreen/calanderwhite"
import WallScreen from "./whitescreen/allreminderlistwhite"
import WsettingScreen from "./whitescreen/settingswhite"
import WappScreen from "./whitescreen/Whiteappearance"
import WfeedScreen from "./whitescreen/feedbackwhite"


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
        <Stack.Screen name="All" component={AllScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="Set" component={SettingScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="App" component={AppScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="Feed" component={FeedScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="Whome" component={WhomeScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="Wwork" component={WworkScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="Wstudies" component={WstudiesScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="Wnotes" component={WnotesScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="Wgym" component={WgymScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="Wcal" component={WcalScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="Wall" component={WallScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="Wset" component={WsettingScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="Wapp" component={WappScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="Wfeed" component={WfeedScreen}  options={{headerShown: false}}/>

      </Stack.Navigator>
    
  );
}

export default Navigation;