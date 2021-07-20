import React from 'react'
import Logo from '../svgs/Logo'
import { Dimensions, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Button from '../shared/Button'
import {background, a_50} from '../../styles/colors'


let window = Dimensions.get("window");

export default function Landing({ navigation }) {

    return (
        <View style={styles.container}>
            <Logo style={styles.img}/>
            <Text style={styles.text}>{'Sunday Funday'.toUpperCase()}</Text>
            <Button 
                text="Register" 
                onPress={() => navigation.navigate("Register")}
                buttonStyle={styles.button}
                textStyle={styles.button_text}/>
            <Button
                text="Login"
                onPress={() => navigation.navigate("Login")}
                buttonStyle={styles.button}
                textStyle={styles.button_text}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: (background+a_50),

    },
    text: {
        fontSize: 42, 
        color: '#000',
        zIndex: 3,
        fontWeight: '300',
    },
    img: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    button: { 
        height: window.height*.1,
        width: window.width*.5,
        borderRadius: 10,
        backgroundColor: background,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    button_text: {
        fontSize: 24,
        color: '#fff',
        fontWeight: '200',
    },
});