import React from 'react'
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const window = Dimensions.get("window");

export default function Landing({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                title="Register"
                activeOpacity='.5'
                onPress={() => navigation.navigate("Register")}
                style={styles.button}>
                    <Text style={styles.button_text}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
                title="Login"
                activeOpacity='.5'
                onPress={() => navigation.navigate("Login")}
                style={styles.button}>
                <Text style={styles.button_text}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    button: { height: window.height*.1,
        width: window.width*.5,
        borderRadius: 10,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    button_text: {
        fontSize: 24,
    },
});