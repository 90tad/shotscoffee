import React from 'react'
import { TextInput, Image, View, StyleSheet } from 'react-native'
import { scale } from '../constants/theme'

const MyInput = ({ placeholder, value, onChangeText }) => {
    return (
        <View style={styles.container}>

            {placeholder == 'Email'
                ? <Image source={require('../assets/icons/Mail.png')} style={styles.mail} />
                : <Image source={require('../assets/icons/Lock.png')} style={styles.lock} />}
            <TextInput
                secureTextEntry={placeholder == 'Password' ? true : false}
                onChangeText={text => { onChangeText(text) }}
                value={value}
                style={styles.text}
                placeholder={placeholder}
                placeholderTextColor='white'
            />
        </View>
    )
}

const icon = {
    width: scale(16),
    alignSelf: 'center',
    marginRight: scale(20)
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        width: scale(327)
    },
    mail: { ...icon, height: icon.width * 3 / 4 },
    lock: { ...icon, height: icon.width },
    text: {
        color: 'white',
        fontSize: scale(14),
        fontFamily: 'Arial-Regular'
    }
})

export default MyInput