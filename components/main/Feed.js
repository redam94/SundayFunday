import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { a_30, background } from '../../styles/colors'

export default function Feed(){
    return(
        <View style={styles.container}>
            <Text style={{fontSize:24}}>Feed</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: background+a_30,
        overflow: 'hidden'
    },
})