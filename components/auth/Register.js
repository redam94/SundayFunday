import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Dimensions} from 'react-native';
import Button from '../shared/Button';
import firebase from 'firebase'
import { a_100, flute, background, a_50 } from '../../styles/colors';

const window = Dimensions.get('window');

export class Register extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
        };

        this.onSignUp = this.onSignUp.bind(this);
    }

    onSignUp(){
        const { email, password, name } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result)=>{
            firebase.firestore().collection("users")
                .doc(firebase.auth().currentUser.uid)
                .set({
                    name,
                    email
                })
            console.log(result)
        })
        .catch((error)=> {
            console.log(error)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInput}
                    placeholder="name"
                    onChangeText={(name) => this.setState({ name })}
                />
                <TextInput style={styles.textInput}
                    placeholder="email"
                    onChangeText={(email) => this.setState({ email })}
                />
                <TextInput style={styles.textInput}
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password} )}
                />
                <Button 
                    text="Sign Up" 
                    onPress={() => this.onSignUp()} 
                    buttonStyle={styles.button}
                    textStyle={styles.buttonText}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: background+a_50
    },
    textInput: {
        height: window.height*.05,
        width: window.width*.8,
        marginVertical: 10
    },
    button: {
        height: .05*window.height,
        width: .8*window.width,
        borderRadius: 10,
        backgroundColor: background+a_100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '200',
    }
})

export default Register
