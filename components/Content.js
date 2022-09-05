import React, { useState, useEffect } from 'react'
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//REDUC COMPONENT
import { currentView, editValue, selectDataArray, editIndex } from '../reducer/globalSlice';
import { useDispatch, useSelector } from 'react-redux'

const Content = () => {
  const DataArray = useSelector(selectDataArray);
  const dispatch = useDispatch();

  useEffect(() => {
  },[DataArray])

  const handleEdit = (item, index) => {
    dispatch(editValue(item));
    dispatch(editIndex(index));
    dispatch(currentView('editView'));
  }

  return (
    <SafeAreaView>
      <FlatList
        data={DataArray}
        keyExtractor={(item, index) => index}
        renderItem={({ item:{name,currentValue,topupValue},item, index }) => (
          <View style={styles.mainContainer}>
            <Text style={styles.heading}>{name}</Text>
            <Text style={styles.heading}>{currentValue}</Text>
            <Text style={styles.heading}>{topupValue}</Text>
            <TouchableOpacity onPress={() => handleEdit(item, index)}>
              <Text style={styles.edit}>EDIT</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20
  },
  heading: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  edit: {
    fontSize: 13,
    color: 'grey',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

export default Content