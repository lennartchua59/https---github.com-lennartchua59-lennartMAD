import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.circle}></View>
        <Text style={styles.itemText}>{props.text}</Text>
        <View style={styles.line}></View>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    
    
    
   padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 1,
    
    
    
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    
  },
  circle: {
    width: 5,
    height: 5,
    borderColor: 'rgba(41, 37, 37, 1)',
    borderWidth: 2,
    borderRadius: 5,

    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
    color:"black",
    fontSize: 15
    
  },
 
  line: {
    height :2,
    width: 250,
    left: 0,
    top: 20,
    backgroundColor: 'rgba(74, 69, 69, 1)'
  }
  
});

export default Task;