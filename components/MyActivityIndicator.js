import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

const MyActivityIndicator = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={'large'} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default MyActivityIndicator