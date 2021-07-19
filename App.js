import { StatusBar } from 'expo-status-bar';

import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';
const store = createStore(rootReducer, applyMiddleware(thunk))


import firebase from 'firebase';



const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};


if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';
import LoginScreen from './components/auth/Login';
import MainScreen from './components/Main';
import AddScreen from './components/main/Add';
import SaveScreen from './components/main/Save';

import { a_60, a_80, flute } from './styles/colors';

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
    }
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(!user){
        this.setState({
          loggedIn:false,
          loaded: true,
        })
      }else{
        this.setState({
        loggedIn: true,
        loaded: true,
      })
    }
    })
  }
  render() {
    const { loggedIn, loaded } = this.state
    if(!loaded){
      return(
        <View style={{flex: 1, justifyContent: 'center'}}>
        </View>
      )
    }
    if(!loggedIn){
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false}}/>
            <Stack.Screen name="Register" component={RegisterScreen} options={{headerStyle:{ backgroundColor: flute+a_80}}}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerStyle:{ backgroundColor: flute+a_80}}}/>
          </Stack.Navigator>
        </NavigationContainer>
      )
    }
    if(loggedIn){
      return(
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
              <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false}}/>
              <Stack.Screen name="Add" component={AddScreen} options={{headerStyle:{
                        backgroundColor: flute + a_60
                    }}}/>
              <Stack.Screen name="Save" component={SaveScreen} navigation={this.props.navigation} options={{headerStyle:{
                backgroundColor: flute + a_60
              }}}/>
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>

      )
    }
  }
}

const styles = StyleSheet.create({
  header:{
      backgroundColor: flute+a_60,
  },
});

export default App
