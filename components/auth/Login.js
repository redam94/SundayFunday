import React, { Component } from 'react';
import { View,  TouchableOpacity, TextInput, Dimensions, StyleSheet, Text, Alert } from 'react-native';

import firebase from 'firebase';
import { a_100, a_30, flute as pink, background as yellow, a_50 } from '../../styles/colors';
require('firebase/auth');

const window = Dimensions.get('window');

export class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
        };

        this.onSignUp = this.onSignIn.bind(this);
    }

    onSignIn(){
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result)=>{
            Alert.alert("Sign in successful!")
        })
        .catch((error)=> {
            Alert.alert("Invalid Credentials", "Check your email or password");
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder="email"
                    onChangeText={(email) => this.setState({ email })}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.onSignUp()}
                    title="Sign In"
                >
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: yellow+a_50,
    },
    textInput: {
        height: .05*window.height,
        width: .8*window.width,
        marginVertical: 10,
    },
    button: {
        height: .05*window.height,
        width: .8*window.width,
        borderRadius: 10,
        backgroundColor: yellow+a_100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: pink+a_100,
    },
});

export default Login