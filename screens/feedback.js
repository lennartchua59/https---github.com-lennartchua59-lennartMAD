import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, 
  TextInput, TouchableOpacity, Keyboard, Button,
  ScrollView } from 'react-native';
  import Icon2 from "react-native-vector-icons/MaterialIcons";

  export default function Feedback(props) {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  
  return (
    <View style={styles.container}>
 
 <TouchableOpacity   onPress={()=>{props.navigation.navigate("Home")}}>
		<Text style={styles.welcome}>ReminDING</Text>
		</TouchableOpacity>
 
             <View style={styles.iconarrow2}>
                 <TouchableOpacity
                    onPress={() => props.navigation.navigate('Set')}
                    

                ><Icon2 name="keyboard-arrow-left" size={30} color="white" />
                </TouchableOpacity>
             </View>

             <View style={styles._rectangle2}>
 
             <Text style={styles._txt2}>Feedback</Text>
             </View>
 
             <View style={styles._rectangle}>
               <Text style={styles._txt1}>How can we improve?</Text>
             <View>
			<KeyboardAvoidingView 
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} 
        placeholder={'Feedback'} 
         value={task} 
         onChangeText={text => setTask(text)}
         multiline
         autoCapitalize="characters"
         numberOfLines={4}
         maxLength={400}
           />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>Submit</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
			</View>
 
             </View>
             
             
            
            
          
            
 
 
 
 
         </View>
		

    
      
      
    
  );
}

const styles = StyleSheet.create({
 
  
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
 
  writeTaskWrapper: {
    position: 'absolute',
    top:-330,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    
    backgroundColor: 'rgba(74, 69, 69, 1)',
    borderRadius: 13,
	
  	height: 140,
    width: 380,
	top:375,
	left:20,
  },
  
  addText: {
	  color: "white", 
	  top:500,
	  right:16,
	  fontSize: 16
	
  }
,
  container: {
	flex: 1,
	paddingTop: 100,
	backgroundColor: 'black',
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


_txt1: {
  flexDirection: 'row',
  position: "absolute",
  left: 13,
  top: 16,
  bottom: "auto",
  fontSize: 18,
  color: "white",
  
},
_txt2: {
  flexDirection: 'row',
  position: "absolute",
  left: 144,
  top: -40,
  bottom: "auto",
  fontSize: 24,
  color: "white",
  fontWeight: "600",

},
iconarrow2: {
         position: "absolute",
         left: 10,
         top: 45,
     },

     





});
