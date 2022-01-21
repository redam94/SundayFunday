import React, { useState } from 'react'
import {Dimensions, View, Button, Text, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import firebase from 'firebase'
import { a_30, background } from '../../styles/colors'


export default function Save(image){
    console.log(image.route.params.image)
    const width = Dimensions.get('window').width;
    return(
        <View style={{flex: 1, width: width, backgroundColor:background+a_30}}>
            <Image source={{uri: image.route.params.image}} 
            style={{width: width, height:width}}/>
        </View>
    )
}
