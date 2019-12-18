import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { scale, color } from '../constants/theme'

const MyBadge = ({ text, badge, button }) => {

    const containerStyle = [
        styles.container,
        badge && styles.badge,
        button && styles.button
    ]

    return (
        <View style={containerStyle}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const width = scale(19)

const styles = StyleSheet.create({
    container: {
        width: width,
        height: width,
        borderRadius: width / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    badge: {
        backgroundColor: color.ROSE,
        position: 'absolute',
        top: -width / 2.6,
        right: -width / 2.6,
        zIndex: 1,
    },
    text: {
        color: 'white',
        fontSize: scale(19) / 2
    },
    button: { backgroundColor: color.COFFE }
})

export default MyBadge