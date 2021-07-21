import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default class Comment extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <TouchableOpacity style={styles.commentContainer}>
                <Text style={styles.date}>{this.props.date||'now'}</Text>
                <Text>{this.props.children}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    commentContainer: {
        height:32,
        width: 300,
        justifyContent: 'flex-start',
        padding: 2,
        overflow: 'hidden',
    },
    date: {
        fontSize: 10,
        color: '#444'
    }
});