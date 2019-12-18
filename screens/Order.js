import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet } from 'react-native'

class Order extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Order
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Order