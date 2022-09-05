import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//REDUC COMPONENT
import { currentView } from '../reducer/globalSlice';
import { useDispatch } from 'react-redux'

const Tab = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>List Of Account</Text>
      <TouchableOpacity onPress={() => dispatch(currentView('createView'))}>
        <Text style={styles.heading}>Creat New Account</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 20
  },
  heading: {
    fontWeight: 'bold',
    color: 'red',
    textDecorationLine: 'underline',
    fontSize: 15,
  },
});

export default Tab