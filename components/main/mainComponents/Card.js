import React, { Component } from 'react';
import { View, StyleSheet, Image, FlatList, Pressable, Modal } from 'react-native';
import { a_10, background, flute } from '../../../styles/colors';
import Comment from './Comment';

export default class Card extends Component {
    constructor({ data, img, ...props }){
        super(data, img, props);
        this.state = { isModalVisible: false };
        this.renderItem = this.renderItem.bind(this);
        this.img = img || require('../../../assets/champagne.png');
        this.data = [
            {
                id: 0,
                date: '01/12/21',
                text: 'Hello!'
            },
            {
                id: 1,
                date: '01/15/21',
                text: "Cool!"
            },
            {
                id: 2,
                date: '01/15/21',
                text: "Wow!"
            },
            {
                id: 3,
                date: '01/15/21',
                text: "The best sunday ever!"
            },
            {
                id: 4,
                date: '01/15/21',
                text: "How to have fun!"
            },
        ];
    };
    
    renderItem({ item }){
        const { date, text } = item;
        return (
            <Comment date={date}>{text}</Comment>
        )
    };
    
    setModalVisible = ( visible ) => {
        this.setState({isModalVisible: visible});
    };
    
    render() {
        const { isModalVisible } = this.state;
        return (
            <View style={styles.cardContainer}>
                <Modal 
                    animationType="slide"
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!isModalVisible);
                    }}>
                    <View style={styles.modalContainer}>
                        <Pressable onPress={() => { this.setModalVisible(!isModalVisible) }}>
                            <Image style={styles.image} source={this.img}/>
                        </Pressable>
                        <FlatList 
                            style={styles.modalText} 
                            data={this.data}
                            renderItem={this.renderItem}
                            keyExtractor={item => item.id}>
                        </FlatList>
                    </View>
                </Modal>
                <Pressable 
                    style={styles.image} 
                    onPress={() => {
                    this.setModalVisible(!isModalVisible);
                    console.log(isModalVisible);
                    }
                    }>
                    <Image style={styles.image} source={this.img}/>
                </Pressable>
                <FlatList 
                    style={styles.textContainer} 
                    data={this.data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}>
                </FlatList>
            </View>
        )
    };
};

const styles = StyleSheet.create({
    cardContainer:{
        elevation: 3,
        width:300,
        height:400,
        margin: 10,
        alignSelf: 'center',
        shadowOpacity: .5,
        shadowRadius: 20,
        shadowOffset: {
            height:10, 
            width:10
        },
        borderRadius: 5,
        shadowColor:'#000',
        borderColor:'#fff',
        overflow: 'hidden',
    },
    image:{
        height: 300,
        width: 300,
        alignSelf: 'center',
        backgroundColor:'#fff',
    },
    textContainer:{
        height: 100,
        width: 300,
        overflow: 'scroll',
        backgroundColor: flute,
    },
    modalContainer:{
        flex:1,
        justifyContent: 'center',
        paddingBottom: 50,
        backgroundColor: background + a_10
    },
    modalText:{
        alignSelf: 'center',
        overflow: 'scroll',
        backgroundColor: flute,
    }
});