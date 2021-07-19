import React from 'react'
import { TouchableOpacity, Text, StyleSheet} from 'react-native'
import { background } from '../../styles/colors';

export default function Button({ buttonStyle, text, textStyle, onPress }) {

    return (
      <TouchableOpacity onPress={onPress} style={ buttonStyle || styles.buttonStyle }>
          <Text style={ textStyle || styles.textStyle }>{text.toUpperCase()}</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        height: 35,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: background,
    },
    textStyle: {
        color: '#fff',
        justifyContent: 'center',
        fontSize: 16,
    },
});
