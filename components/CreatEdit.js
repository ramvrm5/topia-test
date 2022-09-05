import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

//REDUC COMPONENT
import { useImmer } from "use-immer";
import { currentView, selectCurrentView, selectDataArray, dataArray, selectEditValue, selectEditIndex } from '../reducer/globalSlice';
import { useDispatch, useSelector } from 'react-redux'

const CreatEdit = () => {
    const [name, onChangeName] = useState(null);
    const [currentValue, onChangeCurrentValue] = useState(null);
    const [topupValue, onChangeTopupValue] = useState(null);
    const CurrentView = useSelector(selectCurrentView);
    const EditValue = useSelector(selectEditValue);
    const DataArray = useSelector(selectDataArray);
    const EditIndex = useSelector(selectEditIndex);
    const [dataVal, setDataVal] = useImmer(DataArray);
    const dispatch = useDispatch();

    useEffect(() => {
        if (CurrentView === 'editView') {
            let { name, currentValue, topupValue } = EditValue;
            onChangeName(name);
            onChangeCurrentValue(currentValue);
            onChangeTopupValue(topupValue);
        }
    }, [])

    useEffect(() => {
        dispatch(dataArray(dataVal))
    }, [dataVal])

    const handleData = () => {
        if (CurrentView === 'createView') {
            setDataVal((data) => {
                data.push({ 'name': name, 'currentValue': currentValue, 'topupValue': topupValue });
            })
            setTimeout(() =>{
                dispatch(currentView('contentView'));
            },500)
        } else if (CurrentView === 'editView') {
            setDataVal((data) => {
                data[EditIndex].name = name;
                data[EditIndex].currentValue = currentValue;
                data[EditIndex].topupValue = topupValue;
            })
            setTimeout(() =>{
                dispatch(currentView('contentView'));
            },500)
        }
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.heading}>{CurrentView === 'createView' ? 'Creat Account' : 'Edit Account'}</Text>
            <View>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeName}
                    value={name}
                    placeholder="name"
                />
            </View>
            <View>
                <Text style={styles.label}>Current Value</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeCurrentValue}
                    value={currentValue}
                    placeholder="Current Value"
                    keyboardType='numeric'
                />
            </View>
            <View>
                <Text style={styles.label}>Topup Value</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeTopupValue}
                    value={topupValue}
                    placeholder="Topup Value"
                    keyboardType='numeric'
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity>
                    <Button onPress={() => dispatch(currentView('contentView'))} title="Back" />
                </TouchableOpacity>
                {CurrentView === 'createView' ?
                    <TouchableOpacity>
                        <Button onPress={handleData} title="Save" />
                    </TouchableOpacity> :
                    <TouchableOpacity>
                        <Button onPress={handleData} title="Update" />
                    </TouchableOpacity>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    heading: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'red',
        textDecorationLine: 'underline',
        fontSize: 15,
        marginBottom: 30
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    label: {
        textAlign: 'center',
    }
});

export default CreatEdit