import React, { Component } from 'react';
import { View,  TextInput, Dimensions, StyleSheet, Alert } from 'react-native';
import Button from '../shared/Button';
import firebase from 'firebase';
import { a_100, flute, background, a_50 } from '../../styles/colors';
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
                <Button
                    buttonStyle={styles.button}
                    onPress={() => this.onSignUp}
                    text="Sign In"
                    textStyle={styles.buttonText}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: background+a_50,
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
        backgroundColor: background+a_100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '200',
    },
});

export default Login