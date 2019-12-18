import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { color, scale, verticalScale } from '../constants/theme'

const MyButton = ({ onPress, text, coffee, cappuccino, edit, ...props }) => {

    const buttonStyle = [
        coffee && styles.coffee,
        cappuccino && styles.cappuccino,
        edit && styles.edit
    ]

    const textStyle = [
        styles.text,
        coffee && styles.coffeeText,
        cappuccino && styles.cappuccinoText,
        edit && styles.editText
    ]

    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress} {...props}>
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cappuccino: {
        backgroundColor: color.CAPPUCCINO,
        width: scale(198),
        height: verticalScale(43),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scale(43) / 2
    },
    coffee: {
        height: verticalScale(36),
        backgroundColor: color.COFFE,
        borderRadius: verticalScale(36) / 2,
        width: scale(91),
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: verticalScale(14),
    },
    cappuccinoText: {
        fontFamily: 'OpenSans-Regular'
    },
    coffeeText: {
        fontFamily: 'Comfortaa-Light',
        fontSize: verticalScale(12),
    },
    edit: {
        width: scale(33),
        height: verticalScale(15),
        borderRadius: verticalScale(15) / 2,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    editText: {
        color: color.COFFE,
        fontFamily: 'Comfortaa-Regular',
        fontSize: verticalScale(10),
        alignSelf: 'center'
    }
})

export default MyButton