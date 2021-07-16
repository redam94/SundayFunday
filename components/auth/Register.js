import React, { Component } from 'react';
import { View,  TouchableOpacity, TextInput, Text, StyleSheet, Dimensions} from 'react-native';
import firebase from 'firebase'
import { a_100, a_30, flute as pink, background as yellow, a_50 } from '../../styles/colors';

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
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.onSignUp()}
                    title="Sign Up"
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: yellow+a_50
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
        backgroundColor: yellow+a_100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    buttonText: {
        fontSize: 18,
        color: pink
    }
})

export default Register
