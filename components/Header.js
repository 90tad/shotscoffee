import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { color, scale, verticalScale } from '../constants/theme'

const Header = ({ title, children }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        elevation: 8,
        height: verticalScale(76.41),
        justifyContent: 'center',
        backgroundColor: color.COFFE,
        paddingLeft: scale(24)

    },
    text: {
        fontFamily: 'Comfortaa-Bold',
        fontSize: scale(22),
        color: color.LIGHT_GRAY,
    }
})

export default Header