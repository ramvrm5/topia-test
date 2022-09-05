import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';

//REDUC COMPONENT
import { selectDataArray } from '../reducer/globalSlice';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
    const [ netCuurentAmount, setNetCurrentAmount] = useState(0);
    const [ totalPopUp, setTotalPopUp] = useState(0);
    const DataArray = useSelector(selectDataArray);

    useEffect(() => {
        let total = DataArray.reduce((total, item) => {
            let result = total + parseInt(item.currentValue);
            return result
        }, 0);
        let topupSumUp = DataArray.reduce((total, item) => {
            let result = total + parseInt(item.topupValue);
            return result
        }, 0);
        let topUpTotal = topupSumUp + ((topupSumUp * 5)/100);
        setTotalPopUp(topUpTotal);
        setNetCurrentAmount(total);
    }, [DataArray])

    return (
        <View style={styles.mainContainer}>
            <View style={styles.currentContainer}>
                <Text style={styles.heading}>Net Worth</Text>
                <Text>{netCuurentAmount}</Text>
            </View>
            <View style={styles.topupContainer}>
                {(totalPopUp >= 500000) && (<View style={styles.topupContainer__date}>
                    <Text>{new Date().toLocaleDateString("en-US")}</Text>
                </View>)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 10
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    currentContainer: {
        flexDirection: 'column',
    },
    topupContainer: {
        flexDirection: 'column',
    },
    topupContainer__date: {
        width:120,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});

export default Header