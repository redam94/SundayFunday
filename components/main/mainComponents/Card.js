import React, { Component } from 'react';
import { Dimensions, View, StyleSheet, Image, FlatList, Text } from 'react-native';
import { a_10, background, flute } from '../../../styles/colors';
import Comment from './Comment';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

var width = Dimensions.get("window").width;

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
        width = Dimensions.get('window').width
        return (
            <Comment date={date} width={width}>{text}</Comment>
        )
    };
    
    setModalVisible = ( visible ) => {
        this.setState({isModalVisible: visible});
    };
    
    render() {
        const { isModalVisible } = this.state;
        width = Dimensions.get('window').width;
        return (
            <View style={styles.cardContainer}>
                <View styles={{flexDirection: 'row', height:20, width: width, background:flute, overflow:'hidden'}}>
                    <Image style={{height:20, width:20, borderRadius:10}} source={require('../../../assets/IMG_3484.jpeg')} />
                    <Text style={{fontSize:12}}>redam94</Text>
                </View>
                <Image style={styles.image} source={this.img}/>
                <View style={{
                    flex: 2, 
                    height:15, 
                    width: width, 
                    flexDirection: 'row', 
                    backgroundColor: flute}}>
                    <MaterialCommunityIcons style={{position:'relative', left:width-44}} size={26} name='bookmark-outline' />
                    
                    <MaterialCommunityIcons style={{position:'relative', left:5}} size={26} name='glass-cocktail' color={background}/>
                
                    <MaterialCommunityIcons style={{position:'relative', left:5}} size={26} name="terrain"/>
                    <MaterialCommunityIcons style={{position:'relative', left:5}} size={26} name="silverware-clean"/>
                </View>
                <View style={styles.textContainer}>
                    <Comment date={this.data[0].date}>Wow!</Comment>
                    </View>
                
            </View>
        )
    };
};

const styles = StyleSheet.create({
    cardContainer:{
        elevation: 3,
        flex:1,
        flexDirection: 'column',
        width: width,
        height: (.05*width<75)?(75+width):1.05*width,
        margin: 0,
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
        backgroundColor: flute,
    },
    image:{
        height: width,
        width: width,
        alignSelf: 'center',
        backgroundColor:'#fff',
        overflow: 'hidden'
    },
    textContainer:{
        height: (.05*width<75)?75:.05*width,
        flex: 3,
        marginLeft:25,
        width: width,
        overflow: 'hidden',
        backgroundColor: flute,
    },
});