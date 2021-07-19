import React, { useState } from 'react'
import { View, Button, Text, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import firebase from 'firebase'


export default function Save(image){
    console.log(image.route.params.image)
    return(
        <View style={{flex: 1}}>
            <Image source={{uri: image.route.params.image}} style={{flex: 1}}/>
        </View>
    )
}
