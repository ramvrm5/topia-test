import React, { useEffect } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import Header from '../components/Header'
import Tab from '../components/Tab'
import Content from '../components/Content'
import CreatEdit from '../components/CreatEdit'

//REDUC COMPONENT
import { selectCurrentView } from '../reducer/globalSlice';
import { useSelector } from 'react-redux'

const HomeScreen = () => {
    const CurrentView = useSelector(selectCurrentView);

    useEffect(() => {
    }, [CurrentView])

    return (
        <SafeAreaView>
            {CurrentView === 'contentView' ?
                <>
                    <Header />
                    <Tab />
                    <Content />
                </>
                :
                <CreatEdit />}
        </SafeAreaView>
    )
}

export default HomeScreen