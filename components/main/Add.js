import React, { useState, useEffect } from 'react'
import { Dimensions, StyleSheet, View, Text, Image } from 'react-native'
import Button from '../shared/Button'
import { a_30, a_60, background, flute } from '../../styles/colors'
import { Camera } from 'expo-camera'
import * as ImagePicker from 'expo-image-picker'
import BackButton from '../svgs/SwitchCamera'


export default function Add({ navigation }){
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        ( async () => {
            const cameraStatus = await Camera.requestPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');

            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPermission(galleryStatus.status);
        })();
    }, []);

    const takePicture = async () => {
        if(camera){
            const data = await camera.takePictureAsync(null);
            setImage(data.uri);
        }
    }
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync(
            { mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: true,
              aspect:[1,1],
            quality: 1}
        );
        console.log(result);
        if (!result.canelled){
            setImage(result.uri);
        }
    }

    if (hasCameraPermission === null){
        return <View/>;
    }
    if (hasCameraPermission === false){
        return <Text>No access to camera</Text>
    }
    var height = Dimensions.get("window").height;
    var width = Dimensions.get('window').width;
    width = (width<height)?width:height;
    if(image){
        
        return(
            <View style={{flex: 1, backgroundColor: background+a_30, alignContent: 'center'}}>
                <Image source={{uri: image}} resizeMode='center' style={{width: width, height: width}}/>
                <Button onPress={() => setImage(null)} text="Clear"/>
                <Button 
                    text='Save' 
                    onPress={() => navigation.navigate('Save', {image})}/>
            </View>
        )
    }
    return(
    <View style={{flex: 1, backgroundColor: background+a_30}}>
        <View style={styles.cameraContainer}>
            <Camera style={[styles.fixedRatio, {aspectRatio: 1, width: width, height: width}]} type={type} ratio={'1:1'} ref={ref => setCamera(ref)}/>
        </View>
        <Button 
          text=''
          buttonStyle={{width: 50, height: 50, borderRadius: 30, position: 'absolute', top: 10, left: 10}}
          onPress={()=>{
              setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
              )
          }}
        >
            <BackButton width={35} height={35}/>
        </Button>
        
        <Button 
            text=''
            onPress={takePicture} 
            buttonStyle={{width: 50, height:50, 
                          borderRadius: 30, position: 'absolute',
                          top:width-60, left: Dimensions.get('window').width/2-25, backgroundColor: "#ffffffd0"}}/>
        {hasGalleryPermission && <Button text='Select Picture' onPress={pickImage}/>}
    
    </View>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        width: 'auto',
        height: 30,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: background,
    },
    textStyle: {
        color: flute,
        justifyContent: 'center',
        fontSize: 16,
    },
    cameraContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: background+a_30
    },
    fixedRatio:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: background+a_30,
    },
    image:{
        flex: 1,
    }
})