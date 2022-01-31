import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'rgba(98, 90, 90, 1)',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: 'rgba(98, 90, 90, 1)',
    opacity: 0,
    borderRadius: 5,
    marginRight: -10,
    
  },
  itemText: {
    maxWidth: '90%',
    color: "white",
    fontSize: 20
    },
 
});

export default Task;