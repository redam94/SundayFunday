import React, {Component} from 'react'
import { View, Text } from 'react-native'

import { createMaterialBottomTabNavigator as createBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { connect } from'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../redux/actions/index'

import FeedScreen from './main/Feed'
import ProfileScreen from './main/Profile'
import { a_30, a_40, a_60, flute as pink, background as yellow, a_80 } from '../styles/colors'

const Tab = createBottomTabNavigator();

const EmptyScreen = () => {
    return(null)
}

export class Main extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
       
        return(
            <Tab.Navigator initialRouteName='Feed' labeled={false} style={{backgroundColor: yellow+a_30}} barStyle={{ backgroundColor: pink+a_80 }}>
                <Tab.Screen name='Feed' component={FeedScreen} options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <MaterialCommunityIcons name="home" color={color} size={26}/>
                        )
                    },
                    
                }}/>
                <Tab.Screen name='AddContainer' component={EmptyScreen} 
                    listeners={({ navigation }) => ({
                        tabPress: event => {
                            event.preventDefault();
                            navigation.navigate("Add")
                        }
                    })}
                    options={{
                        
                        tabBarIcon: ({ color, size }) => {
                            return (
                                <MaterialCommunityIcons name="plus-box" color={color} size={26}/>
                            )
                        },
                    
                }}/>
                <Tab.Screen name='Profile' component={ProfileScreen} options={{
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <MaterialCommunityIcons name="account" color={color} size={26}/>
                        )
                    }
                }}/>
            </Tab.Navigator> 
        )
    }
}
const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
}
)
const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(Main)