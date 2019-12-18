import React, { Component } from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'
import Header from '../components/Header'
import Divider from '../components/Divider'
import Item from '../components/ItemCart'
import { verticalScale, scale } from '../constants/theme'
import Button from '../components/MyButton'

const data = [
    {
        id: 1,
        product: 'Latte',
        des: 'Iced, 50% Sugar, Single Shot.',
        price: 5,
        ordered: 1
    },
    {
        id: 2,
        product: 'Cappucino',
        des: 'Iced, 50% Sugar, Single Shot.',
        price: 5,
        ordered: 2
    },
]

class Cart extends Component {

    _listHeaderComponent() {
        return (
            <View style={styles.header}>
                <Text style={styles.text}>Qty: 3 Cups</Text>
                <Text style={styles.text}>Total: %15.00</Text>
            </View>
        )
    }

    _listFooterComponent() {
        return (
            <View style={styles.footer}>
                <Button coffee text='Checkout' />
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Header title='My Cart'>
                    <Divider />
                </Header>
                <FlatList
                    ListFooterComponent={this._listFooterComponent}
                    ListHeaderComponent={this._listHeaderComponent}
                    data={data}
                    renderItem={data => <Item item={data.item} />}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    text: {
        fontFamily: 'Comfortaa-Bold',
        fontSize: verticalScale(18),
    },
    header: {
        paddingHorizontal: scale(32),
        paddingVertical: scale(16),
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    footer: {
        marginVertical: verticalScale(51.48),
        marginHorizontal: scale(36),
        alignItems: 'flex-end'
    }
})

export default Cart