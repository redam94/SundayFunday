import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Button, Image } from 'react-native'
import { Camera } from 'expo-camera'
import * as ImagePicker from 'expo-image-picker'

export default function Add(){
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
            const data = await camera.takePictureAsync(null)
            setImage(data.uri)
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
            setImage(result.uri)
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
          title='Flip Image'
          onPress={()=>{
              setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
              )
          }}
        ></Button>
        <Button title='Take Picture' onPress={takePicture}></Button>
        <Button title='Select Image' onPress={pickImage}/>
        {image && <Image source={{uri: image}} style={styles.image}/>}
    </View>
    )
}

const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    fixedRatio:{
        flex:1,
        aspectRatio: 1
    },
    image:{
        flex: 1,
    }
})