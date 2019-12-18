import React from 'react'
import { StyleSheet, View } from 'react-native';
import { color } from '../constants/theme'

const Divider = () => {
    return (
        <View style={styles.container}></View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        backgroundColor: color.CAPPUCCINO,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        height: 3
    }
})

export default Divider