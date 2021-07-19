import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import Button from '../shared/Button'
import { a_30, a_60, background, flute } from '../../styles/colors'
import { Camera } from 'expo-camera'
import * as ImagePicker from 'expo-image-picker'



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
    
    return(
    <View style={{flex: 1}}>
        <View style={styles.cameraContainer}>
            <Camera style={styles.fixedRatio} type={type} ratio={'1:1'} ref={ref => setCamera(ref)}/>
        </View>
        <Button 
          text='Flip Camera'
          onPress={()=>{
              setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
              )
          }}
        />
        <Button text='Take Picture' onPress={takePicture}/>
        {hasGalleryPermission && <Button text='Select Picture' onPress={pickImage}/>}
        {image && <Image source={{uri: image}} style={styles.fixedRatio}/>}
        <Button 
            text='Save' 
            onPress={() => navigation.navigate('Save', {image})}/>
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
        aspectRatio: 1
    },
    image:{
        flex: 1,
    }
})