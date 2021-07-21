import React from 'react'
import { SafeAreaView, Text, StyleSheet, FlatList } from 'react-native'
import { a_30, background } from '../../styles/colors'
import Card from './mainComponents/Card'

export default function Feed(){
    const data = [
        {
            id: 0,
            date: '01/12/21',
            text: 'Hello!'
        },
        {
            id: 1,
            date: '01/15/21',
            text: "Cool!"
        },
        {
            id: 2,
            date: '01/15/21',
            text: "Wow!"
        },
        {
            id: 3,
            date: '01/15/21',
            text: "The best sunday ever!"
        },
        {
            id: 4,
            date: '01/15/21',
            text: "How to have fun!"
        },
    ];

    return(
        <SafeAreaView style={styles.container}>
            <Card/>
            <Card/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: background+a_30,
        overflow: 'scroll'
    },
})